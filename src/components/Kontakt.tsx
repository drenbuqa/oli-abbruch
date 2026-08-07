"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Navigation } from "lucide-react";

type FieldErrors = { name?: string; email?: string; message?: string };

function MapEmbed() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="rounded-sm border border-gray-700/40 bg-charcoal-light/20 flex-1 min-h-[200px] flex flex-col items-center justify-center gap-3 p-6 text-center">
        <Navigation size={24} className="text-red/60" strokeWidth={1.5} />
        <p className="text-off-white font-bold text-sm">Beethovenstr. 19, 73642 Welzheim</p>
        <a
          href="https://maps.google.com/?q=Beethovenstr.+19,+73642+Welzheim"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-red hover:underline font-bold uppercase tracking-wider"
        >
          In Google Maps öffnen →
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-sm overflow-hidden border border-gray-700/40 flex-1 min-h-[200px]">
      <iframe
        src="https://maps.google.com/maps?q=Beethovenstra%C3%9Fe+19%2C+73642+Welzheim&output=embed&hl=de"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "200px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Oli Abbruch & Entkernung Standort"
        onError={() => setError(true)}
      />
    </div>
  );
}

export default function Kontakt() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

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

  const inputBase =
    "w-full bg-charcoal-light/40 border outline-none text-off-white placeholder:text-gray-600 px-4 py-3.5 rounded-sm text-sm transition-colors duration-200";
  const inputClass = (field: keyof FieldErrors) =>
    `${inputBase} ${fieldErrors[field] ? "border-orange-400 focus:border-orange-400" : "border-gray-700/50 focus:border-red"}`;

  return (
    <section id="kontakt" className="py-28 bg-charcoal relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-red" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red">
              Sprechen Sie uns an
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-off-white leading-tight">
            Kontakt &amp; <span className="text-red">Anfrage</span>
          </h2>
          <p className="text-gray-mid mt-4 max-w-xl leading-relaxed text-sm">
            Schreiben Sie uns — wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: info + map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {[
              { icon: Phone, label: "Telefon", value: "0159 01425683", href: "tel:015901425683" },
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
                  className="group flex items-start gap-4 p-5 border border-gray-700/40 bg-charcoal-light/20 hover:border-red/40 hover:bg-charcoal-light/40 rounded-sm transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-red/10 group-hover:bg-red/20 rounded-sm flex items-center justify-center shrink-0 transition-colors">
                    <Icon size={18} className="text-red" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-off-white font-medium text-sm whitespace-pre-line">{item.value}</p>
                  </div>
                </a>
              );
            })}

            {/* Map with fallback */}
            <MapEmbed />
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20 gap-6"
              >
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-black text-off-white">Nachricht gesendet!</h3>
                <p className="text-gray-mid max-w-sm leading-relaxed">
                  Vielen Dank für Ihre Anfrage. Wir melden uns so bald wie möglich — in der Regel innerhalb von 24 Stunden.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-gray-500 hover:text-red transition-colors underline underline-offset-4"
                >
                  Weitere Nachricht senden
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">
                      Name <span className="text-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Max Mustermann"
                      className={inputClass("name")}
                    />
                    {fieldErrors.name && (
                      <p className="mt-1.5 text-xs text-orange-400 flex items-center gap-1">
                        <AlertCircle size={11} /> {fieldErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">
                      Telefon <span className="text-gray-600">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="0159 00000000"
                      className={`${inputBase} border-gray-700/50 focus:border-red`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">
                    E-Mail <span className="text-red">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ihre@email.de"
                    className={inputClass("email")}
                  />
                  {fieldErrors.email && (
                    <p className="mt-1.5 text-xs text-orange-400 flex items-center gap-1">
                      <AlertCircle size={11} /> {fieldErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">
                    Nachricht <span className="text-red">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={7}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie Ihr Projekt — Art der Arbeit, Umfang, gewünschter Zeitraum..."
                    className={`${inputClass("message")} resize-none`}
                  />
                  {fieldErrors.message && (
                    <p className="mt-1.5 text-xs text-orange-400 flex items-center gap-1">
                      <AlertCircle size={11} /> {fieldErrors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <div className="flex items-start gap-3 p-4 bg-red/10 border border-red/30 rounded-sm">
                    <AlertCircle size={16} className="text-red shrink-0 mt-0.5" />
                    <p className="text-sm text-red-200">
                      Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an:{" "}
                      <a href="tel:015901425683" className="font-bold underline">0159 01425683</a>
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group flex items-center justify-center gap-3 bg-red hover:bg-red-dark disabled:opacity-60 disabled:cursor-not-allowed text-off-white font-bold px-8 py-4 rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-red/20 hover:gap-4"
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-off-white/30 border-t-off-white rounded-full animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      Nachricht senden
                      <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-600 text-center">
                  <span className="text-red">*</span> Pflichtfelder. Ihre Daten werden gemäß unserer{" "}
                  <a href="/datenschutz" className="underline hover:text-gray-400 transition-colors">
                    Datenschutzerklärung
                  </a>{" "}
                  vertraulich behandelt.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
