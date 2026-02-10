import Image from 'next/image';
import { Search, MapPin, Calendar, ShieldCheck, Zap, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 lg:h-[90vh] lg:min-h-[700px] flex items-center">
      
      {/* --- BACKGROUND DECORATION (Pour casser le look "IA générique") --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply filter"></div>
        <div className="absolute bottom-[-10%] right-[40%] w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply filter"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* --- COLONNE DE GAUCHE : TEXTE & RECHERCHE --- */}
          <div className="lg:col-span-6 flex flex-col pt-10 pb-12 lg:py-0">
            
            {/* Badge "Nouveau" stylisé */}
            <div className="w-fit mb-6">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full pl-2 pr-4 py-1.5 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                </span>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Nouveau à Bruxelles
                </span>
              </div>
            </div>

            {/* Titre Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
              La recharge électrique,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                entre voisins.
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              L'Airbnb des bornes de recharge. Accédez au réseau privé le plus dense de Belgique ou <span className="font-bold text-slate-900 bg-blue-50 px-1 rounded">gagnez jusqu'à 160€/mois</span> en louant votre borne.
            </p>

            {/* --- SEARCH BOX (Design "Flottant") --- */}
            <div className="bg-white p-2 rounded-[1.5rem] shadow-xl shadow-blue-900/5 border border-slate-100 max-w-xl relative">
              <form className="flex flex-col md:flex-row gap-2">
                
                {/* Input 1: Localisation */}
                <div className="flex-1 relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MapPin className="text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                  </div>
                  <div className="h-full bg-slate-50 group-focus-within:bg-white border border-transparent group-focus-within:border-blue-100 rounded-xl transition-all duration-200 py-3 pl-12 pr-4">
                    <label htmlFor="location" className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Où allez-vous ?</label>
                    <input 
                      type="text" 
                      id="location"
                      placeholder="Bruxelles, Ixelles..." 
                      className="w-full bg-transparent outline-none text-slate-900 font-bold placeholder-slate-300 text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Input 2: Date */}
                <div className="md:w-1/3 relative group">
                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Calendar className="text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                  </div>
                  <div className="h-full bg-slate-50 group-focus-within:bg-white border border-transparent group-focus-within:border-blue-100 rounded-xl transition-all duration-200 py-3 pl-12 pr-4">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Quand ?</label>
                    <input type="text" placeholder="Maintenant" className="w-full bg-transparent outline-none text-slate-900 font-bold text-sm sm:text-base" />
                  </div>
                </div>

                {/* Bouton */}
                <button type="button" className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-xl px-6 py-4 md:py-0 font-bold transition-all duration-200 shadow-lg shadow-blue-600/20 flex items-center justify-center md:aspect-square">
                  <Search size={24} />
                </button>
              </form>
            </div>

            {/* Preuves sociales */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-lg border border-green-100 text-green-700">
                <ShieldCheck size={16} />
                <span>Assurance incluse</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center overflow-hidden">
                       <div className={`w-full h-full bg-slate-${i * 100 + 200}`}></div> {/* Placeholder avatars */}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-slate-900">+500 conducteurs</span>
                  <span className="text-xs">nous font confiance</span>
                </div>
              </div>
            </div>

          </div>

          {/* --- COLONNE DE DROITE : IMAGE IMMERSIVE --- */}
          <div className="lg:col-span-6 relative h-[400px] lg:h-full w-full hidden lg:block">
            {/* Conteneur Image avec une forme un peu moins carrée pour le style */}
            <div className="absolute inset-0 lg:-right-[20%] lg:w-[120%] lg:h-full overflow-hidden rounded-l-[3rem]">
              <div className="relative w-full h-full">
                <Image
                  src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80"
                  alt="Voiture électrique en charge"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient pour la lisibilité sur les bords */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-transparent to-transparent lg:w-1/3"></div>
              </div>
            </div>

            {/* Carte Flottante "Revenu" - Repositionnée pour l'équilibre */}
            <div className="absolute bottom-20 left-10 lg:left-0 bg-white/95 backdrop-blur shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-5 rounded-2xl border border-white/50 animate-[bounce_4s_infinite]">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-3 rounded-xl text-white shadow-lg shadow-green-500/30">
                  <Zap size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Revenu estimé</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-slate-900">162€</span>
                    <span className="text-sm font-medium text-slate-400">/mois</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full w-fit">
                    <Star size={10} fill="currentColor" />
                    <span>Top Host</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Mobile Image (Visible uniquement sur mobile en bas) */}
       <div className="lg:hidden w-full h-64 relative mt-8">
          <Image
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80"
            alt="Voiture"
            fill
            className="object-cover rounded-t-[2rem]"
          />
       </div>

    </section>
  );
}