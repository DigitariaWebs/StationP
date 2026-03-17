import Footer from '@/components/layouts/Footer';
import Hero from '@/components/sections/Hero';
import Trouver from '@/components/sections/Trouver';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="bg-white">
        <Trouver />
        <Footer />
      </div>
    </main>
  );
}