"use client";

import { motion } from "framer-motion";
import ImageWithFallback from "@/components/ImageWithFallback";
import { ArrowRight, Package, Wrench, Truck } from "lucide-react";

const features = [
  { icon: Package, title: "HEA, HEB, IPE Träger", desc: "Alle gängigen Stahlprofile auf Maß." },
  { icon: Truck,   title: "Lieferung",             desc: "Direkt auf Ihre Baustelle, termingerecht." },
  { icon: Wrench,  title: "Einbau",                desc: "Fachgerechter Einbau durch unser Montageteam." },
];

const stahlFiles = [
  "PHOTO-2026-07-13-22-29-36.jpg",
  "PHOTO-2026-07-13-22-29-36-2.jpg",
  "PHOTO-2026-07-13-22-29-36-3.jpg",
  "PHOTO-2026-07-13-22-29-36-4.jpg",
  "PHOTO-2026-07-13-22-29-36-5.jpg",
  "PHOTO-2026-07-13-22-29-36-6.jpg",
  "PHOTO-2026-07-13-22-29-37.jpg",
];


export default function Stahltraeger() {
  return (
    <section id="stahltraeger" className="py-28 bg-off-white-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-red" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-red">Stahlbau</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal leading-tight mb-2">
              Stahlträger für
            </h2>
            <h2 className="text-4xl sm:text-5xl font-black text-red leading-tight mb-6">
              Wanddurchbrüche
            </h2>

            <p className="text-gray-mid leading-relaxed mb-8 text-base">
              Wir liefern und verbauen passende Stahlträger für Wanddurchbrüche und
              Umbaumaßnahmen — präzise, statisch geprüft und termingerecht.
            </p>

            <motion.div
              className="flex flex-col gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="group flex items-center gap-5 p-4 bg-off-white border-l-[3px] border-l-transparent border border-gray-light/50 hover:border-l-red hover:bg-white transition-all duration-250"
                  >
                    <div className="w-12 h-12 bg-red/10 group-hover:bg-red/15 rounded-sm flex items-center justify-center shrink-0 transition-colors duration-200">
                      <Icon size={24} className="text-red" strokeWidth={1.6} />
                    </div>
                    <div>
                      <h4 className="font-black text-charcoal text-sm mb-0.5">{f.title}</h4>
                      <p className="text-xs text-gray-mid leading-snug">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <button
              onClick={() => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-2 bg-red hover:bg-red-dark text-off-white font-bold px-7 py-3.5 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-red/20 hover:gap-3"
            >
              Angebot anfragen
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>

          {/* Right: 3+4 image grid — all 7 images */}
          <motion.div
            className="flex flex-col gap-2 self-end mb-[88px]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Row 1 — 3 equal images */}
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((fileIdx) => (
                <div
                  key={stahlFiles[fileIdx]}
                  className="group relative overflow-hidden rounded-sm bg-charcoal"
                  style={{ height: "220px" }}
                >
                  <ImageWithFallback
                    src={`/images/stahltraeger/${stahlFiles[fileIdx]}`}
                    alt={`Stahlträger ${fileIdx + 1}`}
                    fill
                    plain
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105 z-10"
                  />
                  <div className="absolute inset-0 z-20 bg-black/20 group-hover:bg-black/10 transition-colors duration-400" />
                </div>
              ))}
            </div>

            {/* Row 2 — 4 equal images */}
            <div className="grid grid-cols-4 gap-2">
              {[3, 4, 5, 6].map((fileIdx) => (
                <div
                  key={stahlFiles[fileIdx]}
                  className="group relative overflow-hidden rounded-sm bg-charcoal"
                  style={{ height: "160px" }}
                >
                  <ImageWithFallback
                    src={`/images/stahltraeger/${stahlFiles[fileIdx]}`}
                    alt={`Stahlträger ${fileIdx + 1}`}
                    fill
                    plain
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105 z-10"
                  />
                  <div className="absolute inset-0 z-20 bg-black/20 group-hover:bg-black/10 transition-colors duration-400" />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
