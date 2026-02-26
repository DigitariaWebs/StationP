'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { Menu, X, Zap } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export default function HeroWithNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const rotateY = ((clientX / innerWidth) - 0.5) * 15;
      const rotateX = ((clientY / innerHeight) - 0.5) * -10;
      setRotation({ x: rotateX, y: rotateY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    // h-screen + overflow-hidden pour bloquer le scroll
    <section className="relative w-full h-screen bg-[color:var(--color-background)] overflow-hidden flex flex-col">
      
      {/* Navbar - Espacements réduits pour gagner de la place en hauteur */}
      <header className="relative z-50 w-full border-b border-[color:var(--color-border)]/5 shrink-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-24 sm:h-32">
            
            {/* Logo - BEAUCOUP PLUS GRAND + VISIBLE */}
            <Link href="/" className="flex items-center group relative">
              <div className="relative">
                {theme === 'dark' && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-[-0.5rem] rounded-full opacity-90 blur-[40px]"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(0, 245, 160, 0.45), transparent 60%)',
                      mixBlendMode: 'screen',
                    }}
                  />
                )}
                <Image 
                  src="/w1.png" 
                  alt="StreetCharge Logo" 
                  width={600}
                  height={200}
                  className="h-16 sm:h-24 md:h-32 lg:h-40 w-auto transition-transform group-hover:scale-105 filter brightness-150 contrast-125"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-[color:var(--color-foreground)]/80">
              {['Accueil', 'Trouver une borne', 'a-propos', 'FAQ'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '')}`} 
                  className="text-xs lg:text-sm font-bold uppercase tracking-widest hover:text-[color:var(--color-accent)] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <Link
                href="#howitworks"
                className="bg-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-hover)] text-[color:var(--color-accent-contrast)] text-xs lg:text-sm font-bold py-3 px-8 rounded-full transition-all uppercase"
              >
                Je rejoins
              </Link>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[color:var(--color-foreground)]">
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Content - flex-1 pour occuper tout le reste de la page sans scroll */}
      <div className="flex-1 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center h-full max-h-[85vh]">
          
          {/* Côté Gauche : Texte - Tailles adaptées pour le non-scroll */}
          <div className="z-10 order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[color:var(--color-foreground)] leading-[1.1] mb-4 tracking-tighter">
              La recharge <br />
              <span className="text-[color:var(--color-accent)]">entre particuliers</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[color:var(--color-muted)] mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Partagez votre borne à votre meilleure convenance ou rechargez votre véhicule électrique près de chez vous.
            </p>

            <Link
              href="#howitworks"
              className="group bg-[color:var(--color-accent)] text-[color:var(--color-accent-contrast)] font-black px-10 py-5 rounded-full transition-all hover:scale-105 inline-flex items-center gap-3 text-sm lg:text-base uppercase tracking-wider"
            >
              <Zap size={20} fill="currentColor" />
              Rejoindre la communauté
            </Link>
          </div>

          {/* Côté Droite : Image 3D - Taille maîtrisée pour tenir en une page */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center h-full max-h-[300px] sm:max-h-[450px] lg:max-h-[600px] perspective-[1500px]">
            <div 
              className="relative w-full h-full transition-transform duration-300 ease-out"
              style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <Image
                src="/i.png"
                alt="StreetCharge 3D Scene"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Ombre de contact au sol - Juste du noir, pas de lumière IA */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[60%] h-4 bg-black/40 blur-2xl rounded-full -z-10" />
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[color:var(--color-background)] flex flex-col p-8 md:hidden">
          <div className="flex justify-end mb-8">
            <button onClick={() => setIsMenuOpen(false)} className="text-[color:var(--color-foreground)]"><X size={35} /></button>
          </div>
          <nav className="flex flex-col gap-6 text-3xl font-black text-[color:var(--color-foreground)] uppercase italic">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link href="#trouver" onClick={() => setIsMenuOpen(false)}>Bornes</Link>
            <Link href="#a-propos" onClick={() => setIsMenuOpen(false)}>À propos</Link>
            <Link href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
          </nav>
        </div>
      )}
    </section>
  );
}
