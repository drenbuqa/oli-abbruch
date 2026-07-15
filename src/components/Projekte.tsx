"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ZoomIn, X, ChevronLeft, ChevronRight, FolderOpen } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";

type Category = "Alle" | "Abbruch" | "Stahlträger" | "Asbestsanierung";

const galleryImages = [
  // Abbruch
  { id: 1,  src: "/images/abbruch/PHOTO-2026-07-13-23-02-01.jpg",        alt: "Abbrucharbeiten 1",  category: "Abbruch" as Category },
  { id: 2,  src: "/images/abbruch/PHOTO-2026-07-13-23-02-02.jpg",        alt: "Abbrucharbeiten 2",  category: "Abbruch" as Category },
  { id: 3,  src: "/images/abbruch/PHOTO-2026-07-13-23-02-02-2.jpg",      alt: "Abbrucharbeiten 3",  category: "Abbruch" as Category },
  { id: 4,  src: "/images/abbruch/PHOTO-2026-07-13-23-02-02-3.jpg",      alt: "Abbrucharbeiten 4",  category: "Abbruch" as Category },
  { id: 5,  src: "/images/abbruch/PHOTO-2026-07-13-23-02-02-4.jpg",      alt: "Abbrucharbeiten 5",  category: "Abbruch" as Category },
  // Stahlträger
  { id: 6,  src: "/images/stahltraeger/PHOTO-2026-07-13-22-29-36.jpg",   alt: "Stahlträger 1",      category: "Stahlträger" as Category },
  { id: 7,  src: "/images/stahltraeger/PHOTO-2026-07-13-22-29-36-2.jpg", alt: "Stahlträger 2",      category: "Stahlträger" as Category },
  { id: 8,  src: "/images/stahltraeger/PHOTO-2026-07-13-22-29-36-3.jpg", alt: "Stahlträger 3",      category: "Stahlträger" as Category },
  { id: 9,  src: "/images/stahltraeger/PHOTO-2026-07-13-22-29-36-4.jpg", alt: "Stahlträger 4",      category: "Stahlträger" as Category },
  { id: 10, src: "/images/stahltraeger/PHOTO-2026-07-13-22-29-36-5.jpg", alt: "Stahlträger 5",      category: "Stahlträger" as Category },
  { id: 11, src: "/images/stahltraeger/PHOTO-2026-07-13-22-29-36-6.jpg", alt: "Stahlträger 6",      category: "Stahlträger" as Category },
  { id: 12, src: "/images/stahltraeger/PHOTO-2026-07-13-22-29-37.jpg",   alt: "Stahlträger 7",      category: "Stahlträger" as Category },
  // Asbestsanierung
  { id: 13, src: "/images/asbest/PHOTO-2026-07-13-22-38-16.jpg",         alt: "Asbestsanierung 1",  category: "Asbestsanierung" as Category },
  { id: 14, src: "/images/asbest/PHOTO-2026-07-13-22-38-16-2.jpg",       alt: "Asbestsanierung 2",  category: "Asbestsanierung" as Category },
  { id: 15, src: "/images/asbest/PHOTO-2026-07-13-22-38-16-3.jpg",       alt: "Asbestsanierung 3",  category: "Asbestsanierung" as Category },
  { id: 16, src: "/images/asbest/PHOTO-2026-07-13-22-38-16-4.jpg",       alt: "Asbestsanierung 4",  category: "Asbestsanierung" as Category },
  { id: 17, src: "/images/asbest/PHOTO-2026-07-13-22-38-16-5.jpg",       alt: "Asbestsanierung 5",  category: "Asbestsanierung" as Category },
  { id: 18, src: "/images/asbest/PHOTO-2026-07-13-22-38-16-6.jpg",       alt: "Asbestsanierung 6",  category: "Asbestsanierung" as Category },
  { id: 19, src: "/images/asbest/PHOTO-2026-07-13-22-38-16-7.jpg",       alt: "Asbestsanierung 7",  category: "Asbestsanierung" as Category },
  { id: 20, src: "/images/asbest/PHOTO-2026-07-13-22-38-17.jpg",         alt: "Asbestsanierung 8",  category: "Asbestsanierung" as Category },
];

const categories: Category[] = ["Alle", "Abbruch", "Stahlträger", "Asbestsanierung"];

export default function Projekte() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [activeFilter, setActiveFilter] = useState<Category>("Alle");
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

  return (
    <section id="projekte" className="py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-red" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-red">
              Unsere Arbeit
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-charcoal leading-tight">
            Projekte &amp; <span className="text-red">Galerie</span>
          </h2>
          <p className="text-gray-mid mt-4 max-w-xl leading-relaxed">
            Einblicke in unsere abgeschlossenen Projekte — von Abbruch und Entkernung über Stahlträgerarbeiten bis zur Asbestsanierung.
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 text-sm font-bold rounded-sm border transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-red text-off-white border-red"
                  : "bg-transparent text-charcoal border-gray-light hover:border-red hover:text-red"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skeleton grid — shown before section is in view */}
        {!inView && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="rounded-sm bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"
                style={{ height: "200px" }}
              />
            ))}
          </div>
        )}

        {/* Gallery grid */}
        {inView && (
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center py-24 gap-4 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                  <FolderOpen size={24} className="text-gray-400" strokeWidth={1.5} />
                </div>
                <p className="text-charcoal font-bold">Keine Projekte in dieser Kategorie</p>
                <p className="text-sm text-gray-mid">Wählen Sie eine andere Kategorie aus.</p>
                <button
                  onClick={() => setActiveFilter("Alle")}
                  className="mt-2 text-sm text-red font-bold hover:underline underline-offset-4 transition-colors"
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
                transition={{ duration: 0.3 }}
                style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}
              >
                {filtered.map((img, i) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
                    className="group relative overflow-hidden rounded-sm bg-charcoal-light cursor-pointer"
                    style={{ height: "200px" }}
                    onClick={() => setLightboxId(img.id)}
                  >
                    <ImageWithFallback
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-110 z-10"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex flex-col items-center justify-center">
                      <ZoomIn
                        size={28}
                        className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
                      />
                    </div>
                    {/* Category label */}
                    <div className="absolute bottom-0 left-0 right-0 z-30 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-white text-xs font-bold uppercase tracking-wider">{img.category}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        )}
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
            {/* Close */}
            <button
              className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setLightboxId(null)}
            >
              <X size={22} />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-bold tracking-widest">
              {lightboxIndex + 1} / {filtered.length}
            </div>

            {/* Prev */}
            <button
              className="absolute left-4 z-10 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors disabled:opacity-20"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              disabled={lightboxIndex === 0}
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
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

            {/* Next */}
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
    </section>
  );
}
