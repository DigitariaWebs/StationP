'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main id="a-propos" className="min-h-screen bg-[#1B1F24] text-white px-6 py-20 overflow-hidden relative">

      {/* SVG sorti du max-w-7xl pour couvrir toute la largeur */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1000 800" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 400 C 200 100, 600 600, 1000 200" stroke="#00F5A0" strokeWidth="1" />
          <path d="M0 420 C 200 120, 600 620, 1000 220" stroke="#00F5A0" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8">
            <h1 className="text-6xl md:text-[85px] font-bold leading-[0.9] tracking-tight">
              Pourquoi choisir <br /> 
              notre réseau de <br />
              <span className="text-white">recharge ?</span>
            </h1>
          </div>
          
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end lg:text-right self-start pt-6">
            <span className="bg-white/5 border border-white/10 text-[#00F5A0] px-5 py-2 rounded-full text-sm font-medium mb-6">
              À propos de notre service
            </span>
            <p className="text-lg text-white/60 leading-relaxed max-w-sm">
              Découvrez pourquoi nous sommes le choix privilégié de milliers de propriétaires de VE. Un service d&apos;excellence à chaque étape de votre trajet.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Bloc Gauche : Carte et Texte */}
          <div className="lg:col-span-5 space-y-12">
            
            <div className="bg-[#00F5A0] text-black p-10 rounded-[45px] rounded-tl-none shadow-[0_20px_60px_rgba(0,245,160,0.15)]">
              <p className="text-7xl font-bold mb-4 tracking-tighter">100%</p>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Réseau Fiable</h3>
              <p className="text-lg font-medium leading-tight opacity-80">
                Votre guide fiable vers les stations de recharge les plus proches, partout et à tout moment.
              </p>
            </div>

            {/* Texte secondaire */}
            <div className="pl-4">
              <h4 className="text-2xl font-semibold mb-2 italic">Prix Transparents</h4>
              <p className="text-white/50 text-lg">Comparez les tarifs de recharge instantanément.</p>
            </div>
          </div>

          {/* Bloc Droite : Les Images superposées */}
          <div className="lg:col-span-7 relative flex justify-end">
            
            {/* Image Principale (Verticale) */}
            <div className="relative w-full lg:w-[480px] h-[600px] rounded-[50px] overflow-hidden border border-white/5 shadow-2xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1715639312136-56a01f236440?auto=format&fit=crop&w=1200&q=80"
                alt="Station de recharge minimaliste"
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}