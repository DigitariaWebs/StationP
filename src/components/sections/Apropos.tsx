import { Home, Zap, Users, TrendingUp, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <main id="a-propos" className="min-h-screen bg-[#1B1F24] text-white selection:bg-[#00F5A0] selection:text-[#1B1F24]">
      
      {/* Background subtil - Amélioré pour plus de profondeur */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#00F5A0]/5 blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] rounded-full bg-[#00F5A0]/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        
        {/* --- HEADER --- */}
        <section className="mb-24 md:mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#00F5A0]/30 rounded-full bg-[#00F5A0]/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse"/>
            <span className="text-[#00F5A0] text-xs font-bold uppercase tracking-[0.2em]">Notre mission</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-12">
            <span className="text-[#00F5A0]">Voisins,</span><br />
            <span className="text-white relative inline-block">
              pas algorithmes.
              {/* Soulignement décoratif */}
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-[#00F5A0]" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 101.5 0.500049 198 2.00003" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
            </span>
          </h1>
        </section>

        {/* --- CONTENT BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 1. Le Problème */}
          <div className="md:col-span-5 bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between hover:bg-white/[0.04] transition-colors duration-300">
            <div>
              <div className="w-14 h-14 bg-[#1B1F24] border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <TrendingUp className="text-[#00F5A0]" size={28} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Le constat</h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  <strong className="text-white block mb-1">Augmentation des voitures électriques</strong>
                  Recharger son véhicule en ville devient un véritable défi quotidien.
                </p>
                <div className="h-px w-full bg-white/5 my-4"/>
                <p>
                  Pourtant, des milliers de <strong className="text-[#00F5A0] font-semibold">bornes de recharge privées</strong> dorment dans des garages ou allées, inutilisées la majeure partie de la journée.
                </p>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-white/5">
              <p className="text-lg font-medium text-white/90">
                Pourquoi ne pas les partager ?
              </p>
            </div>
          </div>

          {/* 2. La Solution (Avec Photo Borne Privée) */}
          <div className="md:col-span-7 bg-[#00F5A0] rounded-[2.5rem] p-8 md:p-10 text-[#1B1F24] relative overflow-hidden group flex flex-col md:flex-row gap-8">
            
            {/* Contenu Texte */}
            <div className="relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                  <Zap size={32} fill="currentColor" className="text-[#1B1F24]" />
                  Notre solution
                </h2>
                
                <p className="text-xl font-bold mb-8 leading-tight">
                  StreetCharge libère le potentiel des bornes résidentielles.
                </p>
                
                <ul className="space-y-4 font-medium">
                  <li className="flex items-center gap-3">
                    <div className="bg-[#1B1F24]/10 p-1.5 rounded-full"><Home size={18}/></div>
                    <span>Rentabilisez votre borne privée</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-[#1B1F24]/10 p-1.5 rounded-full"><Users size={18}/></div>
                    <span>Rechargez chez un voisin de confiance</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                 <p className="text-sm font-bold uppercase tracking-widest opacity-60">Simple. Humain. Local.</p>
              </div>
            </div>

            {/* Zone Image Borne Privée */}
            <div className="md:w-1/2 relative h-64 md:h-auto rounded-3xl overflow-hidden border-4 border-[#1B1F24]/10 shadow-2xl transform md:rotate-2 transition-transform hover:rotate-0 duration-500">
               <img 
                 src="./3.png" 
                 alt="Borne de recharge privée" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-[#1B1F24] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                 Borne Privée Certifiée
               </div>
            </div>
          </div>

          {/* 3. Steps */}
          <div className="md:col-span-12 mt-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Step number="01" title="S'inscrire" desc="Propriétaire de borne ou conducteur, rejoignez le réseau." />
              <Step number="02" title="Connecter" desc="Nous facilitons la mise en relation locale et sécurisée." />
              <Step number="03" title="Recharger" desc="Profitez d'une recharge conviviale près de chez vous." />
            </div>
          </div>

          {/* 4. Phase de lancement */}
          <div className="md:col-span-12 mt-4 bg-gradient-to-r from-white/[0.05] to-transparent border border-white/10 rounded-[2.5rem] p-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#00F5A0]/5 to-transparent pointer-events-none"/>

            <div className="flex items-start md:items-center gap-6 relative z-10">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#00F5A0] flex items-center justify-center text-[#1B1F24] shadow-[0_0_30px_rgba(0,245,160,0.3)]">
                <Shield size={32} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Phase Pilote en cours</h3>
                <p className="text-white/60 text-base max-w-lg">
                  Le service est actuellement lancé dans certains quartiers de <span className="text-[#00F5A0] font-medium">Bruxelles</span> et sa périphérie.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-2 relative z-10 min-w-max">
              <span className="text-xs font-bold uppercase tracking-widest text-white/40 italic">
                Sans engagement
              </span>
              <a 
                href="#howitworks" 
                className="group flex items-center gap-3 text-[#00F5A0] font-bold text-lg hover:text-white transition-colors cursor-pointer"
              >
                Rejoindre la liste
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

function Step({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div className="bg-[#1B1F24] border border-white/5 p-8 rounded-[2rem] hover:border-[#00F5A0]/30 transition-all duration-300 group hover:bg-white/[0.02]">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-[#00F5A0] transition-colors">{title}</h3>
        <span className="text-white/20 font-mono text-sm font-bold">{number}</span>
      </div>
      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
