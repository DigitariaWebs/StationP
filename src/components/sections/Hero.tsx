'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function HeroWithNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goToForm = () => {
    const section = document.getElementById('inscription');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <section className="relative z-20 flex h-[100dvh] w-full flex-col bg-black">
      
      {/* --- ARRIÈRE-PLAN --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/loto2.webp"
          alt="Background"
          fill
          priority
          quality={75}
          className="object-cover object-center contrast-110 scale-110 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black lg:bg-gradient-to-r lg:from-black/70 lg:via-black/30 lg:to-transparent" />
      </div>
      {/* NAVBAR */}
      <header className="relative z-50 w-full shrink-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16 sm:h-24">
            <Link href="/" className="flex items-center">
              <Image 
                src="/w1.png" 
                alt="StreetCharge Logo" 
                width={220} 
                height={70}
                className="w-40 sm:w-48 h-auto brightness-0 invert" 
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-white font-bold uppercase tracking-widest text-[10px]">
              <Link href="#" className="hover:text-[#A3E635] transition-colors">
                Accueil
              </Link>
              <Link href="#trouveruneborne" className="hover:text-[#A3E635] transition-colors">
                Communauté
              </Link>
              <Link href="#inscription" className="hover:text-[#A3E635] transition-colors">
                Inscription
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-5">
              <ThemeToggle />
              <button
                type="button"
                onClick={goToForm}
                className="bg-[#A3E635] hover:bg-[#bef264] text-black text-[10px] font-black py-3 px-6 rounded-full transition-all uppercase tracking-widest"
              >
                Je rejoins
              </button>
            </div>

            <div className="lg:hidden flex items-center gap-3">
              <ThemeToggle />
              <button onClick={() => setIsMenuOpen(true)} className="text-white p-2">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO CONTENT */}
      <div className="relative z-10 flex-1 flex items-center pb-8 sm:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-3xl text-center lg:text-left text-white mx-auto lg:mx-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] mb-4 sm:mb-6 tracking-tighter uppercase italic drop-shadow-2xl">
              La recharge <br />
              <span className="text-[#A3E635] not-italic">entre</span> <br />
              particuliers
            </h1>

            <p className="text-xs sm:text-sm text-white/80 mb-2 max-w-sm mx-auto lg:mx-0 font-medium">
              Rejoignez une communauté locale de conducteurs de véhicules électriques qui partagent leurs bornes de recharge.
            </p>

            {/* Points clés */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6 sm:mb-8 text-xs text-white/70 font-medium">
              <span className="flex items-center gap-1"><span className="text-[#A3E635]">✓</span> Rechargez près de chez vous</span>
              <span className="flex items-center gap-1"><span className="text-[#A3E635]">✓</span> À moindre coût</span>
              <span className="flex items-center gap-1"><span className="text-[#A3E635]">✓</span> Entre voisins</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <button 
                onClick={goToForm}
                className="group bg-white text-black px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-black flex items-center justify-center gap-2 sm:gap-3 hover:bg-[#A3E635] transition-all shadow-xl uppercase tracking-widest text-xs"
              >
                Je rejoins <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link 
                href="#trouveruneborne"
                className="group bg-transparent border-2 border-white text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-full font-black flex items-center justify-center gap-2 sm:gap-3 hover:bg-white hover:text-black transition-all uppercase tracking-widest text-xs"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col p-6 sm:p-8">
          <div className="flex justify-between items-center mb-8 sm:mb-12">
            <Image src="/w1.png" alt="logo" width={120} height={40} className="brightness-0 invert w-24 sm:w-28" />
            <button onClick={() => setIsMenuOpen(false)} className="text-white p-1"><X size={28} /></button>
          </div>
          <nav className="flex flex-col gap-5 sm:gap-6 text-xl sm:text-2xl font-black uppercase italic text-white">
            <Link href="#" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link href="#trouveruneborne" onClick={() => setIsMenuOpen(false)}>Communauté</Link>
            <Link href="#inscription" onClick={() => setIsMenuOpen(false)}>Inscription</Link>
          </nav>
        </div>
      )}
    </section>
  );
}