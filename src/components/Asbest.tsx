"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ImageWithFallback from "@/components/ImageWithFallback";
import { AlertTriangle, FileCheck, ShieldCheck, ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: AlertTriangle,
    title: "Schadstoffanalyse",
    desc: "Fachkundige Analyse und Bewertung der vorhandenen Schadstoffe durch zertifizierte Experten.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Sicherheitsmaßnahmen",
    desc: "Einrichtung von Sicherheitsbereichen und Schutzmaßnahmen nach TRGS 519.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Fachgerechte Entsorgung",
    desc: "Professionelle Demontage und gesetzeskonforme Entsorgung aller asbesthaltigen Materialien.",
  },
];

export default function Asbest() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="asbest" className="py-28 bg-charcoal relative overflow-hidden">
      {/* Accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-red to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-red" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red">
              Spezialisierte Leistung
            </span>
            <div className="h-px w-12 bg-red" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-off-white leading-tight mb-4">
            Asbestsanierung &{" "}
            <span className="text-red">Asbestentsorgung</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Fachgerechte Demontage und Entsorgung von asbesthaltigen Materialien nach
            TRGS 519. Wir schützen Ihre Gesundheit und die Umwelt durch zertifizierte
            Verfahren und höchste Sorgfalt.
          </p>
        </motion.div>

        {/* Images + steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image grid — 4×2 uniform */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}
          >
            {[
              "PHOTO-2026-07-13-22-38-16.jpg",
              "PHOTO-2026-07-13-22-38-16-2.jpg",
              "PHOTO-2026-07-13-22-38-16-3.jpg",
              "PHOTO-2026-07-13-22-38-16-4.jpg",
              "PHOTO-2026-07-13-22-38-16-5.jpg",
              "PHOTO-2026-07-13-22-38-16-6.jpg",
              "PHOTO-2026-07-13-22-38-16-7.jpg",
              "PHOTO-2026-07-13-22-38-17.jpg",
            ].map((file, i) => (
              <motion.div
                key={file}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-sm bg-charcoal-light"
                style={{ height: "200px" }}
              >
                <ImageWithFallback
                  src={`/images/asbest/${file}`}
                  alt={`Asbestsanierung ${i + 1}`}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110 z-10"
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/30 transition-colors duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            {steps.map((step, i) => {
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-5 p-5 border border-gray-700/40 bg-charcoal-light/30 rounded-sm group hover:border-red/30 transition-colors duration-300"
                >
                  <div>
                    <h4 className="font-bold text-red text-sm mb-2">{step.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            <div className="p-4 border border-red/20 bg-red/5 rounded-sm">
              <p className="text-xs text-gray-300 leading-relaxed">
                <span className="font-bold text-red">TRGS 519</span> – Alle unsere
                Arbeiten erfolgen nach den aktuellen Technischen Regeln für
                Gefahrstoffe und werden von zertifizierten Fachbetrieben durchgeführt.
              </p>
            </div>

            <button
              onClick={() => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })}
              className="group w-fit flex items-center gap-2 bg-red hover:bg-red-dark text-off-white font-bold px-7 py-3.5 rounded-sm transition-all duration-300"
            >
              Beratung anfragen
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
