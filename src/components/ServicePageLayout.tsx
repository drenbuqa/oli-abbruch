"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { services } from "@/lib/services";
import { useState } from "react";

interface Props {
  slug: string;
}

export default function ServicePageLayout({ slug }: Props) {
  const service = services.find((s) => s.slug === slug)!;
  const otherServices = services.filter((s) => s.slug !== slug);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-off-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-off-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <Link href="/#leistungen" className="hover:text-off-white transition-colors">
              Leistungen
            </Link>
            <ChevronRight size={12} />
            <span className="text-red font-semibold">{service.title}</span>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-red text-off-white text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1">
                {service.tag}
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-off-white leading-tight mb-3">
              {service.title}
            </h1>
            <p className="text-lg text-gray-300 font-light max-w-2xl">{service.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link
          href="/#leistungen"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-mid hover:text-red transition-colors"
        >
          <ArrowLeft size={15} />
          Zurück zu Leistungen
        </Link>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Content: 2/3 */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description + bullets */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-red/10 rounded-sm flex items-center justify-center">
                  <Icon size={20} className="text-red" />
                </div>
                <h2 className="text-2xl font-black text-charcoal">Was wir bieten</h2>
              </div>
              <p className="text-gray-mid leading-relaxed mb-8 text-base">{service.desc}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.bullets.map((b) => (
                  <div
                    key={b}
                    className="flex items-start gap-3 p-4 bg-white border border-gray-light/60 rounded-sm"
                  >
                    <CheckCircle size={16} className="text-red shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal font-medium leading-snug">{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gallery */}
            {service.galleryImages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <h2 className="text-2xl font-black text-charcoal mb-6">Bildergalerie</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {service.galleryImages.map((src, i) => (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.06 }}
                      onClick={() => setLightbox(src)}
                      className="relative h-40 overflow-hidden rounded-sm bg-charcoal cursor-pointer group"
                    >
                      <Image
                        src={src}
                        alt={`${service.title} ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110 z-10"
                      />
                      <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/40 transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-charcoal rounded-sm p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div>
                <h3 className="text-xl font-black text-off-white mb-1">Projekt anfragen</h3>
                <p className="text-sm text-gray-400">Wir erstellen Ihnen ein unverbindliches Angebot.</p>
              </div>
              <Link
                href="/#kontakt"
                className="flex items-center gap-2 bg-red hover:bg-red-dark text-off-white font-bold px-7 py-3.5 rounded-sm transition-all duration-300 shrink-0"
              >
                Kontakt aufnehmen
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Sidebar: other services */}
          <aside>
            <div className="sticky top-24">
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-red mb-5">
                Weitere Leistungen
              </h3>
              <div className="flex flex-col gap-1">
                {otherServices.map((s) => {
                  const OtherIcon = s.icon;
                  return (
                    <Link
                      key={s.slug}
                      href={`/leistungen/${s.slug}`}
                      className="group flex items-center gap-3 px-4 py-3 bg-white border border-gray-light/60 hover:border-red/40 hover:bg-off-white-dark rounded-sm transition-all duration-200"
                    >
                      <div className="w-8 h-8 bg-charcoal/5 group-hover:bg-red/10 rounded-sm flex items-center justify-center shrink-0 transition-colors">
                        <OtherIcon
                          size={16}
                          className="text-gray-mid group-hover:text-red transition-colors"
                        />
                      </div>
                      <span className="text-sm font-semibold text-charcoal/70 group-hover:text-charcoal transition-colors leading-tight">
                        {s.title}
                      </span>
                      <ArrowRight
                        size={13}
                        className="text-gray-300 group-hover:text-red ml-auto shrink-0 transition-colors"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-off-white/60 hover:text-off-white text-sm uppercase tracking-widest"
              onClick={() => setLightbox(null)}
            >
              ✕ Schließen
            </button>
            <div className="relative w-full max-w-5xl max-h-[85vh] aspect-video rounded-sm overflow-hidden">
              <Image src={lightbox} alt="" fill className="object-contain" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
