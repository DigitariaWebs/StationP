'use client';

import Image from 'next/image';
import { MapPin, SlidersHorizontal, CalendarCheck } from 'lucide-react';

export default function ReseauBruxellesPage() {
  return (
    <main id="trouver" className="min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center">
      <section className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Réseau Bruxelles
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#00F5A0]">
            Plus de bornes.<br />
            Moins de détours.
          </h2>

          <p className="text-lg text-white/80 max-w-xl">
            Accédez aux bornes cachées dans les allées privées et les garages de votre quartier. Filtrez par puissance, type de prise et prix en temps réel.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-6">
            <Feature
              icon={<MapPin size={28} />}
              title="Géolocalisation précise"
              desc="Trouvez la borne la plus proche à moins de 2 min."
            />
            <Feature
              icon={<SlidersHorizontal size={28} />}
              title="Filtres avancés"
              desc="Type 2, CCS, Prise domestique... ne voyez que ce qui vous convient."
            />
            <Feature
              icon={<CalendarCheck size={28} />}
              title="Réservation instantanée"
              desc="Réservez votre créneau. La borne vous attend."
            />
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&w=1200&q=80"
              alt="Charging station"
              width={650}
              height={480}
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-[#0b0b0b] border border-white/10 rounded-2xl p-6 max-w-xs shadow-2xl">
            <p className="text-[#00F5A0] text-3xl font-bold mb-1">100%</p>
            <p className="font-semibold mb-1">Réseau fiable</p>
            <p className="text-sm text-white/70">
              Bornes certifiées, disponibilité garantie, service premium.
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
    <div className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#00F5A0]/40 transition">
      <div className="text-[#00F5A0]">{icon}</div>
      <div>
        <p className="font-semibold mb-1">{title}</p>
        <p className="text-sm text-white/70">{desc}</p>
      </div>
    </div>
  );
}
