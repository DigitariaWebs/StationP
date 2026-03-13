'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { Menu, X, Zap, CheckCircle2 } from 'lucide-react';
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

  const goToForm = () => {
    const section = document.getElementById('howitworks');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
      return;
    }
    window.location.hash = '#howitworks';
    setIsMenuOpen(false);
  };

  return (
    <section className="relative w-full h-screen bg-[color:var(--color-background)] overflow-hidden flex flex-col">

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
                  className="h-28 sm:h-32 md:h-36 lg:h-40 w-auto transition-transform group-hover:scale-105 filter brightness-150 contrast-125"
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10 text-[color:var(--color-foreground)]/80">
              {[
                { label: 'Accueil', href: '#accueil' },
                { label: 'Communauté', href: '#trouveruneborne' },
                { label: 'Inscription', href: '#howitworks' },
              ].map((item) => (
                <Link 
                  key={item.label}
                  href={`/${item.href}`}
                  className="text-sm font-bold uppercase tracking-widest hover:text-[color:var(--color-accent)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <button
                type="button"
                onClick={goToForm}
                className="bg-[color:var(--color-accent)] hover:bg-[color:var(--color-accent-hover)] text-[color:var(--color-accent-contrast)] text-sm font-bold py-3 px-8 rounded-full transition-all uppercase"
              >
                Je rejoins
              </button>
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
      <div id="accueil" className="flex-1 flex items-center py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* TEXTE */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] mb-5">
              La recharge <br />
              <span className="text-[color:var(--color-accent)]">entre particuliers</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[color:var(--color-muted)] mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Rejoignez une communauté locale de conducteurs de véhicules électriques qui partagent leurs bornes de recharge,
              pour recharger près de chez vous à moindre coût.
            </p>

            <div className="mb-8 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-start gap-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-[color:var(--color-surface)] border border-[color:var(--color-border)]">
                <CheckCircle2 size={14} className="text-[color:var(--color-accent)] mt-0.5 shrink-0" />
                <p className="font-semibold text-[color:var(--color-muted)] leading-tight text-xs">Réseau local entre conducteurs et hôtes</p>
              </div>
              <div className="flex items-start gap-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-[color:var(--color-surface)] border border-[color:var(--color-border)]">
                <CheckCircle2 size={14} className="text-[color:var(--color-accent)] mt-0.5 shrink-0" />
                <p className="font-semibold text-[color:var(--color-muted)] leading-tight text-xs">Inscriptions ouvertes pour la phase pilote</p>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-start gap-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-[color:var(--color-surface)] border border-[color:var(--color-border)]">
                <CheckCircle2 size={14} className="text-[color:var(--color-accent)] mt-0.5 shrink-0" />
                <p className="font-semibold text-[color:var(--color-muted)] leading-tight text-xs">Objectif : valider le service avec la communauté</p>
              </div>
            </div>

   
          </div>

          {/* IMAGE 3D */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center h-[160px] sm:h-[260px] lg:h-[420px] perspective-[1500px]">
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
            <Link href="/#accueil" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link href="/#trouveruneborne" onClick={() => setIsMenuOpen(false)}>Communauté</Link>
            <Link href="/#howitworks" onClick={() => setIsMenuOpen(false)}>Inscription</Link>
          </nav>

          <button
            type="button"
            onClick={goToForm}
            className="mt-auto bg-[color:var(--color-accent)] text-[color:var(--color-accent-contrast)] py-4 rounded-full font-black text-center uppercase tracking-widest"
          >
            Je rejoins
          </button>
        </div>
      )}

    </section>
  );
}
