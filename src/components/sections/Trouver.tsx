'use client';

import Image from 'next/image';
import { Home, Zap, Users, ArrowRight, CheckCircle2, Shield, Loader2, Sparkles } from 'lucide-react';
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
    <section id="trouveruneborne" className="bg-white text-zinc-900 relative w-full overflow-hidden py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">

        {/* ─── EN-TÊTE ─── */}
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tighter uppercase italic leading-[1.05] mb-2">
            Rejoignez une <span className="text-[#A3E635] not-italic">communauté locale</span> de conducteurs
          </h2>
          <p className="text-xs sm:text-base text-zinc-500 max-w-2xl font-medium">
            Partagez vos bornes de recharge entre voisins et rechargez à moindre coût près de chez vous.
          </p>
        </div>

        {/* ─── LAYOUT PRINCIPAL ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">

          {/* ─── COLONNE GAUCHE ─── */}
          <div className="lg:col-span-7 space-y-4">

            {/* CONSTAT — chips horizontaux sur mobile */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 sm:p-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Constat</p>
              {/* Mobile : chips scrollables */}
              <div className="flex sm:hidden gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
                {[
                  'Hausse des VE',
                  'Peu de bornes publiques',
                  'Bornes souvent occupées',
                ].map((item) => (
                  <span
                    key={item}
                    className="shrink-0 inline-flex items-center gap-1.5 bg-white border border-zinc-200 rounded-full px-3 py-2 text-[11px] font-bold text-zinc-700 whitespace-nowrap shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635] shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
              {/* Desktop : liste */}
              <ul className="hidden sm:flex flex-col space-y-2 text-sm text-zinc-600 font-medium">
                <li className="flex items-start gap-2"><span className="text-[#A3E635] font-black">•</span><span>Augmentation rapide des véhicules électriques</span></li>
                <li className="flex items-start gap-2"><span className="text-[#A3E635] font-black">•</span><span>Peu de bornes publiques disponibles</span></li>
                <li className="flex items-start gap-2"><span className="text-[#A3E635] font-black">•</span><span>Bornes souvent occupées ou coûteuses</span></li>
              </ul>
            </div>

            {/* SOLUTION */}
            <div className="bg-[#A3E635] rounded-2xl p-4 sm:p-6 text-black overflow-hidden">
              {/* Mobile layout: image en haut full-width, texte dessous */}
              <div className="block sm:hidden mb-3 relative w-full h-36 rounded-xl overflow-hidden border-2 border-black/10">
                <Image src="/1.png" alt="Borne recharge" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#A3E635]/60 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Solution</p>
                  <h3 className="text-base font-black uppercase italic leading-tight flex items-center gap-1">
                    <Zap size={16} className="fill-black" /> La recharge entre pairs
                  </h3>
                </div>
              </div>

              {/* Desktop layout: côte à côte */}
              <div className="hidden sm:flex gap-4 items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Zap size={20} className="fill-black" /> Solution
                  </h3>
                  <p className="text-sm font-bold mb-3 uppercase tracking-tight">Une communauté locale qui permet de :</p>
                  <ul className="space-y-1.5 text-sm font-bold">
                    <li className="flex items-center gap-2"><div className="bg-white text-black p-1.5 rounded-full shadow-sm"><Home size={14} /></div>partager sa borne de recharge</li>
                    <li className="flex items-center gap-2"><div className="bg-white text-black p-1.5 rounded-full shadow-sm"><Users size={14} /></div>recharger près de chez soi</li>
                    <li className="flex items-center gap-2"><div className="bg-white text-black p-1.5 rounded-full shadow-sm"><Zap size={14} className="fill-black" /></div>recharger à moindre coût</li>
                  </ul>
                </div>
                <div className="w-1/3 relative rounded-xl overflow-hidden border-2 border-white h-40 shrink-0">
                  <Image src="/1.png" alt="Borne recharge" fill className="object-cover" />
                </div>
              </div>

              {/* Mobile : 3 avantages en grid compact sous l'image */}
              <div className="grid grid-cols-3 gap-2 sm:hidden">
                <div className="bg-black/10 rounded-xl p-2.5 flex flex-col items-center text-center gap-1">
                  <div className="bg-white text-black p-1.5 rounded-full"><Home size={13} /></div>
                  <p className="text-[10px] font-black uppercase leading-tight">Partager<br/>sa borne</p>
                </div>
                <div className="bg-black/10 rounded-xl p-2.5 flex flex-col items-center text-center gap-1">
                  <div className="bg-white text-black p-1.5 rounded-full"><Users size={13} /></div>
                  <p className="text-[10px] font-black uppercase leading-tight">Près de<br/>chez soi</p>
                </div>
                <div className="bg-black/10 rounded-xl p-2.5 flex flex-col items-center text-center gap-1">
                  <div className="bg-white text-black p-1.5 rounded-full"><Zap size={13} className="fill-black" /></div>
                  <p className="text-[10px] font-black uppercase leading-tight">Moindre<br/>coût</p>
                </div>
              </div>
            </div>

            {/* COMMENT ÇA MARCHE */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { src: '/icon11.png', label: 'Inscrivez-vous', step: '01' },
                { src: '/icon22.png', label: 'Trouvez une borne', step: '02' },
                { src: '/icon33.png', label: 'Rechargez', step: '03' },
              ].map(({ src, label, step }) => (
                <div key={step} className="bg-white border border-zinc-200 p-3 sm:p-4 rounded-xl flex flex-col items-center text-center relative overflow-hidden">
                  <span className="absolute top-2 right-2.5 text-[10px] font-black text-zinc-200">{step}</span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 relative mb-2">
                    <Image src={src} alt={label} fill className="object-contain" />
                  </div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase leading-tight">{label}</p>
                </div>
              ))}
            </div>

          </div>

          {/* ─── COLONNE DROITE : FORMULAIRE ─── */}
          <div className="lg:col-span-5" id="inscription">
            {/* Sur mobile: séparateur visuel avant le formulaire */}
            <div className="flex items-center gap-3 mb-4 lg:hidden">
              <div className="flex-1 h-px bg-zinc-200" />
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Rejoignez-nous</span>
              <div className="flex-1 h-px bg-zinc-200" />
            </div>

            <div className="bg-white border border-zinc-200 p-4 sm:p-6 rounded-2xl shadow-lg lg:sticky lg:top-20">

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
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="text-center mb-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-zinc-500 bg-zinc-100 border border-zinc-200 mb-2">
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

                  {/* Toggle */}
                  <div className="flex p-1 bg-zinc-100 rounded-xl border border-zinc-200">
                    <button
                      type="button"
                      onClick={() => setUserType('driver')}
                      className={`flex-1 py-2.5 rounded-lg text-xs font-black transition-all ${
                        userType === 'driver' ? 'bg-white text-black shadow-sm' : 'text-zinc-400'
                      }`}
                    >
                      CONDUCTEUR
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType('host')}
                      className={`flex-1 py-2.5 rounded-lg text-xs font-black transition-all ${
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
                    className="w-full bg-[#A3E635] hover:bg-black hover:text-white text-black font-black py-4 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 text-sm"
                  >
                    {loading ? (
                      <><Loader2 className="animate-spin" size={16} /> ENVOI...</>
                    ) : (
                      <>{userType === 'driver' ? 'REJOINDRE' : 'PROPOSER MA BORNE'} <ArrowRight size={16} /></>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 pt-1 text-xs text-zinc-500 font-medium">
                    <div className="flex items-center gap-1"><CheckCircle2 size={13} className="text-[#A3E635]" /> Bornes certifiées</div>
                    <div className="flex items-center gap-1"><Shield size={13} className="text-[#A3E635]" /> Paiement sécurisé</div>
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