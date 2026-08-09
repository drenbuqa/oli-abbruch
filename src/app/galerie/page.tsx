"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ZoomIn, X, ChevronLeft, ChevronRight, ArrowLeft, FolderOpen } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";
import { galleryImages, galleryCategories, type GalleryCategory } from "@/lib/gallery";

export default function GaleriePage() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("Alle");
  const [lightboxId, setLightboxId] = useState<number | null>(null);

  const filtered = activeFilter === "Alle"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  const lightboxIndex = filtered.findIndex((img) => img.id === lightboxId);

  const goNext = useCallback(() => {
    if (lightboxIndex < filtered.length - 1) setLightboxId(filtered[lightboxIndex + 1].id);
  }, [lightboxIndex, filtered]);

  const goPrev = useCallback(() => {
    if (lightboxIndex > 0) setLightboxId(filtered[lightboxIndex - 1].id);
  }, [lightboxIndex, filtered]);

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

  const countFor = (cat: GalleryCategory) =>
    cat === "Alle" ? galleryImages.length : galleryImages.filter((i) => i.category === cat).length;

  return (
    <>
      {/* Page header */}
      <div className="bg-charcoal pt-28 pb-16 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/#projekte"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-off-white text-sm font-medium transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            Zurück zur Startseite
          </Link>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-red block mb-3">
            Unsere Arbeit
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-off-white leading-tight">
            Projekte &amp; <span className="text-red">Galerie</span>
          </h1>
          <p className="text-gray-mid mt-4 max-w-xl leading-relaxed text-sm">
            Alle {galleryImages.length} Fotos aus unseren abgeschlossenen Projekten — von Abbruch und Entkernung über Stahlträgerarbeiten bis zur Asbestsanierung.
          </p>
        </div>
      </div>

      <div className="bg-off-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12">

          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-8">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-sm border transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-red text-off-white border-red"
                    : "bg-transparent text-charcoal border-gray-light hover:border-red hover:text-red"
                }`}
              >
                {cat}
                <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-sm ${
                  activeFilter === cat ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                }`}>
                  {countFor(cat)}
                </span>
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center py-32 gap-4 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                  <FolderOpen size={24} className="text-gray-400" strokeWidth={1.5} />
                </div>
                <p className="text-charcoal font-bold">Keine Projekte in dieser Kategorie</p>
                <button
                  onClick={() => setActiveFilter("Alle")}
                  className="text-sm text-red font-bold hover:underline underline-offset-4"
                >
                  Alle anzeigen
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[10px]"
              >
                {filtered.map((img, i) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.4) }}
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
            )}
          </AnimatePresence>

        </div>
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
              {lightboxIndex + 1} / {filtered.length}
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
                    src={filtered[lightboxIndex]?.src ?? ""}
                    alt={filtered[lightboxIndex]?.alt ?? ""}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>
              <p className="text-center text-white/40 text-xs mt-3 uppercase tracking-widest">
                {filtered[lightboxIndex]?.category}
              </p>
            </div>
            <button
              className="absolute right-4 z-10 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors disabled:opacity-20"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              disabled={lightboxIndex === filtered.length - 1}
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
