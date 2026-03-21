import Footer from '@/components/layouts/Footer';
import Hero from '@/components/sections/Hero';
import Trouver from '@/components/sections/Trouver';
import HowitWorks from '@/components/sections/HowitWorks';
import Header from '@/components/layouts/Header';
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <div className="bg-white">
        <Trouver />
        <HowitWorks />
        <Footer />
      </div>
    </main>
  );
}