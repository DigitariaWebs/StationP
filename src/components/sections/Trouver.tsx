import { MapPin, Sliders, Zap, Navigation } from 'lucide-react';

export default function Features() {
  return (
    <section id="trouver-une-borne" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* COLONNE GAUCHE : VISUEL CARTE (Mockup CSS) */}
          <div className="relative">
            {/* Fond Carte Stylisé */}
            <div className="aspect-square bg-slate-200 rounded-3xl overflow-hidden relative shadow-2xl border-4 border-white">
              {/* Simulation de rues (Lignes CSS) */}
              <div className="absolute top-0 left-1/4 w-4 h-full bg-slate-100 transform -skew-x-12"></div>
              <div className="absolute top-1/3 left-0 w-full h-4 bg-slate-100 transform skew-y-6"></div>
              <div className="absolute bottom-1/4 right-0 w-2/3 h-4 bg-slate-100 transform -skew-y-3"></div>
              
              {/* PINS (Points de recharge) */}
              {/* Pin 1 (Actif) */}
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-4 bg-blue-500/20 rounded-full animate-ping"></div>
                  <div className="bg-slate-900 text-white p-3 rounded-xl shadow-lg relative z-10 flex items-center gap-2 hover:scale-110 transition-transform">
                    <Zap size={16} fill="currentColor" className="text-yellow-400" />
                    <span className="font-bold text-sm">0,35€</span>
                  </div>
                  {/* Tooltip au survol */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity w-32 text-center pointer-events-none">
                    <p className="text-xs font-bold text-slate-900">Disponible</p>
                    <p className="text-[10px] text-gray-500">Ixelles • 11kW</p>
                  </div>
                </div>
              </div>

              {/* Autres Pins (Décoratifs) */}
              <div className="absolute top-20 right-20 w-3 h-3 bg-slate-400 rounded-full"></div>
              <div className="absolute bottom-32 left-20 w-3 h-3 bg-slate-400 rounded-full"></div>
              <div className="absolute bottom-10 right-1/3 w-3 h-3 bg-green-500 rounded-full ring-4 ring-white shadow-lg"></div>
            </div>

            {/* Carte Flottante "Statut" */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-xs animate-bounce-slow">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Zap size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Statut réseau</p>
                <p className="text-sm font-bold text-slate-900">54 bornes libres à Bruxelles</p>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : TEXTE */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6">
              <MapPin size={14} />
              Réseau Bruxelles
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              Plus de bornes. <br />
              <span className="text-blue-600">Moins de détours.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Accédez aux bornes cachées dans les allées privées et les garages de votre quartier. 
              Filtrez par puissance, type de prise et prix en temps réel.
            </p>

            <ul className="space-y-6">
              {[
                { title: 'Géolocalisation précise', desc: 'Trouvez la borne la plus proche à moins de 2 min.', icon: Navigation },
                { title: 'Filtres avancés', desc: 'Type 2, CCS, Prise domestique... ne voyez que ce qui vous convient.', icon: Sliders },
                { title: 'Réservation instantanée', desc: 'Réservez votre créneau. La borne vous attend.', icon: Zap },
              ].map((item, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-600">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}