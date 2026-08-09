"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ZoomIn, X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";
import { galleryImages, previewIds } from "@/lib/gallery";

const preview = previewIds.map((id) => galleryImages.find((img) => img.id === id)!);

export default function Projekte() {
  const [lightboxId, setLightboxId] = useState<number | null>(null);

  const lightboxIndex = preview.findIndex((img) => img.id === lightboxId);

  const goNext = useCallback(() => {
    if (lightboxIndex < preview.length - 1) setLightboxId(preview[lightboxIndex + 1].id);
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex > 0) setLightboxId(preview[lightboxIndex - 1].id);
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxId === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxId(null);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxId, goNext, goPrev]);

  return (
    <section id="projekte" className="py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-red" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-red">
                Unsere Arbeit
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal leading-tight">
              Projekte &amp; <span className="text-red">Galerie</span>
            </h2>
            <p className="text-gray-mid mt-4 max-w-xl leading-relaxed text-sm">
              Einblicke in unsere abgeschlossenen Projekte — von Abbruch und Entkernung über Stahlträgerarbeiten bis zur Asbestsanierung.
            </p>
          </div>
          <Link
            href="/galerie"
            className="group shrink-0 flex items-center gap-2 border-2 border-charcoal/20 hover:border-red text-charcoal hover:text-red font-bold text-sm px-5 py-3 rounded-sm transition-all duration-200"
          >
            Alle Projekte ansehen
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Preview grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[10px]"
        >
          {preview.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
              className="group relative overflow-hidden rounded-sm bg-charcoal-light cursor-pointer aspect-[4/3]"
              onClick={() => setLightboxId(img.id)}
            >
              <ImageWithFallback
                src={img.src}
                alt={img.alt}
                fill
                plain
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110 z-10"
              />
              <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex items-center justify-center">
                <ZoomIn size={24} className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-30 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-[10px] font-bold uppercase tracking-wider">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <Link
            href="/galerie"
            className="group flex items-center gap-2 bg-red hover:bg-red-dark text-off-white font-bold text-sm px-7 py-3.5 rounded-sm transition-all duration-300"
          >
            Alle {galleryImages.length} Fotos ansehen
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxId(null)}
          >
            <button
              className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setLightboxId(null)}
            >
              <X size={22} />
            </button>
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-bold tracking-widest">
              {lightboxIndex + 1} / {preview.length}
            </div>
            <button
              className="absolute left-4 z-10 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors disabled:opacity-20"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              disabled={lightboxIndex === 0}
            >
              <ChevronLeft size={28} />
            </button>
            <div
              className="relative w-full max-w-5xl max-h-[85vh] px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxId}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full"
                  style={{ height: "85vh" }}
                >
                  <Image
                    src={preview[lightboxIndex]?.src ?? ""}
                    alt={preview[lightboxIndex]?.alt ?? ""}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>
              <p className="text-center text-white/40 text-xs mt-3 uppercase tracking-widest">
                {preview[lightboxIndex]?.category}
              </p>
            </div>
            <button
              className="absolute right-4 z-10 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors disabled:opacity-20"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              disabled={lightboxIndex === preview.length - 1}
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
