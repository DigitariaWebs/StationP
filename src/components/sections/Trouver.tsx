'use client';

import Image from 'next/image';
import { Home, Zap, Users, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <section
      id="trouveruneborne"
      className="bg-[color:var(--color-background)] text-[color:var(--color-foreground)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16 w-full">
        <section className="mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[0.95]">
            Une <span className="text-[color:var(--color-accent)]">communauté locale</span> pour mieux recharger.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[color:var(--color-muted)] max-w-3xl font-medium">
            StreetCharge met en relation des conducteurs et des particuliers qui partagent leur borne,
            pour recharger plus simplement dans votre commune.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          <div className="md:col-span-5 bg-[color:var(--color-surface-muted)] border border-[color:var(--color-border)] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-black mb-4">Constat</h3>
            <ul className="space-y-3 text-sm sm:text-base text-[color:var(--color-muted)] font-medium">
              <li>• Augmentation du nombre de véhicules électriques</li>
              <li>• Peu de bornes publiques disponibles</li>
              <li>• Bornes souvent occupées ou coûteuses</li>
            </ul>
          </div>

          <div className="md:col-span-7 bg-[color:var(--color-accent)] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 text-[color:var(--color-accent-contrast)] flex flex-col lg:flex-row gap-6 overflow-hidden relative">
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-black mb-4 flex items-center gap-3">
                <Zap size={28} fill="currentColor" /> Solution
              </h3>

              <p className="text-sm sm:text-base font-bold mb-4">
                Une communauté locale qui permet de :
              </p>
              <ul className="space-y-3 text-sm sm:text-base font-bold">
                <li className="flex items-start gap-3"><Home size={18} className="mt-0.5" /> partager sa borne de recharge</li>
                <li className="flex items-start gap-3"><Users size={18} className="mt-0.5" /> recharger près de chez soi</li>
                <li className="flex items-start gap-3"><Zap size={18} className="mt-0.5" /> recharger à moindre coût</li>
              </ul>
            </div>

            <div className="block w-full lg:w-1/2 relative rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl h-56 sm:h-64 lg:h-auto">
              <Image src="/1.png" alt="Maison avec borne de recharge" fill className="object-cover" />
            </div>
          </div>
        </div>

        <section className="bg-[color:var(--color-surface-strong)]/40 backdrop-blur-md border border-[color:var(--color-border)] rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-6">
          <h3 className="font-black text-lg sm:text-xl uppercase tracking-tight mb-4">Comment ça marche</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Step icon="/icon22.png" title="Inscrivez-vous" desc="Rejoignez la communauté locale." />
            <Step icon="/icon11.png" title="Trouvez une borne proche" desc="Selon votre commune et vos besoins." />
            <Step icon="/icon33.png" title="Rechargez votre véhicule" desc="Chez des particuliers près de chez vous." />
          </div>

          <a
            href="#howitworks"
            className="group mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[color:var(--color-foreground)] text-[color:var(--color-background)] px-6 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all"
          >
            S&apos;inscrire au test <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </section>
      </div>
    </section>
  );
}

function Step({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-[color:var(--color-surface-muted)] border border-[color:var(--color-border)] p-4 sm:p-5 rounded-[1.25rem] sm:rounded-[1.5rem] flex items-center gap-3">
      <div className="w-10 h-10 sm:w-12 sm:h-12 relative shrink-0">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain"
          style={{ filter: 'brightness(0) saturate(100%) invert(41%) sepia(96%) saturate(515%) hue-rotate(145deg) brightness(96%) contrast(101%)' }}
        />
      </div>
      <div>
        <h4 className="font-black text-sm sm:text-base text-[color:var(--color-foreground)] uppercase leading-none mb-2">{title}</h4>
        <p className="text-xs sm:text-sm text-[color:var(--color-muted)] font-medium leading-tight">{desc}</p>
      </div>
    </div>
  );
}
