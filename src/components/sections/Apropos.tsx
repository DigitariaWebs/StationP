'use client';

import Image from 'next/image';
import { Home, Zap, Users, Shield, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main
      id="trouveruneborne"
      // h-screen pour la même hauteur que le Hero
      className=" bg-[color:var(--color-background)] text-[color:var(--color-foreground)] relative overflow-hidden flex flex-col"
    >
      {/* Espace en haut avec pt-32 pour décoller du Hero proprement */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-10 flex-1 flex flex-col min-h-0 w-full">
        
        {/* --- HEADER --- */}
        <section className="mb-10 shrink-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[0.85] uppercase">
            <span className="text-[color:var(--color-accent)]">Voisins,</span><br />
            <span className="relative inline-block">
              pas algorithmes.
              <svg className="absolute w-full h-2 -bottom-2 left-0 text-[color:var(--color-accent)]" viewBox="0 0 200 9" fill="none">
                <path d="M2 7C2 7 101.5 0.5 198 2" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
        </section>

      
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 min-h-0 mb-6">
          
          {/* 1. Le Constat */}
          <div className="md:col-span-5 bg-[color:var(--color-surface-muted)] border border-[color:var(--color-border)] rounded-[2.5rem] p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Le constat</h2>
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

          {/* 2. La Solution */}
          <div className="md:col-span-7 bg-[color:var(--color-accent)] rounded-[2.5rem] p-8 text-[color:var(--color-accent-contrast)] flex gap-8 overflow-hidden relative">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                <Zap size={32} fill="currentColor" /> Notre solution
              </h2>
              <ul className="space-y-4 text-lg font-bold">
                <li className="flex items-center gap-3"><Home size={22}/> Rentabilisez votre borne</li>
                <li className="flex items-center gap-3"><Users size={22}/> Rechargez chez un voisin</li>
              </ul>
            </div>
            <div className="hidden lg:block w-1/2 relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
               <Image src="/3.png" alt="Borne" fill className="object-cover" />
            </div>
          </div>

          <div className="md:col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Step icon="/icon22.png" title="S'inscrire" desc="Rejoignez le réseau local." />
              <Step icon="/icon11.png" title="Connecter" desc="Mise en relation sécurisée." />
              <Step icon="/icon33.png" title="Recharger" desc="Près de chez vous." />
            </div>
          </div>
        </div>

        {/* 4. Phase de lancement - Redescendue tout en bas avec shrink-0 */}
        <div className="shrink-0 bg-[color:var(--color-surface-strong)]/40 backdrop-blur-md border border-[color:var(--color-border)] rounded-[2rem] p-6 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[color:var(--color-accent)] flex items-center justify-center text-[color:var(--color-accent-contrast)] shadow-lg">
              <Shield size={28} />
            </div>
            <div>
              <h3 className="font-black text-xl uppercase tracking-tight">Phase Pilote : Bruxelles</h3>
              <p className="text-sm text-[color:var(--color-muted)] font-medium">Lancement progressif par quartier.</p>
            </div>
          </div>
          <a href="#howitworks" className="group flex items-center gap-3 bg-[color:var(--color-foreground)] text-[color:var(--color-background)] px-6 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all">
            Rejoindre <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </main>
  );
}

function Step({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-[color:var(--color-surface-muted)] border border-[color:var(--color-border)] p-6 rounded-[2rem] flex items-center gap-5 group hover:border-[color:var(--color-accent)] transition-all">
      <div className="w-14 h-14 relative shrink-0">
        <Image 
          src={icon} 
          alt={title} 
          fill 
          // Filtre combiné : on force en blanc pur peu importe la couleur d'origine
         className="object-contain"
style={{ filter: 'brightness(0) saturate(100%) invert(41%) sepia(96%) saturate(515%) hue-rotate(145deg) brightness(96%) contrast(101%)' }}
        />
      </div>
      <div>
        <h3 className="font-black text-lg text-[color:var(--color-foreground)] uppercase leading-none mb-1">{title}</h3>
        <p className="text-sm text-[color:var(--color-muted)] font-medium leading-tight">{desc}</p>
      </div>
    </div>
  );
}