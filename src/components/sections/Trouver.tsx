'use client';

import Image from 'next/image';
import { MapPin, Users, Home, Heart } from 'lucide-react';

export default function ReseauLocalPage() {
  return (
    <main id="trouver" className="min-h-screen bg-[#1B1F24] text-white px-4 py-12">
      <section className="max-w-7xl mx-auto">
        
        {/* Colonne texte */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-[#00F5A0]">Réseau local</span>
          </h1>

          <h2 className="text-2xl font-semibold text-white mb-4">
            Rechargez près de chez vous
          </h2>

          <p className="text-base text-white/80 max-w-2xl mx-auto">
            Inscrivez-vous et nous facilitons la mise en relation avec des propriétaires de bornes dans votre quartier. Simple, local, humain.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Feature
            icon={<MapPin size={22} />}
            title="Connexion de quartier"
            desc="Rencontrez vos voisins qui partagent leur borne privée."
          />
          <Feature
            icon={<Users size={22} />}
            title="Réseau local"
            desc="Une communauté de confiance près de chez vous."
          />
          <Feature
            icon={<Home size={22} />}
            title="Bornes privées"
            desc="Des habitations qui partagent leur équipement."
          />
        </div>

        {/* Image avec borne privée */}
        <div className="relative max-w-3xl mx-auto h-[400px]">
          
          {/* Image - MAINTENANT UNE BORNE PRIVÉE */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-full">
            <Image
              src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&w=1200&q=80"
              alt="Borne de recharge privée"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 left-4 right-4 md:left-6 md:right-auto bg-[#1B1F24] border border-white/10 rounded-xl p-4 shadow-2xl max-w-xs mx-auto">
            <p className="text-[#00F5A0] text-2xl font-bold">100%</p>
            <p className="font-semibold">Réseau local</p>
            <p className="text-xs text-white/70">
              Des voisins, des bornes privées.
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
