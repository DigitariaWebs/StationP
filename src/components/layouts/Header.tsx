'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#1B1F24] text-white p-1.5 rounded-lg group-hover:bg-[#00F5A0] transition-colors">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">
              StationP
            </span>
          </Link>

            <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-[#00F5A0] transition-colors">Accueil</Link>
            <Link href="/#trouver" className="text-sm font-medium text-slate-600 hover:text-[#00F5A0] transition-colors">Bornes de recharge</Link>
            <Link href="/#a-propos" className="text-sm font-medium text-slate-600 hover:text-[#00F5A0] transition-colors">À propos</Link>
            <Link href="/#howitworks" className="text-sm font-medium text-slate-600 hover:text-[#00F5A0] transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex">
            <Link href="/#howitworks" className="bg-[#1B1F24] hover:bg-[#00875e] text-white text-sm font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-black/10 hover:shadow-black/20 active:scale-95">Nous rejoindre</Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-800 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
            <Link href="/" className="font-medium text-slate-600 py-2">Accueil</Link>
            <Link href="/#trouver" className="font-medium text-slate-600 py-2">Bornes de recharge</Link>
            <Link href="/#a-propos" className="font-medium text-slate-600 py-2">À propos</Link>
            <Link href="/#howitworks" className="font-medium text-slate-600 py-2">Contact</Link>
            <Link href="/#howitworks" className="bg-[#1B1F24] hover:bg-[#00875e] text-white text-center font-bold py-3 rounded-xl mt-2 block">Nous rejoindre</Link>
          </div>
        </div>
      )}
    </header>
  );
}