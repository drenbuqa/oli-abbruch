"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-5 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50"
        >
          <div className="bg-charcoal border border-gray-700/60 rounded-sm shadow-2xl shadow-black/40 p-5">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 bg-red/10 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                <Cookie size={16} className="text-red" />
              </div>
              <div>
                <p className="text-off-white font-bold text-sm mb-1">Cookies & Datenschutz</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Wir verwenden Google Maps zur Standortanzeige. Dabei werden Daten an Google übertragen.
                  Weitere Infos in unserer{" "}
                  <Link href="/datenschutz" className="text-red hover:underline">
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
              </div>
              <button
                onClick={decline}
                className="text-gray-600 hover:text-gray-400 transition-colors shrink-0 p-0.5"
                aria-label="Schließen"
              >
                <X size={15} />
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={accept}
                className="flex-1 bg-red hover:bg-red-dark text-off-white text-xs font-bold py-2.5 rounded-sm transition-colors duration-200"
              >
                Akzeptieren
              </button>
              <button
                onClick={decline}
                className="flex-1 border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-gray-300 text-xs font-bold py-2.5 rounded-sm transition-colors duration-200"
              >
                Ablehnen
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
