'use client';

import Image from 'next/image';
import { MapPin, SlidersHorizontal, CalendarCheck } from 'lucide-react';

export default function ReseauBruxellesPage() {
  return (
    <main id="trouver" className="min-h-screen bg-[#1B1F24] text-white px-6 py-20 flex items-center justify-center">
      <section className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* Colonne texte */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Réseau Bruxelles
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#00F5A0]">
            Connectez-vous.<br />
            Rechargez simplement.
          </h2>

          <p className="text-lg text-white/80 max-w-xl">
            Un appel suffit pour rejoindre le réseau. Notre équipe vous met en relation avec les propriétaires de bornes près de chez vous. Simple, humain, efficace.
          </p>
        </div>

        {/* Colonne features + image */}
        <div className="flex gap-4 items-stretch">

          {/* Features */}
          <div className="flex flex-col gap-4 justify-between flex-shrink-0 w-52">
            <Feature
              icon={<MapPin size={22} />}
              title="Connexion de quartier"
              desc="Rencontrez vos voisins qui partagent leur borne."
            />
            <Feature
              icon={<SlidersHorizontal size={22} />}
              title="Mise en relation directe"
              desc="Pas d'appli, un vrai contact humain par téléphone."
            />
            <Feature
              icon={<CalendarCheck size={22} />}
              title="Recharge de confiance"
              desc="Des bornes accessibles grâce à l'entraide locale."
            />
          </div>

          {/* Image + floating card */}
          <div className="relative flex-1">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-full">
              <Image
                src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&w=1200&q=80"
                alt="Borne de recharge"
                width={650}
                height={480}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-20 left-6 bg-[#1B1F24] border border-white/10 rounded-2xl p-6 max-w-xs shadow-2xl">
              <p className="text-[#00F5A0] text-3xl font-bold mb-1">100%</p>
              <p className="font-semibold mb-1">Réseau humain</p>
              <p className="text-sm text-white/70">
                Des vraies personnes, des vraies solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
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
    <div className="flex flex-col gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#00F5A0]/40 transition">
      <div className="text-[#00F5A0]">{icon}</div>
      <div>
        <p className="font-semibold text-sm mb-1">{title}</p>
        <p className="text-xs text-white/70">{desc}</p>
      </div>
    </div>
  );
}