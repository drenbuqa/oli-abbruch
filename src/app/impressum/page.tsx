import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum | Oli Abbruch & Entkernung",
  description: "Impressum von Oli Abbruch & Entkernung, Beethovenstr. 19, 73642 Welzheim.",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-off-white pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-mid hover:text-red transition-colors mb-10 group"
        >
          <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-black text-charcoal mb-10 border-b border-gray-light pb-6">
          Impressum
        </h1>

        <div className="prose prose-sm max-w-none space-y-8 text-charcoal">

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">Angaben gemäß § 5 TMG</h2>
            <p className="text-gray-mid leading-relaxed">
              Oli Abbruch & Entkernung<br />
              Beethovenstr. 19<br />
              73642 Welzheim<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">Kontakt</h2>
            <p className="text-gray-mid leading-relaxed">
              Telefon: <a href="tel:+4915901425683" className="text-red hover:underline">+49 1590 1425683</a><br />
              E-Mail: <a href="mailto:info@oliabbruch.de" className="text-red hover:underline">info@oliabbruch.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)</h2>
            <p className="text-gray-mid leading-relaxed">
              Oli Abbruch & Entkernung<br />
              Beethovenstr. 19<br />
              73642 Welzheim
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">Haftungsausschluss</h2>
            <h3 className="font-semibold text-charcoal mb-2">Haftung für Inhalte</h3>
            <p className="text-gray-mid leading-relaxed mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <h3 className="font-semibold text-charcoal mb-2">Haftung für Links</h3>
            <p className="text-gray-mid leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">Urheberrecht</h2>
            <p className="text-gray-mid leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
