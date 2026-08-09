import { RiBuildingLine, RiHome3Line, RiAlertLine, RiHomeLine, RiHammerLine, RiTruckLine, RiScissorsCutLine, RiToolsLine } from "react-icons/ri";
import { IconType } from "react-icons";

export interface Service {
  slug: string;
  tag: string;
  icon: IconType;
  title: string;
  tagline: string;
  desc: string;
  bullets: string[];
  heroImage: string;
  galleryImages: string[];
}

export const services: Service[] = [
  {
    slug: "abbruch",
    tag: "ABBRUCH",
    icon: RiBuildingLine,
    title: "Abbruch",
    tagline: "Professioneller Rückbau — sicher, präzise und termingerecht",
    desc: "Wir führen Abbrucharbeiten jeder Größenordnung durch — von kleinen Anbauten bis zum vollständigen Gebäuderückbau. Mit modernster Technik und erfahrenem Fachpersonal gewährleisten wir einen sicheren, sauberen und termingerechten Ablauf.",
    bullets: [
      "Kompletter Gebäudeabbruch & Teilabbruch",
      "Maschineller & händischer Rückbau",
      "Einsatz von Abbruchrobotern (Husqvarna DXR)",
      "Fachgerechte Trennung & Entsorgung der Abbruchmassen",
      "Schutz angrenzender Bauteile & Nachbargebäude",
      "Begleitung durch statische Fachplanung",
    ],
    heroImage: "/images/abbruch/PHOTO-2026-07-13-23-02-02-3.jpg",
    galleryImages: [
      "/images/abbruch/PHOTO-2026-07-13-23-02-02-3.jpg",
      "/images/abbruch/PHOTO-2026-07-13-23-02-01.jpg",
      "/images/abbruch/PHOTO-2026-07-13-23-02-02.jpg",
      "/images/abbruch/PHOTO-2026-07-13-23-02-02-4.jpg",
    ],
  },
  {
    slug: "entkernung",
    tag: "ENTKERNUNG",
    icon: RiHome3Line,
    title: "Entkernung",
    tagline: "Innenräume fachgerecht entkernen — für Ihren Neubeginn",
    desc: "Bei der Entkernung werden Innenausbauteile wie Wände, Böden, Deckenverkleidungen und Installationen systematisch entfernt, um den Rohbau für die nächste Nutzungsphase vorzubereiten. Sauber, schnell und mit minimaler Staubentwicklung.",
    bullets: [
      "Entfernung von Trennwänden, Bodenbelägen & Decken",
      "Demontage von Türen, Fenstern & Einbauten",
      "Rückbau von Heizungs-, Sanitär- & Elektroanlagen",
      "Staubschutz & Abreinigung nach Abschluss",
      "Getrennte Erfassung & Entsorgung aller Materialien",
      "Auch für bewohnte Gebäude mit schonender Vorgehensweise",
    ],
    heroImage: "/images/abbruch/PHOTO-2026-07-13-23-02-02.jpg",
    galleryImages: [
      "/images/abbruch/PHOTO-2026-07-13-23-02-02.jpg",
      "/images/abbruch/PHOTO-2026-07-13-23-02-02-2.jpg",
    ],
  },
  {
    slug: "schadstoffentkernung",
    tag: "SCHADSTOFFE",
    icon: RiAlertLine,
    title: "Schadstoffentkernung",
    tagline: "Asbest, PCB & Co. — sicher entfernt nach TRGS 519",
    desc: "Die Entfernung von Schadstoffen erfordert zertifiziertes Fachpersonal und spezielle Schutzausrüstung. Wir entfernen asbest- und schadstoffhaltige Materialien gemäß den aktuellen gesetzlichen Vorschriften (TRGS 519) und sorgen für eine gesetzeskonforme Entsorgung.",
    bullets: [
      "Asbestentsorgung nach TRGS 519",
      "Entfernung von Asbestzementplatten, Dachpappen & Fußbodenbelägen",
      "PCB-, Teer- & Mineralwolle-Entsorgung",
      "Einrichtung von Sicherheitsbereichen & Schleusen",
      "Vollständige Dokumentation & Entsorgungsnachweise",
      "Zertifizierter Fachbetrieb — sicher & rechtssicher",
    ],
    heroImage: "/images/asbest/PHOTO-2026-07-13-22-38-16.jpg",
    galleryImages: [
      "/images/asbest/PHOTO-2026-07-13-22-38-16.jpg",
      "/images/asbest/PHOTO-2026-07-13-22-38-16-2.jpg",
      "/images/asbest/PHOTO-2026-07-13-22-38-16-3.jpg",
      "/images/asbest/PHOTO-2026-07-13-22-38-16-4.jpg",
      "/images/asbest/PHOTO-2026-07-13-22-38-16-5.jpg",
      "/images/asbest/PHOTO-2026-07-13-22-38-16-6.jpg",
      "/images/asbest/PHOTO-2026-07-13-22-38-16-7.jpg",
      "/images/asbest/PHOTO-2026-07-13-22-38-17.jpg",
    ],
  },
  {
    slug: "altbausanierung",
    tag: "SANIERUNG",
    icon: RiHomeLine,
    title: "Altbausanierung",
    tagline: "Alte Bausubstanz — professionell modernisiert",
    desc: "Altbausanierung verbindet denkmalpflegerische Sorgfalt mit moderner Bautechnik. Wir bereiten bestehende Gebäude für neue Nutzungen vor — von der behutsamen Entkernung bis zur Vorbereitung für den Innenausbau.",
    bullets: [
      "Behutsamer Rückbau erhaltenswerter Bausubstanz",
      "Vorbereitung für energetische Sanierung",
      "Entfernung von Schimmelbefall & Feuchtigkeitsschäden",
      "Koordination mit Architekten & Planern",
      "Erfahrung mit denkmalgeschützten Gebäuden",
      "Sorgfältige Dokumentation aller Rückbauschritte",
    ],
    heroImage: "/images/abbruch/PHOTO-2026-07-13-23-02-02-2.jpg",
    galleryImages: [
      "/images/abbruch/PHOTO-2026-07-13-23-02-02-2.jpg",
      "/images/abbruch/PHOTO-2026-07-13-23-02-02.jpg",
    ],
  },
  {
    slug: "betonbohren",
    tag: "BETON",
    icon: RiHammerLine,
    title: "Beton bohren & sägen",
    tagline: "Präzise Kernbohrungen & Diamantsägeschnitte",
    desc: "Mit modernster Diamant-Bohrtechnik erstellen wir saubere Öffnungen in Beton, Mauerwerk und Stahlbeton. Ob Kern­bohrungen für Leitungsdurchführungen oder Wandschlitze für Türöffnungen — präzise, erschütterungsarm und sauber.",
    bullets: [
      "Kernbohrungen von Ø 12 mm bis Ø 800 mm",
      "Wand- & Bodensägen mit Diamantscheiben",
      "Seilsägen für große Betonquerschnitte",
      "Staubgeschützte Ausführung mit Absauganlage",
      "Einsatz in bewohnten & sensiblen Bereichen möglich",
      "Erschütterungsarme Methoden zum Schutz der Bausubstanz",
    ],
    heroImage: "/images/abbruch/PHOTO-2026-07-13-23-02-01.jpg",
    galleryImages: [
      "/images/abbruch/PHOTO-2026-07-13-23-02-01.jpg",
      "/images/abbruch/PHOTO-2026-07-13-23-02-02-4.jpg",
    ],
  },
  {
    slug: "baustellenraeumung",
    tag: "RÄUMUNG",
    icon: RiTruckLine,
    title: "Baustellenräumung",
    tagline: "Schnelle Räumung — termingerecht & fachgerecht entsorgt",
    desc: "Nach Abbruch- oder Sanierungsarbeiten räumen wir Baustellen schnell und vollständig. Alle anfallenden Materialien werden getrennt erfasst, fachgerecht entsorgt oder — wo möglich — dem Recycling zugeführt.",
    bullets: [
      "Vollständige Räumung & Besenreine Übergabe",
      "Abtransport mit eigenem Fuhrpark",
      "Getrennte Erfassung nach Materialart",
      "Entsorgung auf zertifizierten Deponien",
      "Recycling & Wiederverwertung wo möglich",
      "Kurzfristig & auch am Wochenende verfügbar",
    ],
    heroImage: "https://res.cloudinary.com/drljgepgy/image/upload/v1786312743/IMG_0349_inru6e.jpg",
    galleryImages: [
      "https://res.cloudinary.com/drljgepgy/image/upload/v1786312743/IMG_0349_inru6e.jpg",
      "/images/abbruch/PHOTO-2026-07-13-23-02-02-4.jpg",
      "/images/abbruch/PHOTO-2026-07-13-23-02-02-3.jpg",
    ],
  },
  {
    slug: "demontage",
    tag: "DEMONTAGE",
    icon: RiScissorsCutLine,
    title: "Demontage",
    tagline: "Systematischer Rückbau — sauber, kontrolliert und werterhaltend",
    desc: "Professionelle Demontage erfordert Planung und handwerkliches Geschick. Wir bauen Gebäudebestandteile, Fassaden, Stahlkonstruktionen und Innenausbauteile systematisch zurück — schonend, werterhaltend und vollständig dokumentiert.",
    bullets: [
      "Demontage von Fassaden, Dächern & Tragkonstruktionen",
      "Rückbau von Stahl- & Holzkonstruktionen",
      "Schonende Entfernung erhaltenswerter Teile",
      "Systematische Dokumentation aller Rückbauschritte",
      "Verwertung & Weiterverkauf demontierbarer Materialien",
      "Abstimmung mit Statiker & Bauleitung",
    ],
    heroImage: "https://res.cloudinary.com/drljgepgy/image/upload/v1786312347/0fe2350a-7ea9-4ad7-ac50-0534ba642de3_mzwwjr.jpg",
    galleryImages: [
      "https://res.cloudinary.com/drljgepgy/image/upload/v1786312347/0fe2350a-7ea9-4ad7-ac50-0534ba642de3_mzwwjr.jpg",
      "/images/stahltraeger/PHOTO-2026-07-13-22-29-36-2.jpg",
      "/images/stahltraeger/PHOTO-2026-07-13-22-29-36.jpg",
      "/images/stahltraeger/PHOTO-2026-07-13-22-29-36-4.jpg",
    ],
  },
  {
    slug: "stahltraeger",
    tag: "STAHLTRÄGER",
    icon: RiToolsLine,
    title: "Stahlträgerarbeiten",
    tagline: "HEA, HEB, IPE — Lieferung & fachgerechter Einbau",
    desc: "Für Wanddurchbrüche, das Entfernen tragender Wände oder strukturelle Umbaumaßnahmen liefern und verbauen wir passende Stahlträger. Alle Arbeiten erfolgen nach statischen Vorgaben und unter Einhaltung aller bauordnungsrechtlichen Anforderungen.",
    bullets: [
      "Lieferung & Einbau aller gängigen Stahlprofile (HEA, HEB, IPE)",
      "Wanddurchbrüche & Entfernung tragender Wände",
      "Ausführung nach statischen Berechnungen",
      "Abstützung & Absicherung während der Arbeiten",
      "Mauerwerksanschlüsse & Auflagerkonstruktionen",
      "Zusammenarbeit mit Prüfstatikern auf Wunsch",
    ],
    heroImage: "/images/stahltraeger/PHOTO-2026-07-13-22-29-36-3.jpg",
    galleryImages: [
      "/images/stahltraeger/PHOTO-2026-07-13-22-29-36-3.jpg",
      "/images/stahltraeger/PHOTO-2026-07-13-22-29-36.jpg",
      "/images/stahltraeger/PHOTO-2026-07-13-22-29-36-2.jpg",
      "/images/stahltraeger/PHOTO-2026-07-13-22-29-36-4.jpg",
      "/images/stahltraeger/PHOTO-2026-07-13-22-29-36-5.jpg",
      "/images/stahltraeger/PHOTO-2026-07-13-22-29-36-6.jpg",
      "/images/stahltraeger/PHOTO-2026-07-13-22-29-37.jpg",
    ],
  },
];
