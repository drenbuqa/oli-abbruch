import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import NavigationProgress from "@/components/NavigationProgress";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Oli Abbruch & Entkernung | Schnell – Sauber – Zuverlässig",
  description:
    "Professionelle Abbruch- und Entkerungsarbeiten in Baden-Württemberg. Schadstoffentkernung, Altbausanierung, Beton bohren & sägen. Zuverlässig, schnell und sauber.",
  keywords:
    "Abbruch, Entkernung, Schadstoffentkernung, Altbausanierung, Beton bohren, Beton sägen, Baustellenräumung, Demontage, Stahlträger, Welzheim, Baden-Württemberg",
  authors: [{ name: "Oli Abbruch & Entkernung" }],
  openGraph: {
    title: "Oli Abbruch & Entkernung | Schnell – Sauber – Zuverlässig",
    description:
      "Professionelle Abbruch- und Entkerungsarbeiten. Ihr zuverlässiger Partner für Abbruch, Entkernung und Sanierung.",
    locale: "de_DE",
    type: "website",
    url: "https://oliabbruch.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oli Abbruch & Entkernung",
    description: "Schnell – Sauber – Zuverlässig. Professionelle Abbrucharbeiten.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        {/* Critical inline styles — ensures background color loads before any CSS file */}
        <style dangerouslySetInnerHTML={{ __html: `body{background-color:#f5f4f0;color:#1a1a1a;}` }} />
        {/* Framer Motion sets opacity:0 on animated elements during SSR.
            This ensures content is always visible if JS is slow or blocked. */}
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: `*{opacity:1!important;transform:none!important;}` }} />
        </noscript>
      </head>
      <body className={`${geistSans.variable} antialiased`} suppressHydrationWarning>
          <NavigationProgress />
          <Navbar />
          {children}
          <CookieBanner />
        </body>
    </html>
  );
}
