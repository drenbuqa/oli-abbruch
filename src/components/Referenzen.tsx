"use client";

import { motion } from "framer-motion";

/* ── Inline white SVG logos ── */

function LogoZueblin() {
  return (
    <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
      <text x="0" y="36" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="34" fill="white" letterSpacing="2">ZÜBLIN</text>
    </svg>
  );
}

function LogoGoldbeck() {
  return (
    <svg viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
      <text x="0" y="36" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="32" fill="white" letterSpacing="1">GOLDBECK</text>
    </svg>
  );
}

function LogoPorsche() {
  return (
    <svg viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
      <text x="0" y="36" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="32" fill="white" letterSpacing="3">PORSCHE</text>
    </svg>
  );
}

function LogoMercedes() {
  return (
    <svg viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
      {/* Three-pointed star in circle */}
      <circle cx="22" cy="24" r="20" stroke="white" strokeWidth="1.5" fill="none" />
      {/* Star points: top, bottom-left, bottom-right */}
      <path d="M22 4 L22 24 M22 24 L5.1 34 M22 24 L38.9 34" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <text x="50" y="33" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="18" fill="white" letterSpacing="1">Mercedes-Benz</text>
    </svg>
  );
}

function LogoBMW() {
  return (
    <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
      {/* BMW roundel outline */}
      <circle cx="22" cy="24" r="20" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="22" cy="24" r="14" stroke="white" strokeWidth="1" fill="none" />
      {/* Cross dividers */}
      <line x1="22" y1="10" x2="22" y2="38" stroke="white" strokeWidth="1" />
      <line x1="8" y1="24" x2="36" y2="24" stroke="white" strokeWidth="1" />
      {/* Top-left and bottom-right quadrants filled */}
      <path d="M8 24 A14 14 0 0 1 22 10 L22 24 Z" fill="white" />
      <path d="M36 24 A14 14 0 0 1 22 38 L22 24 Z" fill="white" />
      <text x="50" y="33" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="white" letterSpacing="2">BMW</text>
    </svg>
  );
}

const logos = [
  { name: "Züblin", el: <LogoZueblin /> },
  { name: "GOLDBECK", el: <LogoGoldbeck /> },
  { name: "Porsche", el: <LogoPorsche /> },
  { name: "Mercedes-Benz", el: <LogoMercedes /> },
  { name: "BMW", el: <LogoBMW /> },
];

/* Duplicate for seamless loop */
const marqueeItems = [...logos, ...logos, ...logos, ...logos];

export default function Referenzen() {
  return (
    <section id="referenzen" className="bg-charcoal overflow-hidden">

      {/* Top accent */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-red to-transparent opacity-50" />

      <div className="py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-6 mb-16 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-red block mb-4">
            Unsere Referenzen
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-off-white leading-tight">
            Sie vertrauen uns
          </h2>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-20"
        >
          {/* Left/right fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />

          {/* Top & bottom separator lines */}
          <div className="border-t border-b border-gray-700/40 py-8">
            <div className="marquee-container">
              <div className="marquee-track">
                {marqueeItems.map((logo, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center mx-14 opacity-50 hover:opacity-100 transition-opacity duration-300 shrink-0"
                  >
                    {logo.el}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <blockquote>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light italic text-off-white leading-relaxed">
              <span className="text-red font-serif not-italic" style={{ fontSize: "1.3em", lineHeight: 0, verticalAlign: "-0.15em" }}>&ldquo;</span>
              {" "}Die Zusammenarbeit mit Oli Abbruch & Entkernung war durchgehend professionell,
              termingerecht und sauber. Ein verlässlicher Partner für anspruchsvolle Bauprojekte.{" "}
              <span className="text-red font-serif not-italic" style={{ fontSize: "1.3em", lineHeight: 0, verticalAlign: "-0.15em" }}>&rdquo;</span>
            </p>

            <footer className="mt-8">
              <div className="h-px w-12 bg-red mx-auto mb-4" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red">
                Projektleitung, GOLDBECK GmbH
              </p>
            </footer>
          </blockquote>
        </motion.div>

      </div>

      {/* Bottom accent */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-red to-transparent opacity-30" />

    </section>
  );
}
