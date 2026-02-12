import Footer from '@/components/layouts/Footer';
import Hero from '@/components/sections/Hero';
import Trouver from '@/components/sections/Trouver';
import Howitworks from '@/components/sections/HowitWorks';
import AboutSection from '@/components/sections/Apropos';

export default function Home() {
  return (
    <>
     
      <Hero />
      <Trouver />
      <AboutSection />
      <Howitworks />
      <Footer />
      
    </>
  );
}