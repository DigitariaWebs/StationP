'use client';

import { Home, Zap, Users, TrendingUp, Shield, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main id="a-propos" className="min-h-screen bg-[#1B1F24] text-white selection:bg-[#00F5A0] selection:text-[#1B1F24]">
      
      {/* Background subtil pour casser l'aspect plat */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#00F5A0]/5 blur-[120px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[#00F5A0]/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        
        {/* --- HEADER --- */}
        <section className="mb-32">
          <div className="inline-block px-4 py-1.5 mb-8 border border-[#00F5A0]/30 rounded-full">
            <span className="text-[#00F5A0] text-xs font-bold uppercase tracking-[0.2em]">Notre mission</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-12">
            <span className="text-[#00F5A0]">Voisins,</span><br />
            <span className="text-white inline-flex items-center gap-4">
                pas algorithmes <span className="hidden md:block h-1 w-32 bg-[#00F5A0]/20 rounded-full" />
            </span>
          </h1>
        </section>

        {/* --- CONTENT BENTO --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Le Constat */}
          <div className="md:col-span-5 bg-white/[0.03] border border-white/10 rounded-[2rem] p-10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8">
                <TrendingUp className="text-[#00F5A0]" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Le constat</h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  <strong className="text-white">Augmentation du nombre de voitures électriques</strong><br />
                  Mais recharger son véhicule n&apos;est pas toujours simple.
                </p>
                <p>
                  Aujourd&apos;hui, de nombreuses <strong className="text-[#00F5A0] font-semibold">bornes de recharge privées</strong> restent inutilisées, alors que de plus en plus de conducteurs n&apos;ont pas accès à une solution simple.
                </p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-xl font-bold">
                Le but : <span className="text-[#00F5A0]">mettre en relation des voisins</span>.
              </p>
            </div>
          </div>

          {/* Notre Solution */}
          <div className="md:col-span-7 bg-[#00F5A0] rounded-[2rem] p-10 text-[#1B1F24] relative overflow-hidden group">
            <Zap className="absolute -right-8 -top-8 opacity-10 rotate-12 transition-transform group-hover:scale-110" size={300} />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-10 flex items-center gap-3">
                <Zap size={32} fill="currentColor" />
                Notre solution
              </h2>
              
              <p className="text-2xl font-bold mb-12 leading-tight">
                StreetCharge permet aux particuliers :
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="mt-1 bg-[#1B1F24] p-2 rounded-lg">
                    <Home size={20} className="text-[#00F5A0]" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">Mettre leur borne à disposition</p>
                    <p className="opacity-80">Lorsqu&apos;elle n&apos;est pas utilisée</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="mt-1 bg-[#1B1F24] p-2 rounded-lg">
                    <Users size={20} className="text-[#00F5A0]" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">Recharger chez un voisin</p>
                    <p className="opacity-80">De manière locale et volontaire</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-6 bg-[#1B1F24]/5 border border-[#1B1F24]/10 rounded-2xl">
                <p className="font-semibold italic leading-snug">
                  "Nous commençons à petite échelle afin de construire une solution humaine et de confiance."
                </p>
              </div>
            </div>
          </div>

          {/* How it works - Compact Horizontal */}
          <div className="md:col-span-12 mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Step number="01" title="S'inscrire" desc="Conducteur ou propriétaire, rejoignez-nous." />
            <Step number="02" title="Connecter" desc="Nous facilitons la mise en relation locale." />
            <Step number="03" title="Recharger" desc="En toute simplicité et convivialité." />
          </div>

          {/* Phase de lancement */}
          <div className="md:col-span-12 mt-4 bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[#00F5A0]/10 flex items-center justify-center border border-[#00F5A0]/20">
                    <Shield size={32} className="text-[#00F5A0]" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-[#00F5A0]">Phase de lancement</h3>
                    <p className="text-white/60">Actuellement à Bruxelles et périphérie.</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-sm font-bold uppercase tracking-widest opacity-40 italic">Participation sans engagement</span>
                <ArrowRight className="text-[#00F5A0] animate-pulse" />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

function Step({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] group hover:border-[#00F5A0]/50 transition-colors">
      <span className="text-[#00F5A0] font-mono text-sm mb-4 block opacity-50">{number}</span>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
