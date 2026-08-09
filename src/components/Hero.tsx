"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} id="hero" className="relative h-screen min-h-[600px] overflow-hidden flex items-center">
      {/* Video / background */}
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        {/* Hero background image */}
        <Image
          src="/images/hero/PHOTO-2026-07-13-23-02-02-5.jpg"
          alt="Oli Abbruch & Entkernung"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Video overlay (plays on top if available) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/hero/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/75" />
        {/* Red accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red to-transparent opacity-60" />
      </motion.div>

      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 30 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="hidden sm:inline-flex items-center gap-2 border border-red/40 bg-red/10 backdrop-blur-sm px-4 py-1.5 rounded-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-200">
              Professionelle Abbrucharbeiten
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={mounted ? { opacity: 0, y: 40 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight text-off-white mb-4 sm:mb-6"
          >
            <span className="block">ABBRUCH</span>
            <span className="block text-red">&amp; ENTKERNUNG</span>
            <span className="block">AUF HÖCHSTEM</span>
            <span className="block">NIVEAU</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={mounted ? { opacity: 0, y: 30 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base sm:text-2xl font-light text-gray-300 mb-3 sm:mb-4 tracking-[0.08em] uppercase"
          >
            Schnell — Sauber — Zuverlässig
          </motion.p>

          <motion.p
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-10 max-w-xl leading-relaxed"
          >
            Ihr Spezialist für Abbruch, Entkernung und Sanierung in
            Baden-Württemberg. Vertrauen Sie auf Erfahrung, Präzision und
            höchste Sicherheitsstandards.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex gap-3 sm:gap-4"
          >
            <button
              onClick={() => scrollTo("#kontakt")}
              className="group flex items-center gap-1.5 sm:gap-2 bg-red hover:bg-red-dark text-off-white font-bold text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-4 rounded-sm transition-all duration-300 hover:shadow-2xl hover:shadow-red/30 hover:gap-2.5 sm:hover:gap-3"
            >
              Kontakt aufnehmen
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("#leistungen")}
              className="flex items-center gap-2 border-2 border-off-white/30 hover:border-off-white text-off-white font-bold text-sm sm:text-base px-5 sm:px-8 py-3 sm:py-4 rounded-sm transition-all duration-300 hover:bg-off-white/5"
            >
              Unsere Leistungen
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={mounted ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scrollen</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
