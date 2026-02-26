'use client';

import Image from 'next/image';
import { Home, Zap, Users, Shield, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main
      id="trouveruneborne"
      className="bg-[color:var(--color-background)] text-[color:var(--color-foreground)] relative overflow-hidden flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 flex-1 flex flex-col min-h-0 w-full">
        
        {/* HEADER */}
        <section className="mb-12 shrink-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] uppercase">
            <span className="text-[color:var(--color-accent)]">Voisins,</span><br />
            <span className="relative inline-block">
              pas algorithmes.
              <svg className="absolute w-full h-2 -bottom-2 left-0 text-[color:var(--color-accent)]" viewBox="0 0 200 9" fill="none">
                <path d="M2 7C2 7 101.5 0.5 198 2" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
        </section>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 min-h-0 mb-8">
          
          {/* CONSTAT */}
          <div className="md:col-span-5 bg-[color:var(--color-surface-muted)] border border-[color:var(--color-border)] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Le constat</h2>
            <div className="space-y-4 text-base text-[color:var(--color-muted)]">
              <p>
                <strong className="text-[color:var(--color-foreground)]">Augmentation des véhicules</strong><br />
                Recharger en ville est un défi quotidien.
              </p>
              <div className="h-px w-full bg-[color:var(--color-border)]" />
              <p>
                Pourtant, des milliers de <strong className="text-[color:var(--color-accent)] font-bold">bornes privées</strong> sont inutilisées.
              </p>
            </div>
          </div>

          {/* SOLUTION */}
          <div className="md:col-span-7 bg-[color:var(--color-accent)] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 text-[color:var(--color-accent-contrast)] flex flex-col lg:flex-row gap-6 overflow-hidden relative">
            
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-black mb-5 flex items-center gap-3">
                <Zap size={28} fill="currentColor" /> Notre solution
              </h2>

              <ul className="space-y-4 text-base sm:text-lg font-bold">
                <li className="flex items-center gap-3"><Home size={20}/> Rentabilisez votre borne</li>
                <li className="flex items-center gap-3"><Users size={20}/> Rechargez chez un voisin</li>
              </ul>
            </div>

            {/* IMAGE */}
            <div className="block w-full lg:w-1/2 relative rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl h-56 sm:h-64 lg:h-auto">
              <Image src="/3.png" alt="Borne" fill className="object-cover" />
            </div>

          </div>

          {/* STEPS */}
          <div className="md:col-span-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <Step icon="/icon22.png" title="S'inscrire" desc="Rejoignez le réseau local." />
              <Step icon="/icon11.png" title="Connecter" desc="Mise en relation sécurisée." />
              <Step icon="/icon33.png" title="Recharger" desc="Près de chez vous." />
            </div>
          </div>
        </div>

        {/* PHASE PILOTE */}
        <div className="shrink-0 bg-[color:var(--color-surface-strong)]/40 backdrop-blur-md border border-[color:var(--color-border)] rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-5 sm:justify-between">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[color:var(--color-accent)] flex items-center justify-center text-[color:var(--color-accent-contrast)] shadow-lg">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="font-black text-lg sm:text-xl uppercase tracking-tight">Phase Pilote : Bruxelles</h3>
              <p className="text-xs sm:text-sm text-[color:var(--color-muted)] font-medium">Lancement progressif par quartier.</p>
            </div>
          </div>

          <a
            href="#howitworks"
            className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[color:var(--color-foreground)] text-[color:var(--color-background)] px-6 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all"
          >
            Rejoindre <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </main>
  );
}

function Step({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-[color:var(--color-surface-muted)] border border-[color:var(--color-border)] p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] flex items-center gap-4 group hover:border-[color:var(--color-accent)] transition-all">
      <div className="w-12 h-12 sm:w-14 sm:h-14 relative shrink-0">
        <Image 
          src={icon} 
          alt={title} 
          fill 
          className="object-contain"
          style={{ filter: 'brightness(0) saturate(100%) invert(41%) sepia(96%) saturate(515%) hue-rotate(145deg) brightness(96%) contrast(101%)' }}
        />
      </div>
      <div>
        <h3 className="font-black text-base sm:text-lg text-[color:var(--color-foreground)] uppercase leading-none mb-1">{title}</h3>
        <p className="text-xs sm:text-sm text-[color:var(--color-muted)] font-medium leading-tight">{desc}</p>
      </div>
    </div>
  );
}