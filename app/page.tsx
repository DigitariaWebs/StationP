import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Hero from '@/components/sections/Hero';
import Tarif from '@/components/sections/Tarif';
import Trouver from '@/components/sections/Trouver';
import Howitworks from '@/components/sections/HowitWorks';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Trouver />
      <Tarif />
      <Howitworks />
      <Footer />
      
    </>
  );
}