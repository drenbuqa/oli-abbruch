"use client";

import { useState, useEffect, useCallback, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

type FieldErrors = { name?: string; email?: string; message?: string };

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateField = (name: string, value: string) => {
    let error: string | undefined;
    if (name === "name" && !value.trim()) error = "Name ist erforderlich.";
    if (name === "email") {
      if (!value.trim()) error = "E-Mail ist erforderlich.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }
    if (name === "message" && !value.trim()) error = "Nachricht ist erforderlich.";
    setFieldErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    validateField(e.target.name, e.target.value);
  };

  const validate = (): boolean => {
    const errors: FieldErrors = {};
    if (!form.name.trim()) errors.name = "Name ist erforderlich.";
    if (!form.email.trim()) {
      errors.email = "E-Mail ist erforderlich.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }
    if (!form.message.trim()) errors.message = "Nachricht ist erforderlich.";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleClose = useCallback(() => {
    onClose();
    setTimeout(() => {
      setStatus("idle");
      setFieldErrors({});
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 300);
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, handleClose]);

  const inputBase =
    "w-full bg-white/5 border outline-none text-off-white placeholder:text-gray-500 px-4 py-3 rounded-sm text-sm transition-colors duration-200";
  const inputClass = (field: keyof FieldErrors) =>
    `${inputBase} ${fieldErrors[field] ? "border-orange-400 focus:border-orange-400" : "border-gray-700/60 focus:border-red"}`;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[61] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-sm shadow-2xl shadow-black/60 pointer-events-auto flex flex-col lg:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center text-gray-400 hover:text-off-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={18} />
              </button>

              {/* Left panel — contact info */}
              <div className="bg-charcoal px-7 py-8 lg:w-[280px] shrink-0 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-gray-700/40">
                <div>
                  <div className="h-[2px] w-8 bg-red mb-3" />
                  <h2 className="text-xl font-black text-off-white leading-tight">
                    Kontakt &amp; <span className="text-red">Anfrage</span>
                  </h2>
                  <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                    Wir melden uns innerhalb von 24 Stunden.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    { icon: Phone, label: "Telefon", value: "+49 1590 1425683", href: "tel:+4915901425683" },
                    { icon: Mail, label: "E-Mail", value: "info@oliabbruch.de", href: "mailto:info@oliabbruch.de" },
                    { icon: MapPin, label: "Adresse", value: "Beethovenstr. 19\n73642 Welzheim", href: "https://maps.google.com/?q=Beethovenstr.+19,+73642+Welzheim" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-start gap-3"
                      >
                        <div className="w-8 h-8 bg-red/10 group-hover:bg-red/20 rounded-sm flex items-center justify-center shrink-0 transition-colors mt-0.5">
                          <Icon size={14} className="text-red" strokeWidth={1.8} />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">{item.label}</p>
                          <p className="text-off-white text-sm font-medium whitespace-pre-line group-hover:text-red transition-colors leading-snug">{item.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-auto hidden lg:block">
                  <a
                    href="tel:+4915901425683"
                    className="flex items-center justify-center gap-2 w-full bg-red hover:bg-red-dark text-off-white font-bold text-sm py-3 rounded-sm transition-colors"
                  >
                    <Phone size={13} />
                    Jetzt anrufen
                  </a>
                </div>
              </div>

              {/* Right panel — form */}
              <div className="bg-[#1e1e1e] flex-1 overflow-y-auto px-7 py-8">
                {status === "success" ? (
                  <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center gap-5">
                    <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center">
                      <CheckCircle size={28} className="text-green-400" />
                    </div>
                    <h3 className="text-xl font-black text-off-white">Nachricht gesendet!</h3>
                    <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                      Vielen Dank für Ihre Anfrage. Wir melden uns in der Regel innerhalb von 24 Stunden.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-2 text-sm font-bold text-red hover:underline underline-offset-4"
                    >
                      Schließen
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-[10px] text-gray-400 uppercase tracking-wider mb-1.5">
                          Name <span className="text-red">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Max Mustermann"
                          onBlur={handleBlur}
                          className={inputClass("name")}
                        />
                        {fieldErrors.name && (
                          <p className="mt-1.5 text-xs text-orange-400 flex items-center gap-1">
                            <AlertCircle size={11} /> {fieldErrors.name}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[10px] text-gray-400 uppercase tracking-wider mb-1.5">
                          Telefon <span className="text-gray-600">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="0159 00000000"
                          className={`${inputBase} border-gray-700/60 focus:border-red`}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] text-gray-400 uppercase tracking-wider mb-1.5">
                        E-Mail <span className="text-red">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="ihre@email.de"
                        onBlur={handleBlur}
                        className={inputClass("email")}
                      />
                      {fieldErrors.email && (
                        <p className="mt-1.5 text-xs text-orange-400 flex items-center gap-1">
                          <AlertCircle size={11} /> {fieldErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] text-gray-400 uppercase tracking-wider mb-1.5">
                        Nachricht <span className="text-red">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Beschreiben Sie Ihr Projekt — Art der Arbeit, Umfang, gewünschter Zeitraum..."
                        onBlur={handleBlur}
                        className={`${inputClass("message")} resize-none`}
                      />
                      {fieldErrors.message && (
                        <p className="mt-1.5 text-xs text-orange-400 flex items-center gap-1">
                          <AlertCircle size={11} /> {fieldErrors.message}
                        </p>
                      )}
                    </div>

                    {status === "error" && (
                      <div className="flex items-start gap-3 p-3 bg-red/10 border border-red/30 rounded-sm">
                        <AlertCircle size={15} className="text-red shrink-0 mt-0.5" />
                        <p className="text-sm text-red-200">
                          Fehler beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns an:{" "}
                          <a href="tel:+4915901425683" className="font-bold underline">+49 1590 1425683</a>
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group flex items-center justify-center gap-2 bg-red hover:bg-red-dark disabled:opacity-60 disabled:cursor-not-allowed text-off-white font-bold px-6 py-3.5 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-red/20 text-sm"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-off-white/30 border-t-off-white rounded-full animate-spin" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          Nachricht senden
                          <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-gray-600 text-center">
                      <span className="text-red">*</span> Pflichtfelder. Ihre Daten werden gemäß unserer{" "}
                      <a href="/datenschutz" className="underline hover:text-gray-400 transition-colors" onClick={handleClose}>
                        Datenschutzerklärung
                      </a>{" "}
                      vertraulich behandelt.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
