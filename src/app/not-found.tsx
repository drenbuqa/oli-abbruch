import Link from "next/link";
import { ArrowLeft, HardHat } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-charcoal flex flex-col items-center justify-center px-6 text-center">
      {/* Icon */}
      <div className="w-20 h-20 bg-red/10 rounded-full flex items-center justify-center mb-6">
        <HardHat size={36} className="text-red" strokeWidth={1.5} />
      </div>

      {/* 404 */}
      <p className="text-8xl font-black text-red leading-none mb-4">404</p>

      {/* Text */}
      <h1 className="text-2xl sm:text-3xl font-black text-off-white mb-3">
        Seite nicht gefunden
      </h1>
      <p className="text-gray-mid max-w-sm leading-relaxed mb-10">
        Die gesuchte Seite existiert nicht oder wurde verschoben. Kehren Sie zur Startseite zurück.
      </p>

      {/* CTA */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-red hover:bg-red-dark text-off-white font-bold px-8 py-4 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-red/20 hover:gap-3"
      >
        <ArrowLeft size={17} />
        Zurück zur Startseite
      </Link>

      {/* Divider */}
      <div className="mt-16 h-px w-32 bg-gray-700 mx-auto mb-6" />
      <p className="text-xs text-gray-600 uppercase tracking-widest">
        Oli Abbruch & Entkernung
      </p>
    </div>
  );
}
