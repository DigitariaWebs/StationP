import { Check, Info } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="tarifs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Tarifs simples. <span className="text-blue-600">Transparents.</span>
        </h2>
        <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
          Pas d'abonnement caché. Pas de frais d'entrée. 
          StationP se rémunère uniquement quand vous rechargez.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* CARTE CONDUCTEUR */}
          <div className="border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-blue-200 transition-all bg-slate-50">
            <div className="text-left mb-6">
              <h3 className="text-xl font-bold text-slate-900">Pour les Conducteurs</h3>
              <p className="text-sm text-slate-500 mt-2">Rechargez moins cher qu'en public.</p>
            </div>
            
            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-black text-slate-900">0€</span>
              <span className="text-xl text-slate-500 ml-2">/mois</span>
            </div>

            <ul className="space-y-4 mb-8 text-left">
              {[
                "Inscription gratuite",
                "Pas d'abonnement mensuel",
                "Prix fixé par l'hôte (souvent ~0.35€/kWh)",
                "Assurance comprise à chaque recharge"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-blue-100 p-1 rounded-full text-blue-600 mt-0.5">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-900 font-bold hover:border-slate-900 hover:bg-slate-50 transition-colors">
              Trouver une borne
            </button>
          </div>

          {/* CARTE HÔTE (Propriétaire) */}
          <div className="relative border-2 border-blue-600 rounded-3xl p-8 shadow-xl bg-white overflow-hidden">
            {/* Badge Populaire */}
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
              POPULAIRE
            </div>

            <div className="text-left mb-6">
              <h3 className="text-xl font-bold text-slate-900">Pour les Hôtes</h3>
              <p className="text-sm text-slate-500 mt-2">Rentabilisez votre installation.</p>
            </div>
            
            <div className="flex items-baseline mb-2">
              <span className="text-5xl font-black text-slate-900">15%</span>
              <span className="text-xl text-slate-500 ml-2">de commission</span>
            </div>
            <p className="text-xs text-left text-gray-400 mb-8">*Uniquement sur les recharges effectuées.</p>

            <ul className="space-y-4 mb-8 text-left">
              {[
                "Vous fixez votre prix",
                "Gestion automatique des paiements (Stripe)",
                "Assurance protection hôte incluse",
                "Support client dédié 7j/7"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full text-green-600 mt-0.5">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-slate-900 transition-colors shadow-lg shadow-blue-200">
              Estimer mes revenus
            </button>
          </div>

        </div>

        {/* Note de bas de page */}
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-500 bg-gray-50 inline-block px-4 py-2 rounded-full">
          <Info size={16} />
          <span>Les paiements sont sécurisés via Stripe Connect.</span>
        </div>

      </div>
    </section>
  );
}