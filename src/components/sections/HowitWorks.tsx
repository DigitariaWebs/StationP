'use client';

import { useState } from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Zap, Users, Shield, MapPin, Mail, Phone, Loader2 } from 'lucide-react';

export default function AccessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // État pour le chargement
  const [userType, setUserType] = useState('driver');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    // On ajoute le type d'utilisateur manuellement car ce n'est pas un input standard
    formData.append("type_utilisateur", userType === 'driver' ? "Conducteur" : "Propriétaire (Hôte)");
    
    // Configuration pour FormSubmit (pour rediriger vers votre email sans backend)
    // _subject: Le sujet du mail que vous recevrez
    // _template: Le format (table pour la lisibilité)
    formData.append("_subject", `Nouveau contact StreetCharge : ${userType}`);
    formData.append("_template", "table");
    formData.append("_captcha", "false"); // Désactive le captcha pour fluidifier (optionnel)

    try {
      const response = await fetch("https://formsubmit.co/ajax/elhoudaifi.soufian@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Une erreur est survenue. Merci de réessayer.");
      }
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      alert("Erreur de connexion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main id="howitworks" className="min-h-screen bg-[#1B1F24] text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 overflow-hidden relative">
      
      {/* SVG décoratif */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30 sm:opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 1440 1000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 0 C 400 300, 900 600, 1600 900" stroke="#00F5A0" strokeWidth="1.5" strokeOpacity="0.18" strokeDasharray="5 5" />
          <path d="M-100 100 C 350 400, 850 650, 1600 1000" stroke="#00F5A0" strokeWidth="1" strokeOpacity="0.10" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center">
          
          {/* Colonne gauche - TEXTE */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold text-gray-300 bg-white/5 border border-white/10">
              <Sparkles size={14} className="text-[#00F5A0]" /> Rejoignez l'aventure
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight lg:leading-[1.1] tracking-tight text-white">
              {userType === 'driver' ? (
                <>Besoin de <br className="hidden sm:block" /><span className="text-[#00F5A0]">recharger ?</span></>
              ) : (
                <>Une borne <br className="hidden sm:block" /><span className="text-[#00F5A0]">à partager ?</span></>
              )}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {userType === 'driver' 
                ? "Trouvez une borne près de chez vous et rechargez en toute simplicité."
                : "Mettez votre borne à disposition et générez des revenus."}
            </p>

            {/* Avantages */}
            <div className="flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-4 items-center lg:items-start">
              <div className="flex items-center gap-3 text-white font-bold text-sm sm:text-base">
                <CheckCircle2 className="text-[#00F5A0] flex-shrink-0" size={20} />
                <span>Bornes privées certifiées</span>
              </div>
              <div className="flex items-center gap-3 text-white font-bold text-sm sm:text-base">
                <Shield className="text-[#00F5A0] flex-shrink-0" size={20} />
                <span>Mise en relation sécurisée</span>
              </div>
              <div className="flex items-center gap-3 text-white font-bold text-sm sm:text-base">
                <Users className="text-[#00F5A0] flex-shrink-0" size={20} />
                <span>Recharge entre voisins</span>
              </div>
            </div>
          </div>

          {/* Colonne droite - FORMULAIRE */}
          <div className="lg:col-span-6">
            <div className="bg-[#1B1F24] border-2 sm:border-4 border-white p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-[2.5rem] shadow-[5px_5px_0px_0px_rgba(255,255,255,0.06)] sm:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.06)]">
              
              {submitted ? (
                <div className="py-8 sm:py-12 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border-2 border-white rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 rotate-3">
                    <CheckCircle2 size={30} className="sm:w-10 sm:h-10 text-black" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black mb-2 text-white">INSCRIPTION REÇUE !</h3>
                  <p className="text-sm sm:text-base text-gray-300 font-bold mb-6">Merci de votre intérêt !</p>
                  <p className="text-xs text-white/40">Un email de confirmation vous sera envoyé.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  
                  {/* Toggle Type d'utilisateur */}
                  <div className="flex p-1 bg-gray-800 rounded-xl border-2 border-white">
                    <button
                      type="button"
                      onClick={() => setUserType('driver')}
                      className={`flex-1 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-black transition-all ${
                        userType === 'driver' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      CONDUCTEUR
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType('host')}
                      className={`flex-1 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-black transition-all ${
                        userType === 'host' ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      PROPRIÉTAIRE
                    </button>
                  </div>

                  {/* Champs formulaire */}
                  <div className="space-y-3 sm:space-y-4">
                    
                    {/* Nom */}
                    <div className="relative">
                      <input 
                        required
                        name="nom"
                        type="text" 
                        placeholder="Nom complet"
                        className="w-full bg-[#1B1F24] border-2 border-white rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:bg-white/10 transition-all text-white font-bold text-sm sm:text-base"
                      />
                    </div>
                    
                    {/* Email */}
                    <div className="relative">
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="Adresse email"
                        className="w-full bg-[#1B1F24] border-2 border-white rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:bg-white/10 transition-all text-white font-bold text-sm sm:text-base"
                      />
                      <Mail size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[#00F5A0]" />
                    </div>
                    
                    {/* Téléphone */}
                    <div className="relative">
                      <input 
                        required
                        name="telephone"
                        type="tel" 
                        placeholder="Téléphone"
                        pattern="[0-9\s\+]+"
                        className="w-full bg-[#1B1F24] border-2 border-white rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:bg-white/10 transition-all text-white font-bold text-sm sm:text-base"
                      />
                      <Phone size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[#00F5A0]" />
                    </div>
                    
                    {/* Code postal */}
                    <div className="relative">
                      <input 
                        required
                        name="code_postal"
                        type="text" 
                        placeholder="Code postal"
                        className="w-full bg-[#1B1F24] border-2 border-white rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:bg-white/10 transition-all text-white font-bold text-sm sm:text-base"
                      />
                      <MapPin size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[#00F5A0]" />
                    </div>
                    
                    {/* Champ supplémentaire pour propriétaire */}
                    {userType === 'host' && (
                      <div className="relative animate-in slide-in-from-top-2 duration-300">
                        <input 
                          required
                          name="info_borne"
                          type="text" 
                          placeholder="Type de borne / Puissance"
                          className="w-full bg-[#1B1F24] border-2 border-[#00F5A0] rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:bg-white/10 transition-all text-white font-bold text-sm sm:text-base"
                        />
                        <Zap size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[#00F5A0]" />
                      </div>
                    )}
                  </div>

                  {/* Bouton submit */}
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-white hover:bg-[#00F5A0] text-black font-black py-4 sm:py-5 rounded-xl transition-all flex items-center justify-center gap-2 sm:gap-3 border-2 border-white active:scale-95 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                       <><Loader2 className="animate-spin" /> ENVOI EN COURS...</>
                    ) : (
                       <>{userType === 'driver' ? "REJOINDRE LA COMMUNAUTÉ" : 'PROPOSER MA BORNE'} <ArrowRight size={18} className="sm:w-5 sm:h-5" /></>
                    )}
                  </button>

                  <p className="text-xs text-center text-white/50">
                    Participation sans engagement • Phase de lancement
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
