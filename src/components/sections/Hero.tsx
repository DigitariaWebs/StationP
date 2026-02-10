import Image from 'next/image';
import { Search, MapPin, Calendar, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          
          <main className="mt-4 mx-auto max-w-7xl px-4 sm:mt-6 sm:px-6 md:mt-8 lg:mt-10 lg:px-8 xl:mt-14">
            <div className="sm:text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
                  Nouveau à Bruxelles
                </span>
              </div>

              <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">La recharge électrique,</span>{' '}
                <span className="block text-blue-600">entre voisins.</span>
              </h1>
              
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                L'Airbnb des bornes de recharge. Accédez au réseau privé le plus dense de Belgique ou <span className="font-bold text-slate-900">gagnez jusqu'à 160€/mois</span> en louant votre borne.
              </p>

              <div className="mt-8 bg-white p-2 rounded-2xl shadow-xl border border-gray-100 max-w-lg lg:mx-0 mx-auto">
                <form className="flex flex-col gap-2">
                  
                  <div className="relative flex items-center bg-gray-50 rounded-xl px-4 py-3 group focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-600 transition-all">
                    <MapPin className="text-gray-400 group-focus-within:text-blue-600 mr-3" size={20} />
                    <div className="flex-1">
                      <label htmlFor="location" className="block text-xs font-bold text-gray-500 uppercase">Où allez-vous ?</label>
                      <input 
                        type="text" 
                        id="location"
                        placeholder="Bruxelles, Ixelles, Uccle..." 
                        className="w-full bg-transparent outline-none text-slate-900 font-semibold placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="relative flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-3 group focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-600 transition-all">
                      <Calendar className="text-gray-400 group-focus-within:text-blue-600 mr-3" size={20} />
                      <div className="flex-1">
                        <label className="block text-xs font-bold text-gray-500 uppercase">Quand ?</label>
                        <input type="text" placeholder="Maintenant" className="w-full bg-transparent outline-none text-slate-900 font-semibold" />
                      </div>
                    </div>

                    {/* BOUTON RECHERCHER */}
                    <button type="button" className="bg-blue-600 hover:bg-slate-900 text-white rounded-xl px-6 py-3 font-bold transition-colors flex items-center justify-center shadow-lg shadow-blue-200">
                      <Search size={24} />
                    </button>
                  </div>
                </form>
              </div>

              {/* Éléments de confiance */}
              <div className="mt-6 flex items-center gap-6 justify-center lg:justify-start text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-green-500" />
                  <span>Assurance incluse</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white"></div>
                  </div>
                  <span>+500 conducteurs</span>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
      
      {/* IMAGE DE DROITE (Desktop) */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 p-4 lg:p-6">
        <div className="relative h-80 w-full sm:h-96 md:h-[28rem] lg:w-full lg:h-full overflow-hidden rounded-2xl lg:rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80"
            alt="Voiture électrique en charge"
            fill
            style={{ objectFit: 'cover' }}
          />
          
          {/* Carte Flottante "Revenu" (Animation marketing) */}
          <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white hidden lg:block animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <Zap size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Revenu estimé</p>
                <p className="text-xl font-black text-slate-900">162,00 € <span className="text-xs font-normal text-gray-500">/mois</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}