'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main id="a-propos" className="min-h-screen bg-[#1B1F24] text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 overflow-hidden relative">

      {/* SVG décoratif */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 sm:opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1000 800" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 400 C 200 100, 600 600, 1000 200" stroke="#00F5A0" strokeWidth="1" />
          <path d="M0 420 C 200 120, 600 620, 1000 220" stroke="#00F5A0" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section titre - DESCENDU AVEC mt-8 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20 mt-8 sm:mt-12">
          
          {/* Titre principal - responsive */}
          <div className="lg:col-span-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[55px] font-bold leading-tight lg:leading-[0.9] tracking-tight">
              Un réseau <span className="text-[#00F5A0]">pensé</span> <br className="hidden sm:block" />
              <span className="text-white">pour l&apos;humain</span>
            </h1>
          </div>
          
          {/* Badge et description - responsive */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end lg:text-right self-start pt-0 lg:pt-6">
            <span className="bg-white/5 border border-white/10 text-[#00F5A0] px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 inline-block">
              Notre philosophie
            </span>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-sm text-center lg:text-right">
              Ici, pas d&apos;algorithme. Juste des voisins qui partagent leur borne et une équipe qui connecte les gens par téléphone.
            </p>
          </div>
        </div>

        {/* Section contenu principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start lg:items-end">
          
          {/* Bloc Gauche */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-10 lg:space-y-12">
            
            {/* Carte verte */}
            <div className="bg-[#00F5A0] text-black p-6 sm:p-8 lg:p-10 rounded-[30px] sm:rounded-[40px] lg:rounded-[45px] rounded-tl-none shadow-[0_20px_40px_rgba(0,245,160,0.15)]">
              <p className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3 lg:mb-4 tracking-tighter">100%</p>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold uppercase tracking-widest mb-2 sm:mb-3 lg:mb-4">CONNEXION HUMAINE</h3>
              <p className="text-sm sm:text-base lg:text-lg font-medium leading-tight opacity-80">
                Chaque conducteur est mis en relation directement avec un propriétaire de borne. Un appel, et c&apos;est réglé.
              </p>
            </div>

            {/* Texte secondaire */}
            <div className="pl-2 sm:pl-3 lg:pl-4">
              <h4 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2 italic">Pas de réservation automatique</h4>
              <p className="text-white/50 text-base sm:text-lg">Un vrai contact, une vraie solution.</p>
            </div>
          </div>

          {/* Bloc Droite - Image */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            
            {/* Image avec hauteur responsive */}
            <div className="relative w-full sm:w-4/5 lg:w-[480px] h-[400px] sm:h-[500px] lg:h-[600px] rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] overflow-hidden border border-white/5 shadow-2xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1715639312136-56a01f236440?auto=format&fit=crop&w=1200&q=80"
                alt="Station de recharge minimaliste"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Éventuel badge flottant (optionnel) */}
            <div className="absolute -bottom-4 left-4 sm:left-8 lg:left-auto lg:-left-12 bg-[#1B1F24] border border-[#00F5A0]/30 rounded-xl px-4 py-2 shadow-xl">
              <p className="text-xs sm:text-sm text-[#00F5A0] font-semibold">✦ Connexion directe</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}