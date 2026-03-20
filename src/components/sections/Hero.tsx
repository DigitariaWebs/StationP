'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Check } from 'lucide-react';

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
    <section className="relative min-h-screen w-full bg-white overflow-hidden">

      {/* ───────── BACKGROUND IMAGE (FIX ZOOM) ───────── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-full w-full md:w-[55%]">

          <Image
            src="/loto2.webp"
            alt="Voiture électrique"
            fill
            priority
            className="object-contain md:object-cover object-right"
          />

          <Image
            src="/loto3.png"
            alt="Voiture électrique"
            fill
            priority
            className="object-contain md:hidden"
          />

          {/* overlay plus soft */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent md:via-white/40" />
        </div>
      </div>

      {/* ───────── GLOW ───────── */}
      <div className="absolute bottom-20 right-10 md:right-20 w-64 h-64 bg-[#7A9D54]/20 blur-3xl rounded-full" />

      {/* ───────── NAVBAR ───────── */}
      <header className="relative z-50 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">

            <Link href="/">
              <Image
                src="/w1.png"
                alt="logo"
                width={180}
                height={60}
                className="w-32 sm:w-40 lg:w-48 brightness-0"
              />
            </Link>

            <nav className="hidden lg:flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-800">
              <Link href="#">Accueil</Link>
              <Link href="#trouveruneborne">Communauté</Link>
              <Link href="#inscription">Inscription</Link>
            </nav>

            <button
              onClick={goToForm}
              className="hidden lg:block bg-[#7A9D54] text-white px-6 py-3 rounded-full font-bold"
            >
              Je rejoins
            </button>

            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden">
              <Menu size={28} />
            </button>

          </div>
        </div>
      </header>

      {/* ───────── HERO CONTENT (FIX SPACING + SIZE) ───────── */}
      <div className="relative z-10 flex items-center min-h-[85vh]">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-2xl">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight uppercase mb-6">
              Rechargez <br />
              votre voiture <br />
              <span className="text-[#7A9D54]">chez vos voisins</span>
            </h1>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 max-w-xl">
              Trouvez une borne près de chez vous. Simple, économique et entre particuliers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={goToForm}
                className="bg-[#7A9D54] text-white px-6 py-4 rounded-full font-bold"
              >
                Trouver une borne
              </button>

              <Link
                href="#inscription"
                className="border border-gray-300 px-6 py-4 rounded-full font-bold text-gray-800"
              >
                Devenir hôte
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              {['Près de chez vous', 'À moindre coût', 'Entre voisins'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-700 font-semibold">
                  <Check size={18} className="text-[#7A9D54]" />
                  {item}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ───────── WAVES (plus discrètes + pas écrasantes) ───────── */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-20">

        <svg viewBox="0 0 1440 320" className="w-full h-36 md:h-48">
          <path
            fill="#7A9D54"
            fillOpacity="0.12"
            d="M0,160 C300,240 1100,80 1440,160 L1440,320 L0,320 Z"
          />
        </svg>

        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-36 md:h-48">
          <path
            d="M0,180 C300,250 1100,90 1440,180"
            stroke="#7A9D54"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M0,200 C300,270 1100,110 1440,200"
            stroke="#7A9D54"
            strokeWidth="1.5"
            fill="none"
            opacity="0.35"
          />
        </svg>

      </div>

      {/* ───────── MOBILE MENU ───────── */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col p-6">

          <div className="flex justify-between mb-10">
            <Image src="/w1.png" alt="logo" width={120} height={40} />
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-2xl font-bold">
            <Link href="#">Accueil</Link>
            <Link href="#trouveruneborne">Communauté</Link>
            <Link href="#inscription">Inscription</Link>
          </nav>

          <button
            onClick={goToForm}
            className="mt-auto bg-[#7A9D54] text-white py-4 rounded-xl font-bold"
          >
            Je rejoins
          </button>

        </div>
      )}

    </section>
  );
}