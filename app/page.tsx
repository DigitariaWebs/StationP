import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Hero from "@/components/sections/Hero";
import Trouver from "@/components/sections/Trouver";
import Proprietaire from "@/components/sections/Proprietaire";
import HowitWorks from "@/components/sections/HowitWorks";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Trouver />
      <Proprietaire />
      <HowitWorks />
      <FAQ />
      <Footer />
    </main>
  );
}
