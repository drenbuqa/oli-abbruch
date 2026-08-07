"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Leaf, Phone } from "lucide-react";
import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import { services } from "@/lib/services";

const badges = [
  { icon: ShieldCheck, title: "Sicher & zertifiziert", desc: "Höchste Sicherheitsstandards" },
  { icon: Clock,       title: "Termingerecht",          desc: "Planung, Ausführung und Abnahme" },
  { icon: Leaf,        title: "Nachhaltig",             desc: "Materialrecycling & fachgerechte Entsorgung" },
];

export default function Leistungen() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section id="leistungen" className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 grid lg:grid-cols-2 gap-10 items-end"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red block mb-3">
              Unsere Leistungen
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal leading-tight mb-4">
              Komplettlösungen<br />
              für jedes <span className="text-red">Bauprojekt.</span>
            </h2>
            <p className="text-gray-mid text-sm leading-relaxed max-w-sm">
              Von Rückbau über Entkernung bis zur fachgerechten Entsorgung –
              alles aus einer Hand, termingerecht und auf höchstem Niveau.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-7 lg:justify-end">
            {badges.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="flex items-start gap-3">
                  <Icon size={20} className="text-red mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-bold text-charcoal text-sm leading-tight">{b.title}</p>
                    <p className="text-xs text-gray-mid mt-0.5 leading-snug">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Cards grid — CSS animation triggered once by useInView on the container */}
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link href={`/leistungen/${service.slug}`} key={service.slug}>
                <div
                  className={`group bg-white rounded-sm overflow-hidden border border-gray-light/70 hover:border-red/40 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full ${gridInView ? "card-reveal" : "opacity-0"}`}
                  style={{ animationDelay: gridInView ? `${i * 75}ms` : "0ms" }}
                >
                  <div className="relative h-44 overflow-hidden bg-charcoal shrink-0">
                    <ImageWithFallback
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      plain
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-red text-off-white text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-1">
                        {service.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 w-9 h-9 bg-white flex items-center justify-center shadow-md">
                      <Icon size={17} className="text-red" />
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-black text-charcoal text-[15px] leading-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-mid leading-relaxed flex-1">
                      {service.desc}
                    </p>
                    <div className="flex items-center gap-1.5 text-red text-xs font-bold mt-4 group-hover:gap-2.5 transition-all duration-200">
                      Mehr erfahren
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8 bg-off-white-dark border border-gray-light/60 rounded-sm px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-stretch gap-5">
            <div className="w-[3px] bg-red rounded-full shrink-0" />
            <div>
              <h4 className="font-black text-charcoal text-lg">Sie haben ein Projekt?</h4>
              <p className="text-xs text-gray-mid mt-1 max-w-sm">
                Wir beraten Sie unverbindlich und finden die beste Lösung für Ihre Anforderungen.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-5 shrink-0">
            <button
              onClick={() => document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 bg-red hover:bg-red-dark text-off-white font-bold text-sm px-6 py-3 rounded-sm transition-all duration-300"
            >
              Projekt anfragen
              <ArrowRight size={15} />
            </button>
            <a
              href="tel:+4971822062990"
              className="flex items-center gap-3 text-charcoal hover:text-red transition-colors duration-200"
            >
              <Phone size={18} strokeWidth={1.5} />
              <div>
                <p className="font-bold text-sm">+49 7182 2062990</p>
                <p className="text-[10px] text-gray-mid">Jetzt anrufen</p>
              </div>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
