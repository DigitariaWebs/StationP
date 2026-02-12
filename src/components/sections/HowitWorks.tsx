'use client';

import { useState } from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export default function AccessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [userType, setUserType] = useState('driver');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 800);
  };

  return (
    <main id="howitworks" className="min-h-screen bg-black text-white px-6 py-20 overflow-hidden relative">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 400 C 200 100, 600 600, 1100 200" stroke="#00F5A0" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold text-gray-300">
              <Sparkles size={14} className="text-[#00F5A0]" /> Accès Prioritaire
            </span>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-white">
              Prêt à rejoindre <br />
              le réseau <span className="text-[#00F5A0] font-black">StationP ?</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Fini l'incertitude. Accédez à un réseau de bornes privées sécurisées et garantissez votre recharge en quelques clics.
            </p>

            <div className="flex flex-col gap-4 pt-4">
              <div className="flex items-center gap-3 text-white font-bold">
                <CheckCircle2 className="text-gray-300" size={20} />
                Bornes certifiées et testées
              </div>
              <div className="flex items-center gap-3 text-white font-bold">
                <ShieldCheck className="text-gray-300" size={20} />
                Paiement sécurisé et transparent
              </div>
            </div>
          </div>

          {/* --- FORMULAIRE DROITE --- */}
          <div className="lg:col-span-6">
            <div className="bg-black border-4 border-white p-8 md:p-10 rounded-[2.5rem] shadow-[10px_10px_0px_0px_rgba(255,255,255,0.06)]">
              {submitted ? (
                  <div className="py-12 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-white border-2 border-white rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3">
                    <CheckCircle2 size={40} className="text-black" />
                  </div>
                  <h3 className="text-3xl font-black mb-2 text-white">DEMANDE ENVOYÉE !</h3>
                  <p className="text-gray-300 font-bold">Nous revenons vers vous sous 24h.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Toggle Type d'utilisateur */}
                  <div className="flex p-1 bg-gray-800 rounded-xl border-2 border-white">
                      <button
                        type="button"
                        onClick={() => setUserType('driver')}
                        className={`flex-1 py-3 rounded-lg text-sm font-black transition-all ${userType === 'driver' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
                      >
                        CONDUCTEUR
                      </button>
                      <button
                        type="button"
                        onClick={() => setUserType('host')}
                        className={`flex-1 py-3 rounded-lg text-sm font-black transition-all ${userType === 'host' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
                      >
                        HÔTE
                      </button>
                    </div>

                  <div className="space-y-4">
                    <input 
                      required
                      type="text" 
                      placeholder="Nom complet"
                      className="w-full bg-black border-2 border-white rounded-xl px-5 py-4 outline-none focus:bg-white/10 transition-all text-white font-bold"
                    />
                    <input 
                      required
                      type="email" 
                      placeholder="Adresse email"
                      className="w-full bg-black border-2 border-white rounded-xl px-5 py-4 outline-none focus:bg-white/10 transition-all text-white font-bold"
                    />
                    <input 
                      required
                      type="text" 
                      placeholder="Ville (ex: Bruxelles)"
                      className="w-full bg-black border-2 border-white rounded-xl px-5 py-4 outline-none focus:bg-white/10 transition-all text-white font-bold"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-white hover:bg-gray-200 text-black font-black py-5 rounded-xl transition-all flex items-center justify-center gap-3 border-2 border-white active:scale-95"
                  >
                    OBTENIR MON ACCÈS <ArrowRight size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}