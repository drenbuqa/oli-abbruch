"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, Menu, ChevronDown, ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

const navLinks = [
  { href: "/#leistungen", label: "Leistungen", hasDropdown: true },
  { href: "/#ueber-uns", label: "Über uns" },
  { href: "/#stahltraeger", label: "Stahlträger" },
  { href: "/#asbest", label: "Asbestsanierung" },
  { href: "/#projekte", label: "Projekte" },
  { href: "/#referenzen", label: "Referenzen" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isServicePage = pathname.startsWith("/leistungen/");
  const isStaticPage = pathname === "/impressum" || pathname === "/datenschutz";
  const isActive = (href: string) => {
    if (href === "/#leistungen" && isServicePage) return true;
    return false;
  };

  const scrollTo = (href: string) => {
    const hash = href.replace("/", "");
    if (pathname !== "/") {
      window.location.href = href;
      return;
    }
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isServicePage || isStaticPage || mobileOpen
            ? "bg-charcoal shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 shrink-0">
              <span className="text-off-white font-black text-lg tracking-tight">OLI</span>
              <span className="text-red font-black text-lg">•</span>
              <span className="text-off-white font-black text-lg tracking-tight">ABBRUCH</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                        isActive(link.href) ? "text-red" : "text-gray-300 hover:text-off-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                      />
                      {isActive(link.href) && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-red rounded-full" />
                      )}
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[600px] bg-charcoal border border-gray-700/50 rounded-sm shadow-2xl shadow-black/40 overflow-hidden"
                        >
                          <div className="p-4 border-b border-gray-700/40">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red">
                              Unsere Leistungen
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-px bg-gray-700/20 p-px">
                            {services.map((s) => {
                              const Icon = s.icon;
                              return (
                                <Link
                                  key={s.slug}
                                  href={`/leistungen/${s.slug}`}
                                  className="flex items-center gap-3 px-4 py-3 bg-charcoal hover:bg-charcoal-light transition-colors duration-150 group/item"
                                >
                                  <div className="w-8 h-8 bg-red/10 rounded-sm flex items-center justify-center shrink-0 group-hover/item:bg-red/20 transition-colors">
                                    <Icon size={16} className="text-red" />
                                  </div>
                                  <div>
                                    <p className="text-off-white text-sm font-semibold leading-tight">
                                      {s.title}
                                    </p>
                                    <p className="text-gray-400 text-[11px] leading-tight mt-0.5 line-clamp-1">
                                      {s.tagline}
                                    </p>
                                  </div>
                                  <ArrowRight
                                    size={13}
                                    className="text-gray-600 group-hover/item:text-red ml-auto shrink-0 transition-colors"
                                  />
                                </Link>
                              );
                            })}
                          </div>
                          <div className="p-3 border-t border-gray-700/40 bg-charcoal-light/30">
                            <Link
                              href="/#leistungen"
                              className="flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 hover:text-red transition-colors"
                            >
                              Alle Leistungen ansehen
                              <ArrowRight size={11} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-off-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+4971822062990"
                className="flex items-center gap-2 bg-red hover:bg-red-dark text-off-white font-bold text-sm px-4 py-2 rounded-sm transition-all duration-300"
              >
                <Phone size={14} />
                Anruf
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-off-white"
              aria-label="Menü öffnen"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[420px] bg-charcoal flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700/40">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-1.5">
                  <span className="text-off-white font-black text-lg">OLI</span>
                  <span className="text-red font-black text-lg">•</span>
                  <span className="text-off-white font-black text-lg">ABBRUCH</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-gray-400 hover:text-off-white"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-1">
                {navLinks.map((link, i) =>
                  link.hasDropdown ? (
                    <div key={link.label}>
                      <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between py-3 text-2xl font-black text-off-white hover:text-red transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                        />
                      </motion.button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-3 flex flex-col gap-1 border-l-2 border-red/30 ml-2 mt-1">
                              {services.map((s) => {
                                const Icon = s.icon;
                                return (
                                  <Link
                                    key={s.slug}
                                    href={`/leistungen/${s.slug}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 py-2 text-gray-300 hover:text-red transition-colors"
                                  >
                                    <Icon size={16} className="text-red/70 shrink-0" />
                                    <span className="text-base font-semibold">{s.title}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.button
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => {
                        setMobileOpen(false);
                        setTimeout(() => scrollTo(link.href), 300);
                      }}
                      className="text-left py-3 text-2xl font-black text-off-white hover:text-red transition-colors"
                    >
                      {link.label}
                    </motion.button>
                  )
                )}
              </div>

              {/* CTA */}
              <div className="p-6 border-t border-gray-700/40">
                <a
                  href="tel:+4971822062990"
                  className="flex items-center justify-center gap-2 w-full bg-red hover:bg-red-dark text-off-white font-bold py-4 rounded-sm transition-all"
                >
                  <Phone size={16} />
                  Jetzt anrufen
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
