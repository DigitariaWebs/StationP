'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import Image from 'next/image';
import ThemeToggle from '@/components/ThemeToggle';

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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[color:var(--color-surface)]/95 backdrop-blur-md shadow-lg border-b border-[color:var(--color-border)]'
          : 'bg-[color:var(--color-background)]/80 backdrop-blur-md border-b border-[color:var(--color-border)]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 gap-4">
          
          {/* Logo - responsive sizing */}
          <Link href="/" className="flex items-center gap-2 group" onClick={handleLinkClick}>
            <Image 
              src="/logo2.png" 
              alt="StationP Logo" 
              width={120} 
              height={120} 
              className="h-16 sm:h-18 md:h-20 w-auto transition-transform group-hover:scale-105" 
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {[
              { href: '/', label: 'Accueil' },
              { href: '/#trouver', label: 'Bornes de recharge' },
              { href: '/#a-propos', label: 'À propos' },
              { href: '/#howitworks', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[color:var(--color-foreground)]/80 hover:text-[color:var(--color-accent)] transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[color:var(--color-accent)] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/#howitworks"
              className="bg-[color:var(--color-foreground)]/95 hover:bg-[color:var(--color-accent)] text-[color:var(--color-accent-contrast)] font-bold py-2.5 px-5 lg:py-3 lg:px-6 rounded-xl transition-all shadow-lg border-2 border-[color:var(--color-accent)] hover:text-[color:var(--color-foreground)] hover:shadow-black/20 active:scale-95 flex items-center gap-2"
            >
              <Zap size={18} className="text-[color:var(--color-accent-contrast)]" />
              Rejoindre le réseau
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[color:var(--color-foreground)]/70 hover:text-[color:var(--color-accent)] p-2 focus:outline-none"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="bg-[color:var(--color-surface)] border-t border-[color:var(--color-border)] shadow-xl px-4 py-6 space-y-3 flex flex-col">
          <div className="flex justify-end">
            <ThemeToggle />
          </div>
          {[
            { href: '/', label: 'Accueil' },
            { href: '/#trouver', label: 'Bornes de recharge' },
            { href: '/#a-propos', label: 'À propos' },
            { href: '/#howitworks', label: 'Contact' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-medium text-[color:var(--color-foreground)]/80 hover:text-[color:var(--color-accent)] py-2 px-4 rounded-lg hover:bg-[color:var(--color-surface-muted)] transition-all"
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-[color:var(--color-border)]">
            <Link 
              href="/#howitworks" 
              className="bg-[color:var(--color-foreground)]/95 hover:bg-[color:var(--color-accent)] text-[color:var(--color-accent-contrast)] font-bold py-3 px-4 rounded-xl block text-center transition-all shadow-lg flex items-center justify-center gap-2 border-2 border-[color:var(--color-accent)] hover:text-[color:var(--color-foreground)]"
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
