'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Users, Zap } from 'lucide-react';

export default function HeroWithNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/2.png"
          alt="Borne de recharge privée"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B1F24]/90 via-[#1B1F24]/70 to-[#1B1F24]/40" />
      </div>

      {/* Navbar */}
      <header className="absolute top-0 left-0 right-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 sm:h-28 md:h-32">
            
            {/* Logo - LÉGÈREMENT REDIMENSIONNÉ */}
            <Link href="/" className="flex items-center group">
              <div className="flex items-center">
                <Image 
                  src="/w1.png" 
                  alt="StreetCharge Logo" 
                  width={500}
                  height={500}
                  className="h-28 sm:h-32 md:h-36 lg:h-40 w-auto transition-transform group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-8">
              <Link 
                href="/" 
                className="text-sm lg:text-base font-medium text-white/90 hover:text-[#00F5A0] transition-colors"
              >
                Accueil
              </Link>
              <Link 
                href="#trouver" 
                className="text-sm lg:text-base font-medium text-white/90 hover:text-[#00F5A0] transition-colors"
              >
                Trouver une borne
              </Link>
              <Link 
                href="#a-propos" 
                className="text-sm lg:text-base font-medium text-white/90 hover:text-[#00F5A0] transition-colors"
              >
                À propos
              </Link>
              <Link 
                href="#faq"
                className="text-sm lg:text-base font-medium text-white/90 hover:text-[#00F5A0] transition-colors"
              >
                FAQ
              </Link>
            </nav>

            {/* CTA Button Header - CHANGÉ */}
            <div className="hidden md:flex">
              <Link 
                href="#howitworks" 
                className="bg-[#00F5A0] hover:bg-white text-[#1B1F24] hover:text-[#1B1F24] text-sm lg:text-base font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 border-2 border-[#00F5A0] hover:border-white"
              >
                <Zap size={18} className="text-[#1B1F24]" />
                Je rejoins
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#00F5A0] p-2 transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1B1F24]/95 backdrop-blur-lg border-t border-white/10 absolute w-full shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
              <Link 
                href="/" 
                className="font-medium text-white/90 hover:text-[#00F5A0] py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="#trouver" 
                className="font-medium text-white/90 hover:text-[#00F5A0] py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Trouver une borne
              </Link>
              <Link 
                href="#a-propos" 
                className="font-medium text-white/90 hover:text-[#00F5A0] py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                href="#faq" 
                className="font-medium text-white/90 hover:text-[#00F5A0] py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="#howitworks" 
                className="bg-[#00F5A0] hover:bg-white text-[#1B1F24] font-bold py-4 rounded-full mt-2 block transition-all duration-300 flex items-center justify-center gap-2 border-2 border-[#00F5A0] hover:border-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Zap size={20} />
                Je rejoins
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            La recharge <br className="hidden sm:block" />
            <span className="text-[#00F5A0]">entre particuliers</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Partagez votre borne à votre meilleure convenance<br className="hidden sm:block" />
            ou rechargez votre véhicule électrique près de chez vous.
          </p>

          <Link
            href="#howitworks"
            className="group bg-[#00F5A0] hover:bg-white text-[#1B1F24] font-bold px-8 sm:px-10 py-5 sm:py-6 rounded-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 inline-flex items-center gap-3 text-base sm:text-lg border-2 border-[#00F5A0] hover:border-white"
          >
            <Zap size={24} />
              Rejoindre la communauté
          </Link>
        </div>
      </div>
    </section>
  );
}
