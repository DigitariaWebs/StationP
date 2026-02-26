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
    if (window.innerWidth < 1024) return;

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
    <section className="relative w-full min-h-screen bg-[color:var(--color-background)] overflow-hidden flex flex-col">

      {/* NAVBAR */}
      <header className="relative z-50 w-full shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-20 sm:h-24">

            {/* LOGO */}
            <Link href="/" className="flex items-center group relative">
              <div className="relative">
                {theme === 'dark' && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-[-0.5rem] rounded-full opacity-90 blur-[40px]"
                    style={{
                      background: 'radial-gradient(circle, rgba(0,245,160,.45), transparent 60%)',
                      mixBlendMode: 'screen',
                    }}
                  />
                )}
                <Image 
                  src="/w1.png" 
                  alt="StreetCharge Logo" 
                  width={600}
                  height={200}
                  className="h-28 sm:h-32 md:h-40 lg:h-44 w-auto transition-transform group-hover:scale-105 filter brightness-150 contrast-125"
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10 text-[color:var(--color-foreground)]/80">
              {['Accueil', 'Trouver une borne', 'a-propos', 'FAQ'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '')}`} 
                  className="text-sm font-bold uppercase tracking-widest hover:text-[color:var(--color-accent)] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <Link
                href="#howitworks"
                className="bg-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-hover)] text-[color:var(--color-accent-contrast)] text-sm font-bold py-3 px-8 rounded-full transition-all uppercase"
              >
                Je rejoins
              </Link>
            </div>

            {/* MOBILE */}
            <div className="lg:hidden flex items-center gap-3">
              <ThemeToggle />
              <button onClick={() => setIsMenuOpen(true)} className="text-[color:var(--color-foreground)]">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* TEXTE */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] mb-5">
              La recharge <br />
              <span className="text-[color:var(--color-accent)]">entre particuliers</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[color:var(--color-muted)] mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Partagez votre borne à votre meilleure convenance ou rechargez votre véhicule électrique près de chez vous.
            </p>

            <Link
              href="#howitworks"
              className="group inline-flex items-center gap-3 bg-[color:var(--color-accent)] text-[color:var(--color-accent-contrast)] font-black px-8 py-4 rounded-full transition-all hover:scale-105 text-sm sm:text-base uppercase tracking-wider"
            >
              <Zap size={20} fill="currentColor" />
              Rejoindre la communauté
            </Link>
          </div>

          {/* IMAGE 3D */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center h-[260px] sm:h-[360px] lg:h-[520px] perspective-[1500px]">
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
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-4 bg-black/40 blur-2xl rounded-full -z-10" />
          </div>
        </div>
      </div>

      {/* MENU MOBILE FULLSCREEN */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[color:var(--color-background)] flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <Image src="/w1.png" alt="logo" width={220} height={80} />
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
          </div>

          <nav className="flex flex-col gap-8 text-3xl font-black uppercase tracking-tight">
            <Link href="#accueil" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link href="#trouveruneborne" onClick={() => setIsMenuOpen(false)}>Bornes</Link>
            <Link href="#a-propos" onClick={() => setIsMenuOpen(false)}>À propos</Link>
            <Link href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
          </nav>

          <Link
            href="#howitworks"
            onClick={() => setIsMenuOpen(false)}
            className="mt-auto bg-[color:var(--color-accent)] text-[color:var(--color-accent-contrast)] py-4 rounded-full font-black text-center uppercase tracking-widest"
          >
            Je rejoins
          </Link>
        </div>
      )}

    </section>
  );
}
