"use client"; // Obligatoire pour utiliser le clic (useState)

import { useState, useEffect, useRef } from 'react';
import Link from 'next/image';
import Image from 'next/image';
import { Menu, User, Zap, LogIn, UserPlus, LayoutDashboard } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Ferme le menu si on clique ailleurs sur l'écran
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-2 border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-4 group">
              <div className="relative p-1 bg-blue-50 rounded-xl transition-transform group-hover:scale-105 border border-blue-100">
                <Image src="/logo.png" alt="StationP" width={60} height={60} className="object-contain" priority />
              </div>
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900">
                Station<span className="text-blue-600">P</span>
              </span>
            </a>
          </div>

          {/* NAVIGATION (Desktop) */}
          <nav className="hidden md:flex items-center gap-10">
            {['Trouver une borne', 'Tarifs', 'Comment ça marche ?'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-').replace('?', '')}`} 
                className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* ACTIONS & PROFILE MENU */}
          <div className="flex items-center gap-4 relative" ref={menuRef}>
            <a 
              href="#comment-ca-marche" 
              className="hidden sm:flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-slate-900 transition-all shadow-lg shadow-blue-100"
            >
              <Zap size={18} className="fill-current" />
              Louer ma borne
            </a>

            {/* LE BOUTON CLICKABLE */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center gap-3 border-2 rounded-full p-2 pl-4 transition-all bg-white ${isOpen ? 'shadow-md border-blue-600' : 'hover:shadow-md border-gray-200'}`}
            >
              <Menu size={22} className="text-slate-900" />
              <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white ring-2 ring-transparent group-hover:ring-blue-100">
                <User size={24} />
              </div>
            </button>

            {/* LE MENU DÉROULANT (Dropdown) */}
            {isOpen && (
              <div className="absolute right-0 top-full mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 animate-in fade-in zoom-in duration-200">
                <div className="px-4 py-2 border-b border-gray-50 mb-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Bienvenue sur StationP</p>
                </div>
                
                <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-900 font-bold hover:bg-blue-50 transition-colors text-left">
                  <LogIn size={18} className="text-blue-600" /> Se connecter
                </button>
                
                <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-900 font-bold hover:bg-blue-50 transition-colors text-left">
                  <UserPlus size={18} className="text-blue-600" /> Créer un compte
                </button>

                <div className="h-[1px] bg-gray-100 my-2"></div>

                <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 font-medium hover:bg-gray-50 transition-colors text-left">
                  <LayoutDashboard size={18} /> Dashboard Hôte
                </button>
                
                <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 font-medium hover:bg-gray-50 transition-colors text-left">
                  Aide & Support
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}