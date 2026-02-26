'use client';

import Image from 'next/image';
import { MapPin, Users, Home } from 'lucide-react';

export default function ReseauLocalPage() {
  return (
    <main
      id="a-propos"
      className="bg-[color:var(--color-background)] text-[color:var(--color-foreground)] relative overflow-hidden flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 flex-1 flex flex-col min-h-0 w-full">

        {/* HEADER */}
        <section className="mb-14 shrink-0">
          <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[0.85] uppercase">
            <span className="text-[color:var(--color-accent)]">Réseau</span><br />
            <span className="relative inline-block">
              local.
              <svg className="absolute w-full h-2 -bottom-2 left-0 text-[color:var(--color-accent)]" viewBox="0 0 200 9" fill="none">
                <path d="M2 7C2 7 101.5 0.5 198 2" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-lg text-[color:var(--color-muted)] max-w-2xl mx-auto font-medium">
            Rechargez près de chez vous grâce à un réseau humain, local et sécurisé.
          </p>
          </div>
        </section>

        {/* GRID PRINCIPALE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 min-h-0">

          {/* TEXTE + FEATURES */}
          <div className="md:col-span-5 bg-[color:var(--color-surface-muted)] border border-[color:var(--color-border)] rounded-[2.5rem] p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-black uppercase mb-6">Comment ça marche</h2>

            <div className="space-y-5">
              <Feature
                icon={<MapPin size={22} />}
                title="Connexion de quartier"
                desc="Nous vous connectons avec des voisins proches."
              />
              <Feature
                icon={<Users size={22} />}
                title="Réseau humain"
                desc="Une communauté locale de confiance."
              />
              <Feature
                icon={<Home size={22} />}
                title="Bornes privées"
                desc="Des particuliers qui partagent leur équipement."
              />
            </div>
          </div>

          {/* IMAGE */}
          <div className="md:col-span-7 relative rounded-[2.5rem] overflow-hidden border border-[color:var(--color-border)] shadow-2xl min-h-[360px]">
            <Image
              src="/1.png"
              alt="Borne de recharge privée"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute bottom-6 left-6 bg-[color:var(--color-surface-strong)]/80 backdrop-blur-md border border-[color:var(--color-border)] rounded-2xl p-5 shadow-xl">
              <p className="text-[color:var(--color-accent)] text-3xl font-black">100%</p>
              <p className="font-bold text-[color:var(--color-foreground)] uppercase text-sm tracking-wide">
                Réseau local
              </p>
              <p className="text-xs text-[color:var(--color-muted)]">
                Des voisins, des bornes privées.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-center gap-4 bg-[color:var(--color-surface)] border border-[color:var(--color-border)] rounded-2xl p-5 group hover:border-[color:var(--color-accent)] transition-all">
      <div className="w-11 h-11 rounded-xl bg-[color:var(--color-accent)]/10 flex items-center justify-center text-[color:var(--color-accent)]">
        {icon}
      </div>
      <div>
        <p className="font-black text-sm uppercase tracking-wide mb-1">{title}</p>
        <p className="text-xs text-[color:var(--color-muted)] font-medium">{desc}</p>
      </div>
    </div>
  );
}