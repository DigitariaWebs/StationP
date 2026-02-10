"use client";

import { useState } from "react";
import { Search, CreditCard, Zap, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function HowItWorks() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulation API
      setTimeout(() => setSubmitted(true), 500);
    }
  };

  const steps = [
    {
      step: "01",
      title: "Trouvez",
      desc: "Géolocalisez les bornes privées disponibles autour de vous via notre carte interactive.",
      icon: Search,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      step: "02",
      title: "Réservez",
      desc: "Sélectionnez votre créneau et payez via l'app. Le propriétaire reçoit une notif instantanée.",
      icon: CreditCard,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-100"
    },
    {
      step: "03",
      title: "Chargez",
      desc: "Garez-vous, branchez. L'électricité coule, et vous payez moins cher qu'une borne publique.",
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-50",
      border: "border-amber-100"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="relative mb-24 max-w-3xl mx-auto text-center">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <h2 className="relative text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Charger sa voiture, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">c'est simple comme bonjour.</span>
          </h2>
          <p className="relative text-slate-500 text-lg md:text-xl leading-relaxed">
            Fini le stress des bornes publiques en panne. Rejoignez le réseau de confiance.
          </p>
        </div>

        {/* GRILLE DES ÉTAPES (Effet décalé "Staggered") */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-32 relative">
          
          {/* Ligne pointillée de connexion (Visible uniquement sur grand écran) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 -z-10 transform -translate-y-1/2"></div>

          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-all duration-300 group
                ${idx === 1 ? 'md:mt-12' : ''} /* C'est ICI qu'on casse la symétrie IA */
              `}
            >
              {/* Numéro Géant en Arrière-plan */}
              <span className="absolute -top-6 -right-4 text-9xl font-black text-slate-50 select-none -z-10 group-hover:text-slate-100 transition-colors">
                {item.step}
              </span>

              {/* Icône */}
              <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-8 ring-4 ring-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={32} strokeWidth={2.5} />
              </div>

              {/* Contenu */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* GROS CTA / BANNIÈRE */}
        <div className="relative rounded-[3rem] bg-slate-900 overflow-hidden">
          {/* Décoration Background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[80px] -ml-20 -mb-20"></div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 p-8 md:p-16 items-center">
            
            {/* Texte Gauche */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-200 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-500/30">
                <Sparkles size={12} />
                <span>Lancement Imminent</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Prêt à brancher <br/> votre quartier ?
              </h3>
              <p className="text-slate-300 text-lg mb-8 max-w-lg">
                Que vous soyez conducteur ou propriétaire, l'inscription prend moins de 2 minutes. Soyez les premiers informés.
              </p>
              
              <div className="flex flex-wrap gap-4">
                 <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center gap-2 group">
                   Je cherche une borne
                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </button>
                 <button className="px-8 py-4 rounded-xl font-bold text-white border border-white/20 hover:bg-white/10 transition-colors">
                   Je loue ma borne
                 </button>
              </div>
            </div>

            {/* Formulaire Droite (Style Carte de crédit / Glassmorphism) */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl">
              <div className="text-white mb-6">
                <h4 className="font-bold text-xl mb-1">Rejoindre la liste d'attente</h4>
                <p className="text-sm text-slate-300">Recevez une notif quand on ouvre Bruxelles.</p>
              </div>

              {submitted ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-6 text-center animate-in fade-in zoom-in duration-300">
                  <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <p className="text-white font-bold text-lg">C'est noté !</p>
                  <p className="text-green-200 text-sm">On vous recontacte très vite.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="votre@email.com" 
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-600/30 active:scale-95"
                  >
                    M'inscrire maintenant
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-3">
                    En cliquant, vous acceptez nos CGU. 0 spam garanti.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}