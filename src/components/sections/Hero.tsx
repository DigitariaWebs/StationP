'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';

export default function HeroWithNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/2.png"
          alt="Véhicule électrique"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B1F24]/80 via-[#1B1F24]/60 to-[#1B1F24]/30" />
      </div>

      {/* Navbar */}
      <header className="absolute top-0 left-0 right-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 sm:h-28 md:h-32">
            
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image 
                src="/4.png" 
                alt="StationP Logo" 
                width={1000} 
                height={1000} 
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto transition-transform group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-8">
              <Link 
                href="/" 
                className="text-xs lg:text-sm font-medium text-white/90 hover:text-[#00F5A0] transition-colors"
              >
                Accueil
              </Link>
              <Link 
                href="#trouver" 
                className="text-xs lg:text-sm font-medium text-white/90 hover:text-[#00F5A0] transition-colors"
              >
                Trouver une borne
              </Link>
              <Link 
                href="#a-propos" 
                className="text-xs lg:text-sm font-medium text-white/90 hover:text-[#00F5A0] transition-colors"
              >
                À propos
              </Link>
              <Link 
                href="#howitworks"
                className="text-xs lg:text-sm font-medium text-white/90 hover:text-[#00F5A0] transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button Header - CORRIGÉ */}
            <div className="hidden md:flex">
              <Link 
                href="#howitworks" 
                className="bg-white hover:bg-[#00F5A0] text-[#1B1F24] hover:text-white text-xs lg:text-sm font-bold py-2 lg:py-3 px-4 lg:px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <Zap size={16} />
                Rejoindre
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#00F5A0] p-2 transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - CORRIGÉ */}
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
                href="#howitworks" 
                className="font-medium text-white/90 hover:text-[#00F5A0] py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="#howitworks" 
                className="bg-white hover:bg-[#00F5A0] text-[#1B1F24] hover:text-white text-center font-bold py-3 rounded-full mt-2 block transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Zap size={18} />
                Rejoindre
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Mobilité électrique<br />
            à <span className="text-[#00F5A0]">Bruxelles</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 max-w-xl leading-relaxed">
            Découvrez les véhicules et solutions de recharge pour Bruxelles. Des bornes fiables et accessibles pour faciliter vos trajets.
          </p>

          {/* CTA Button Hero - CORRIGÉ */}
          <Link
            href="#howitworks"
            className="group bg-[#00F5A0] hover:bg-[#00875e] text-[#1B1F24] hover:text-white font-semibold px-6 sm:px-8 py-4 sm:py-5 rounded-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <Zap size={20} />
            Rejoindre le réseau
          </Link>
        </div>
      </div>
    </section>
  );
}