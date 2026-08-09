"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";

const services = [
  "Abbruch",
  "Entkernung",
  "Schadstoffentkernung",
  "Altbausanierung",
  "Beton bohren & sägen",
  "Baustellenräumung",
  "Demontage",
  "Stahlträgerarbeiten",
];

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-gray-800/60">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-0.5 mb-4">
              <span className="text-2xl font-black tracking-tight text-off-white">OLI</span>
              <div className="w-1.5 h-1.5 rounded-full bg-red mx-1 mt-0.5" />
              <span className="text-2xl font-black tracking-tight text-red">ABBRUCH</span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">
              Schnell — Sauber — Zuverlässig
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Ihr zuverlässiger Partner für professionelle Abbruch- und
              Entkerungsarbeiten in Baden-Württemberg und bundesweit.
            </p>
            <a
              href="tel:+4915901425683"
              className="inline-flex items-center gap-2 bg-red hover:bg-red-dark text-off-white text-sm font-bold px-5 py-2.5 rounded-sm transition-colors"
            >
              <Phone size={14} />
              Jetzt anrufen
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-off-white font-bold text-sm uppercase tracking-wider mb-5">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Leistungen", id: "#leistungen" },
                { label: "Über uns", id: "#ueber-uns" },
                { label: "Stahlträger", id: "#stahltraeger" },
                { label: "Asbestsanierung", id: "#asbest" },
                { label: "Projekte", id: "#projekte" },
                { label: "Referenzen", id: "#referenzen" },
                { label: "Kontakt", id: "#kontakt" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="group flex items-center gap-1.5 text-sm text-gray-400 hover:text-red transition-colors"
                  >
                    <ChevronRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1"
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-off-white font-bold text-sm uppercase tracking-wider mb-5">
              Leistungen
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-1.5 text-sm text-gray-400">
                  <div className="w-1 h-1 rounded-full bg-red/50 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-off-white font-bold text-sm uppercase tracking-wider mb-5">
              Kontakt
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+4915901425683"
                  className="group flex items-start gap-3 text-sm text-gray-400 hover:text-red transition-colors"
                >
                  <Phone size={15} className="mt-0.5 shrink-0 text-red/60 group-hover:text-red" />
                  +49 1590 1425683
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@oliabbruch.de"
                  className="group flex items-start gap-3 text-sm text-gray-400 hover:text-red transition-colors"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-red/60 group-hover:text-red" />
                  info@oliabbruch.de
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Beethovenstr.+19,+73642+Welzheim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-gray-400 hover:text-red transition-colors"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0 text-red/60 group-hover:text-red" />
                  <span>
                    Beethovenstr. 19<br />
                    73642 Welzheim
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800/60">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Oli Abbruch & Entkernung. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <Link href="/impressum" className="hover:text-red transition-colors">Impressum</Link>
            <span className="text-gray-800">·</span>
            <Link href="/datenschutz" className="hover:text-red transition-colors">Datenschutz</Link>
            <span className="text-gray-800">·</span>
            <span>oliabbruch.de</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
