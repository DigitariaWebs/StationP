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
    <section className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col">

      {/* ───────── GLOW (Décoratif, adouci) ───────── */}
      <div className="absolute bottom-1/4 right-10 md:right-20 w-64 h-64 bg-[#7A9D54]/15 blur-3xl rounded-full z-0 pointer-events-none" />

      {/* ───────── NAVBAR ───────── */}
      <header className="relative z-50 w-full bg-white/90 backdrop-blur-sm md:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-20">

            <Link href="/" className="flex-shrink-0">
              <Image
                src="/w1.png"
                alt="logo"
                width={160}
                height={150}
                // Taille logo responsive
                className="w-48 sm:w-36 lg:w-40 brightness-0"
              />
            </Link>

            {/* Menu Desktop */}
            <nav className="hidden lg:flex gap-6 xl:gap-8 text-xs xl:text-sm font-bold uppercase tracking-widest text-gray-800">
              <Link href="#" className="hover:text-[#7A9D54] transition-colors">Accueil</Link>
              <Link href="#trouveruneborne" className="hover:text-[#7A9D54] transition-colors">Communauté</Link>
              <Link href="#inscription" className="hover:text-[#7A9D54] transition-colors">Inscription</Link>
            </nav>

            <button
              onClick={goToForm}
              className="hidden lg:block bg-[#7A9D54] hover:bg-[#698a47] text-white px-6 py-3 rounded-full font-bold text-sm transition-colors shadow-sm"
            >
              Je rejoins
            </button>

            {/* Burger mobile */}
            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 text-gray-800 hover:text-[#7A9D54]">
              <Menu size={28} />
            </button>

          </div>
        </div>
      </header>

      {/* ───────── HERO CONTENT (Correction tailles texte et spacings) ───────── */}
      {/* flex-grow pour pousser le contenu vers le haut, z-10 pour être au dessus de l'image */}
      <div className="relative z-10 flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full pt-10 pb-24 md:py-20 flex flex-col md:flex-row items-center gap-12">

          <div className="flex-1 max-w-3xl md:max-w-xl lg:max-w-2xl order-2 md:order-1">

            {/* TAILLE REDUITE : text-2xl -> text-5xl (au lieu de 3xl -> 6xl) */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight uppercase mb-5 text-gray-950">
              Rechargez <br />
              votre voiture <br />
              <span className="text-[#7A9D54]">chez vos voisins</span>
            </h1>

            <p className="text-gray-700 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
              Trouvez une borne près de chez vous. Simple, économique et entre particuliers. Profitez du réseau communautaire.
            </p>

            {/* Boutons Responsives : full width vertical sur mobile, horizontal sur sm */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={goToForm}
                className="bg-[#7A9D54] hover:bg-[#698a47] text-white px-8 py-4 rounded-full font-bold text-center transition-colors shadow-lg shadow-[#7A9D54]/20"
              >
                Trouver une borne
              </button>

              <Link
                href="#inscription"
                className="border-2 border-gray-300 hover:border-gray-400 bg-white/50 backdrop-blur-sm px-8 py-4 rounded-full font-bold text-gray-800 text-center transition-colors"
              >
                Devenir hôte
              </Link>
            </div>

            {/* Liste puces */}
            <div className="flex flex-col gap-3.5">
              {['Près de chez vous', 'À moindre coût', 'Entre voisins'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-800 font-semibold text-base">
                  <div className="bg-[#7A9D54]/10 p-1 rounded-full">
                    <Check size={18} className="text-[#7A9D54] stroke-[3]" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

          </div>

          {/* ───────── MODIFIED IMAGE CONTAINER (Small and Left) ───────── */}
          <div className="flex-1 flex justify-center md:justify-start order-1 md:order-2 w-full max-w-md md:max-w-lg lg:max-w-xl">
            <div className="relative aspect-video w-full">
                <Image
                    src="/i.png" // Nouvelle image spécifiée
                    alt="Recharge voiture électrique"
                    fill
                    priority
                    className="object-contain" // Use object-contain to avoid cropping and control size
                />
            </div>
          </div>
          {/* ───────────────────────────────────────────────────────────── */}
          
        </div>
      </div>

      {/* ───────── SVG WAVES (Bas de page, plus discrètes) ───────── */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-20">
        <svg viewBox="0 0 1440 200" className="w-full h-24 md:h-32" preserveAspectRatio="none">
          <path
            fill="#7A9D54"
            fillOpacity="0.08"
            d="M0,160 C300,200 1100,100 1440,160 L1440,200 L0,200 Z"
          />
          <path
            d="M0,140 C300,180 1100,80 1440,140"
            stroke="#7A9D54"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* ───────── MOBILE MENU (Plein écran) ───────── */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col p-6 animate-fadeIn">

          <div className="flex justify-between items-center mb-12">
            <Image src="/w1.png" alt="logo" width={130} height={40} className="brightness-0" />
            <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-800">
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col gap-8 text-2xl font-extrabold text-gray-900 uppercase tracking-tight">
            <Link href="#" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link href="#trouveruneborne" onClick={() => setIsMenuOpen(false)}>Communauté</Link>
            <Link href="#inscription" onClick={() => setIsMenuOpen(false)}>Inscription</Link>
          </nav>

          <button
            onClick={goToForm}
            className="mt-auto w-full bg-[#7A9D54] text-white py-5 rounded-2xl font-bold text-lg shadow-lg"
          >
            Je rejoins la communauté
          </button>

        </div>
      )}

      {/* Petite animation pour le menu mobile */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>

    </section>
  );
}