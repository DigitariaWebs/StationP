'use client';

import Image from 'next/image';
import { MapPin, SlidersHorizontal, CalendarCheck } from 'lucide-react';

export default function ReseauBruxellesPage() {
  return (
    <main id="trouver" className="min-h-screen bg-[#1B1F24] text-white px-4 py-12">
      <section className="max-w-7xl mx-auto">
        
        {/* Colonne texte */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">
            Réseau Bruxelles
          </h1>

          <h2 className="text-2xl font-semibold text-[#00F5A0] mb-4">
            Connectez-vous. Rechargez simplement.
          </h2>

          <p className="text-base text-white/80 max-w-2xl mx-auto">
            Un appel suffit pour rejoindre le réseau. Notre équipe vous met en relation avec les propriétaires de bornes près de chez vous. Simple, humain, efficace.
          </p>
        </div>

        {/* Features en ligne */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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
        <div className="relative max-w-3xl mx-auto h-[400px]">
          
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-full">
            <Image
              src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&w=1200&q=80"
              alt="Borne de recharge"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 left-4 right-4 md:left-6 md:right-auto bg-[#1B1F24] border border-white/10 rounded-xl p-4 shadow-2xl max-w-xs mx-auto">
            <p className="text-[#00F5A0] text-2xl font-bold">100%</p>
            <p className="font-semibold">Réseau humain</p>
            <p className="text-xs text-white/70">
              Des vraies personnes, des vraies solutions.
            </p>
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
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
      <div className="text-[#00F5A0] mb-2">{icon}</div>
      <p className="font-semibold text-sm mb-1">{title}</p>
      <p className="text-xs text-white/70">{desc}</p>
    </div>
  );
}