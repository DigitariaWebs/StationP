"use client";

import { useState } from "react";
import { Search, CreditCard, Zap, ArrowRight } from "lucide-react";

export default function Howitworks() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate API call
      console.log("Email submitted:", email);
      setSubmitted(true);
    }
  };

  return (
    <section id="comment-ca-marche" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            3 étapes, <span className="text-blue-600">zéro stress.</span>
          </h2>
          <p className="text-gray-500 text-lg">Recharger sa voiture n'a jamais été aussi convivial.</p>
        </div>

        {/* LES ÉTAPES */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {[
            { 
              step: "01", 
              title: "Trouvez", 
              desc: "Utilisez la carte pour localiser une borne privée disponible selon vos besoins.",
              icon: Search,
              color: "bg-blue-100 text-blue-600"
            },
            { 
              step: "02", 
              title: "Réservez", 
              desc: "Choisissez votre créneau horaire et payez en toute sécurité via l'application.",
              icon: CreditCard,
              color: "bg-purple-100 text-purple-600"
            },
            { 
              step: "03", 
              title: "Chargez", 
              desc: "Arrivez sur place, scannez le QR code et lancez votre session de recharge.",
              icon: Zap,
              color: "bg-yellow-100 text-yellow-600"
            }
          ].map((item, idx) => (
            <div key={idx} className="relative group">
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={32} />
              </div>
              <span className="text-5xl font-black text-gray-100 absolute top-0 right-0 z-0">{item.step}</span>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION APPEL À L'ACTION (CTA / FORMULAIRE) */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">
          {/* Décoration abstraite */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-6">Prêt à rejoindre l'aventure ?</h3>
              <p className="text-blue-100 text-lg mb-8">
                Que vous soyez conducteur à la recherche d'une borne ou propriétaire souhaitant rentabiliser son installation, l'inscription prend moins de 2 minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2">
                  Je cherche une borne
                  <ArrowRight size={20} />
                </button>
                <button className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-4 rounded-full font-bold transition-all">
                  Je loue ma borne
                </button>
              </div>
            </div>

            {/* PETIT FORMULAIRE DE NEWSLETTER / WAITLIST */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <h4 className="text-xl font-bold mb-4">Soyez alerté au lancement</h4>
              <p className="text-blue-100 text-sm mb-6">
                Laissez votre email pour recevoir les emplacements des premières bornes à Bruxelles.
              </p>
              {submitted ? (
                <p className="text-green-500 font-bold">Merci ! Vous êtes inscrit.</p>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white text-slate-900 px-6 py-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-400 text-white py-4 rounded-xl font-black transition-colors uppercase tracking-widest text-sm"
                  >
                    Rejoindre la liste d'attente
                  </button>
                </form>
              )}
              <p className="text-[10px] text-blue-200/50 mt-4 text-center italic">
                Promis, on ne vous enverra pas de spam, juste du courant !
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}