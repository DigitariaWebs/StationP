'use client';

import Image from 'next/image';
import { Home, Zap, Users, ArrowRight, CheckCircle2, Shield, MapPin, Mail, Phone, Loader2, Sparkles } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export default function TrouverSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState('driver');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append('type_utilisateur', userType === 'driver' ? 'Conducteur' : 'Propriétaire (Hôte)');
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/elhoudaifi.soufian@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Une erreur est survenue.');
      }
    } catch (error) {
      console.error(error);
      alert('Erreur de connexion.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="trouveruneborne" className="bg-white text-zinc-900 relative w-full overflow-hidden py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        
        {/* EN-TÊTE */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tighter uppercase italic leading-[1] mb-3">
            Rejoignez une <span className="text-[#A3E635] not-italic">communauté locale</span> de conducteurs
          </h2>
          <p className="text-sm sm:text-base text-zinc-500 max-w-2xl font-medium">
            Partagez vos bornes de recharge entre voisins et rechargez à moindre coût près de chez vous.
          </p>
        </div>

        {/* CONTENU PRINCIPAL EN 2 COLONNES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* COLONNE GAUCHE: CONSTAT + SOLUTION + PROCESS */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* CONSTAT */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-black uppercase tracking-widest mb-3 text-zinc-400">
                Constat
              </h3>
              <ul className="space-y-2 text-sm text-zinc-600 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-[#A3E635] font-black">•</span>
                  <span>Augmentation rapide des véhicules électriques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A3E635] font-black">•</span>
                  <span>Peu de bornes publiques disponibles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A3E635] font-black">•</span>
                  <span>Bornes souvent occupées ou coûteuses</span>
                </li>
              </ul>
            </div>

            {/* SOLUTION */}
            <div className="bg-[#A3E635] rounded-2xl p-5 sm:p-6 text-black flex flex-col sm:flex-row gap-4 items-center overflow-hidden">
              <div className="flex-1 w-full">
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Zap size={20} className="fill-black" /> Solution
                </h3>
                <p className="text-sm font-bold mb-3 uppercase tracking-tight">
                  Une communauté locale qui permet de :
                </p>
                <ul className="space-y-1.5 text-sm font-bold">
                  <li className="flex items-center gap-2">
                    <div className="bg-white text-black p-1.5 rounded-full shadow-sm"><Home size={14} /></div>
                    partager sa borne de recharge
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-white text-black p-1.5 rounded-full shadow-sm"><Users size={14} /></div>
                    recharger près de chez soi
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="bg-white text-black p-1.5 rounded-full shadow-sm"><Zap size={14} className="fill-black" /></div>
                    recharger à moindre coût
                  </li>
                </ul>
              </div>

              <div className="block w-full sm:w-1/3 relative rounded-xl overflow-hidden border-2 border-white h-32 sm:h-40 shrink-0">
                <Image 
                  src="/1.png" 
                  alt="Borne recharge" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>

            {/* COMMENT ÇA MARCHE */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white border border-zinc-200 p-4 rounded-xl flex flex-col items-center text-center">
                <div className="w-10 h-10 relative mb-2">
                  <Image src="/icon11.png" alt="Inscription" fill className="object-contain" />
                </div>
                <p className="text-xs font-bold uppercase">Inscrivez-vous</p>
              </div>
              <div className="bg-white border border-zinc-200 p-4 rounded-xl flex flex-col items-center text-center">
                <div className="w-10 h-10 relative mb-2">
                  <Image src="/icon22.png" alt="Trouver" fill className="object-contain" />
                </div>
                <p className="text-xs font-bold uppercase">Trouvez une borne</p>
              </div>
              <div className="bg-white border border-zinc-200 p-4 rounded-xl flex flex-col items-center text-center">
                <div className="w-10 h-10 relative mb-2">
                  <Image src="/icon33.png" alt="Recharge" fill className="object-contain" />
                </div>
                <p className="text-xs font-bold uppercase">Rechargez</p>
              </div>
            </div>

          </div>

          {/* COLONNE DROITE: FORMULAIRE */}
          <div className="lg:col-span-5" id="inscription">
            <div className="bg-white border border-zinc-200 p-5 sm:p-6 rounded-2xl shadow-lg sticky top-20">
              
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="w-14 h-14 bg-[#A3E635] rounded-2xl flex items-center justify-center mx-auto mb-4 rotate-6">
                    <CheckCircle2 size={28} className="text-black" />
                  </div>
                  <h3 className="text-xl font-black mb-2 uppercase italic">C'est envoyé !</h3>
                  <p className="text-zinc-500 font-bold text-xs uppercase mb-1">Merci de votre intérêt.</p>
                  <p className="text-xs text-zinc-400">On vous recontacte par email.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-zinc-500 bg-zinc-100 border border-zinc-200 mb-3">
                      <Sparkles size={12} className="text-[#A3E635]" /> Rejoignez-nous
                    </div>
                    <h3 className="text-lg sm:text-xl font-black italic uppercase">
                      {userType === 'driver' ? (
                        <>Besoin de <span className="text-[#A3E635]">recharger ?</span></>
                      ) : (
                        <>Une borne à <span className="text-[#A3E635]">partager ?</span></>
                      )}
                    </h3>
                  </div>

                  {/* Toggle User Type */}
                  <div className="flex p-1 bg-zinc-100 rounded-xl border border-zinc-200">
                    <button
                      type="button"
                      onClick={() => setUserType('driver')}
                      className={`flex-1 py-2 rounded-lg text-xs font-black transition-all ${
                        userType === 'driver' ? 'bg-white text-black shadow-sm' : 'text-zinc-400'
                      }`}
                    >
                      CONDUCTEUR
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType('host')}
                      className={`flex-1 py-2 rounded-lg text-xs font-black transition-all ${
                        userType === 'host' ? 'bg-white text-black shadow-sm' : 'text-zinc-400'
                      }`}
                    >
                      PROPRIÉTAIRE
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      name="nom"
                      placeholder="Nom complet"
                      required
                      className="bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-[#A3E635] text-sm font-bold"
                    />
                    <input
                      name="telephone"
                      placeholder="Téléphone"
                      type="tel"
                      required
                      className="bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-[#A3E635] text-sm font-bold"
                    />
                  </div>

                  <input
                    name="email"
                    placeholder="Adresse email"
                    type="email"
                    required
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-[#A3E635] text-sm font-bold"
                  />
                  <input
                    name="code_postal"
                    placeholder="Code postal"
                    required
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-[#A3E635] text-sm font-bold"
                  />

                  {userType === 'host' && (
                    <input
                      name="info_borne"
                      placeholder="Puissance borne (kW)"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-[#A3E635] text-sm font-bold"
                    />
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#A3E635] hover:bg-black hover:text-white text-black font-black py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                  >
                    {loading ? (
                      <><Loader2 className="animate-spin" size={16} /> ENVOI...</>
                    ) : (
                      <>{userType === 'driver' ? 'REJOINDRE' : 'PROPOSER MA BORNE'} <ArrowRight size={16} /></>
                    )}
                  </button>

                  <div className="flex flex-col gap-2 pt-2 text-center">
                    <div className="flex items-center justify-center gap-3 text-xs text-zinc-500 font-medium">
                      <div className="flex items-center gap-1"><CheckCircle2 size={14} className="text-[#A3E635]" /> Bornes certifiées</div>
                      <div className="flex items-center gap-1"><Shield size={14} className="text-[#A3E635]" /> Paiement sécurisé</div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
