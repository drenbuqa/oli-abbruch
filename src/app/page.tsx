import Hero from "@/components/Hero";
import Leistungen from "@/components/Leistungen";
import UeberUns from "@/components/UeberUns";
import Stahltraeger from "@/components/Stahltraeger";
import Asbest from "@/components/Asbest";
import Projekte from "@/components/Projekte";
import Referenzen from "@/components/Referenzen";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Leistungen />
      <UeberUns />
      <Stahltraeger />
      <Asbest />
      <Projekte />
      <Referenzen />
      <Kontakt />
      <Footer />
    </main>
  );
}
