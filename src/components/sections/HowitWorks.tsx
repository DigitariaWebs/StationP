'use client';

import { useState, type FormEvent } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Users,
  Shield,
  MapPin,
  Mail,
  Phone,
  Loader2,
} from 'lucide-react';

export default function AccessPage() {
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
    <main
      id="inscription"
      className="scroll-mt-24 bg-white text-zinc-900 px-4 sm:px-6 py-12 sm:py-16 overflow-hidden relative"
    >
      {/* Background Decoratif subtil */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#A3E635]/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* TEXTE GAUCHE */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-zinc-500 bg-zinc-100 border border-zinc-200">
              <Sparkles size={12} className="text-[#A3E635]" /> Rejoignez l'aventure
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-[1] tracking-tighter uppercase italic">
              {userType === 'driver' ? (
                <>Besoin de <br /> <span className="text-[#A3E635] not-italic">recharger ?</span></>
              ) : (
                <>Une borne <br /> <span className="text-[#A3E635] not-italic">à partager ?</span></>
              )}
            </h1>

            <p className="text-sm md:text-base text-zinc-500 font-medium max-w-xl mx-auto lg:mx-0">
              {userType === 'driver'
                ? 'Trouvez une borne privée près de chez vous et rechargez en toute simplicité au meilleur prix.'
                : 'Mettez votre borne à disposition de la communauté et générez des revenus passifs chaque mois.'}
            </p>

            <div className="flex flex-col gap-3 pt-2 items-center lg:items-start">
              <FeatureItem icon={<CheckCircle2 className="text-[#A3E635]" size={18} />} text="Bornes privées certifiées" />
              <FeatureItem icon={<Shield className="text-[#A3E635]" size={18} />} text="Mise en relation sécurisée" />
              <FeatureItem icon={<Users className="text-[#A3E635]" size={18} />} text="Communauté locale active" />
            </div>
          </div>

          {/* FORMULAIRE DROITE */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-zinc-200 p-6 sm:p-8 rounded-2xl shadow-xl shadow-zinc-200/50 relative">
              
              {submitted ? (
                <div className="py-8 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-[#A3E635] rounded-2xl flex items-center justify-center mx-auto mb-4 rotate-6 shadow-lg shadow-[#A3E635]/30">
                    <CheckCircle2 size={32} className="text-black" />
                  </div>
                  <h3 className="text-xl font-black mb-2 uppercase italic tracking-tighter">C'est envoyé !</h3>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-1">Merci de votre intérêt.</p>
                  <p className="text-xs text-zinc-400">On vous recontacte très vite par email.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Toggle User Type */}
                  <div className="flex p-1 bg-zinc-100 rounded-xl border border-zinc-200">
                    <button
                      type="button"
                      onClick={() => setUserType('driver')}
                      className={`flex-1 py-2 rounded-lg text-xs font-black transition-all ${
                        userType === 'driver' ? 'bg-white text-black shadow-sm' : 'text-zinc-400 hover:text-zinc-900'
                      }`}
                    >
                      CONDUCTEUR
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType('host')}
                      className={`flex-1 py-2 rounded-lg text-xs font-black transition-all ${
                        userType === 'host' ? 'bg-white text-black shadow-sm' : 'text-zinc-400 hover:text-zinc-900'
                      }`}
                    >
                      PROPRIÉTAIRE
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <InputField name="nom" placeholder="Nom complet" required />
                    <InputField name="telephone" placeholder="Téléphone" type="tel" required icon={<Phone size={14} />} />
                  </div>

                  <InputField name="email" placeholder="Adresse email" type="email" required icon={<Mail size={14} />} />
                  <InputField name="code_postal" placeholder="Code postal (ex: 1000)" required icon={<MapPin size={14} />} />

                  {userType === 'host' && (
                    <div className="animate-in slide-in-from-top-2 duration-200">
                      <InputField name="info_borne" placeholder="Puissance de la borne (kW)" required icon={<Zap size={14} />} />
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#A3E635] hover:bg-black hover:text-white text-black font-black py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg hover:shadow-none disabled:opacity-50"
                  >
                    {loading ? (
                      <><Loader2 className="animate-spin" /> ENVOI...</>
                    ) : (
                      <>{userType === 'driver' ? 'REJOINDRE LE RÉSEAU' : 'PROPOSER MA BORNE'} <ArrowRight size={16} /></>
                    )}
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

// Sous-composants pour garder le code propre
function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-zinc-900 font-bold text-sm">
      <div className="flex-shrink-0">{icon}</div>
      <span>{text}</span>
    </div>
  );
}

function InputField({ icon, ...props }: any) {
  return (
    <div className="relative group">
      <input
        {...props}
        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:border-[#A3E635] focus:bg-white transition-all text-zinc-900 font-bold text-sm placeholder:text-zinc-300"
      />
      {icon && <div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-[#A3E635] transition-colors">{icon}</div>}
    </div>
  );
}