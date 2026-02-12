'use client'; // Important pour l'interactivité (menu mobile, scroll)

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* --- LOGO --- */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-slate-900 text-white p-1.5 rounded-lg group-hover:bg-blue-600 transition-colors">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              StationP
            </span>
          </Link>

          {/* --- DESKTOP NAVIGATION (Centrée) --- */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Accueil
            </Link>
            <Link 
              href="#trouver" 
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Bornes de recharge
            </Link>
            <Link 
              href="#a-propos" 
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              À propos
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* --- CTA BUTTON (Droite) --- */}
          <div className="hidden md:flex">
            <Link 
              href="#trouver" 
              className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 active:scale-95"
            >
              Trouver une borne
            </Link>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU (Dropdown) --- */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
            <Link href="/" className="font-medium text-slate-600 py-2">Accueil</Link>
            <Link href="#trouver" className="font-medium text-slate-600 py-2">Bornes de recharge</Link>
            <Link href="#a-propos" className="font-medium text-slate-600 py-2">À propos</Link>
            <Link href="/contact" className="font-medium text-slate-600 py-2">Contact</Link>
            <Link 
              href="#trouver" 
              className="bg-slate-900 text-white text-center font-bold py-3 rounded-xl mt-2 block"
            >
              Trouver une borne
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}