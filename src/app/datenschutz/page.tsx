import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Oli Abbruch & Entkernung",
  description: "Datenschutzerklärung von Oli Abbruch & Entkernung gemäß DSGVO.",
};

export default function DatenschutzPage() {
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
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-charcoal">

          <section>
            <h2 className="text-lg font-bold mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-semibold mb-2">Allgemeine Hinweise</h3>
            <p className="text-gray-mid leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">2. Verantwortliche Stelle</h2>
            <p className="text-gray-mid leading-relaxed">
              Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              Oli Abbruch & Entkernung<br />
              Beethovenstr. 19<br />
              73642 Welzheim<br /><br />
              Telefon: <a href="tel:015901425683" className="text-red hover:underline">0159 01425683</a><br />
              E-Mail: <a href="mailto:info@oliabbruch.de" className="text-red hover:underline">info@oliabbruch.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">3. Erhebung und Speicherung personenbezogener Daten</h2>
            <h3 className="font-semibold mb-2">Beim Besuch der Website</h3>
            <p className="text-gray-mid leading-relaxed mb-4">
              Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert: IP-Adresse des anfragenden Rechners, Datum und Uhrzeit des Zugriffs, Name und URL der abgerufenen Datei, Website, von der aus der Zugriff erfolgt (Referrer-URL), verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.
            </p>
            <h3 className="font-semibold mb-2">Kontaktformular</h3>
            <p className="text-gray-mid leading-relaxed">
              Bei Ihrer Anfrage über unser Kontaktformular werden folgende Daten erhoben: Name, E-Mail-Adresse, Telefonnummer (optional) und Ihre Nachricht. Diese Daten werden ausschließlich zum Zweck der Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben. Die Daten werden nach Abschluss der Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">4. Google Maps</h2>
            <p className="text-gray-mid leading-relaxed">
              Auf dieser Website nutzen wir den Kartendienst Google Maps der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung. Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-red hover:underline">https://policies.google.com/privacy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">5. Ihre Rechte</h2>
            <p className="text-gray-mid leading-relaxed">
              Sie haben das Recht, jederzeit unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
