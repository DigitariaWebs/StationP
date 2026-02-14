'use client';

import Image from 'next/image';
import { MapPin, SlidersHorizontal, CalendarCheck } from 'lucide-react';

export default function ReseauBruxellesPage() {
  return (
    <main id="trouver" className="min-h-screen bg-[#1B1F24] text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex items-center justify-center">
      <section className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center">
        
        {/* Colonne texte - responsive */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Réseau Bruxelles
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#00F5A0]">
            Connectez-vous.<br />
            Rechargez simplement.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
            Un appel suffit pour rejoindre le réseau. Notre équipe vous met en relation avec les propriétaires de bornes près de chez vous. Simple, humain, efficace.
          </p>
        </div>

        {/* Colonne features + image - responsive */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch w-full">
          
          {/* Features - horizontal sur mobile, vertical sur desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4 w-full sm:w-auto lg:w-52">
            <Feature
              icon={<MapPin size={20} className="sm:w-5 sm:h-5 lg:w-[22px] lg:h-[22px]" />}
              title="Connexion de quartier"
              desc="Rencontrez vos voisins qui partagent leur borne."
            />
            <Feature
              icon={<SlidersHorizontal size={20} className="sm:w-5 sm:h-5 lg:w-[22px] lg:h-[22px]" />}
              title="Mise en relation directe"
              desc="Pas d'appli, un vrai contact humain par téléphone."
            />
            <Feature
              icon={<CalendarCheck size={20} className="sm:w-5 sm:h-5 lg:w-[22px] lg:h-[22px]" />}
              title="Recharge de confiance"
              desc="Des bornes accessibles grâce à l'entraide locale."
            />
          </div>

          {/* Image + floating card */}
          <div className="relative flex-1 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] mt-4 sm:mt-0">
            
            {/* Image */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-full">
              <Image
                src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&w=1200&q=80"
                alt="Borne de recharge"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Card - repositionnée responsive */}
            <div className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-10 left-2 sm:left-4 lg:left-6 right-2 sm:right-auto bg-[#1B1F24] border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-2xl max-w-[200px] sm:max-w-[250px] lg:max-w-xs mx-auto sm:mx-0">
              <p className="text-[#00F5A0] text-xl sm:text-2xl lg:text-3xl font-bold mb-0.5 sm:mb-1">100%</p>
              <p className="font-semibold text-xs sm:text-sm lg:text-base mb-0.5 sm:mb-1">Réseau humain</p>
              <p className="text-[10px] sm:text-xs lg:text-sm text-white/70">
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
    <div className="flex sm:flex-col gap-3 sm:gap-3 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-[#00F5A0]/40 transition hover:-translate-y-1 duration-300 h-full">
      <div className="text-[#00F5A0] flex-shrink-0">{icon}</div>
      <div>
        <p className="font-semibold text-xs sm:text-sm mb-1">{title}</p>
        <p className="text-[10px] sm:text-xs text-white/70">{desc}</p>
      </div>
    </div>
  );
}