'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effet pour détecter le scroll et changer le style du header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile quand on clique sur un lien
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200' 
        : 'bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo - responsive sizing */}
          <Link href="/" className="flex items-center gap-2 group" onClick={handleLinkClick}>
            <Image 
              src="/logo2.png" 
              alt="StationP Logo" 
              width={120} 
              height={120} 
              className="h-10 sm:h-12 md:h-14 w-auto transition-transform group-hover:scale-105" 
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-[#00F5A0] transition-colors relative group">
              Accueil
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00F5A0] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/#trouver" className="text-sm font-medium text-slate-600 hover:text-[#00F5A0] transition-colors relative group">
              Bornes de recharge
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00F5A0] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/#a-propos" className="text-sm font-medium text-slate-600 hover:text-[#00F5A0] transition-colors relative group">
              À propos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00F5A0] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/#howitworks" className="text-sm font-medium text-slate-600 hover:text-[#00F5A0] transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00F5A0] transition-all group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <Link 
              href="/#howitworks" 
              className="bg-[#1B1F24] hover:bg-[#00F5A0] hover:text-[#1B1F24] text-white text-sm font-bold py-2.5 px-5 lg:py-3 lg:px-6 rounded-xl transition-all shadow-lg shadow-black/10 hover:shadow-black/20 active:scale-95 flex items-center gap-2"
            >
              <Zap size={18} className="text-[#00F5A0] group-hover:text-[#1B1F24]" />
              Rejoindre le réseau
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-600 hover:text-slate-800 p-2 focus:outline-none"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-screen opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible'
      } overflow-hidden`}>
        <div className="bg-white border-t border-slate-100 shadow-xl px-4 py-6 space-y-3 flex flex-col">
          <Link 
            href="/" 
            className="font-medium text-slate-600 hover:text-[#00F5A0] py-2 px-4 rounded-lg hover:bg-slate-50 transition-all"
            onClick={handleLinkClick}
          >
            Accueil
          </Link>
          <Link 
            href="/#trouver" 
            className="font-medium text-slate-600 hover:text-[#00F5A0] py-2 px-4 rounded-lg hover:bg-slate-50 transition-all"
            onClick={handleLinkClick}
          >
            Bornes de recharge
          </Link>
          <Link 
            href="/#a-propos" 
            className="font-medium text-slate-600 hover:text-[#00F5A0] py-2 px-4 rounded-lg hover:bg-slate-50 transition-all"
            onClick={handleLinkClick}
          >
            À propos
          </Link>
          <Link 
            href="/#howitworks" 
            className="font-medium text-slate-600 hover:text-[#00F5A0] py-2 px-4 rounded-lg hover:bg-slate-50 transition-all"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
          <div className="pt-4 mt-2 border-t border-slate-100">
            <Link 
              href="/#howitworks" 
              className="bg-[#1B1F24] hover:bg-[#00F5A0] hover:text-[#1B1F24] text-white font-bold py-3 px-4 rounded-xl block text-center transition-all shadow-lg flex items-center justify-center gap-2"
              onClick={handleLinkClick}
            >
              <Zap size={18} />
              Rejoindre le réseau
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}