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
    formData.append('_subject', `Nouveau contact StreetCharge : ${userType}`);
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    try {
      const response = await fetch('https://formsubmit.co/ajax/elhoudaifi.soufian@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Une erreur est survenue. Merci de réessayer.');
      }
    } catch (error) {
      console.error('Erreur d\'envoi:', error);
      alert('Erreur de connexion.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      id="howitworks"
      className="scroll-mt-24 bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14 overflow-hidden relative"
    >
      {/* SVG décoratif */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1440 1000" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 0 C 400 300, 900 600, 1600 900" stroke="rgba(0,245,160,0.35)" strokeWidth="1.5" strokeDasharray="5 5" />
          <path d="M-100 100 C 350 400, 850 650, 1600 1000" stroke="rgba(0,245,160,0.35)" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center">
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold text-[color:var(--color-muted)] bg-[color:var(--color-surface)] border border-[color:var(--color-border)] shadow">
              <Sparkles size={14} className="text-[color:var(--color-accent)]" /> Rejoignez l&apos;aventure
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight lg:leading-[1.1] tracking-tight text-[color:var(--color-foreground)]">
              {userType === 'driver' ? (
                (
                  <>
                    Besoin de <br className="hidden sm:block" />
                    <span className="text-[color:var(--color-accent)]">recharger ?</span>
                  </>
                )
              ) : (
                (
                  <>
                    Une borne <br className="hidden sm:block" />
                    <span className="text-[color:var(--color-accent)]">à partager ?</span>
                  </>
                )
              )}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[color:var(--color-muted)] leading-relaxed max-w-xl mx-auto lg:mx-0">
              {userType === 'driver'
                ? 'Trouvez une borne près de chez vous et rechargez en toute simplicité.'
                : 'Mettez votre borne à disposition et générez des revenus.'}
            </p>

            <div className="flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-4 items-center lg:items-start">
              <div className="flex items-center gap-3 text-[color:var(--color-foreground)] font-bold text-sm sm:text-base">
                <CheckCircle2 className="text-[color:var(--color-accent)] flex-shrink-0" size={20} />
                <span>Bornes privées certifiées</span>
              </div>
              <div className="flex items-center gap-3 text-[color:var(--color-foreground)] font-bold text-sm sm:text-base">
                <Shield className="text-[color:var(--color-accent)] flex-shrink-0" size={20} />
                <span>Mise en relation sécurisée</span>
              </div>
              <div className="flex items-center gap-3 text-[color:var(--color-foreground)] font-bold text-sm sm:text-base">
                <Users className="text-[color:var(--color-accent)] flex-shrink-0" size={20} />
                <span>Communauté locale de conducteurs et d&apos;hôtes</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[color:var(--color-surface)] border border-[color:var(--color-border)] p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-[2.5rem] shadow-lg">
              {submitted ? (
                <div className="py-8 sm:py-12 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border-2 border-white rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 rotate-3">
                    <CheckCircle2 size={30} className="sm:w-10 sm:h-10 text-black" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black mb-2 text-[color:var(--color-foreground)]">INSCRIPTION REÇUE !</h3>
                  <p className="text-sm sm:text-base font-bold mb-6 text-[color:var(--color-muted)]">Merci de votre intérêt !</p>
                  <p className="text-xs text-[color:var(--color-muted)]">Un email de confirmation vous sera envoyé.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="flex p-1 bg-[color:var(--color-surface-muted)] rounded-xl border border-[color:var(--color-border)]">
                    <button
                      type="button"
                      onClick={() => setUserType('driver')}
                      className={`flex-1 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-black transition-all ${
                        userType === 'driver'
                          ? 'bg-[color:var(--color-accent)] text-[color:var(--color-accent-contrast)]'
                          : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)]'
                      }`}
                    >
                      CONDUCTEUR
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType('host')}
                      className={`flex-1 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-black transition-all ${
                        userType === 'host'
                          ? 'bg-[color:var(--color-accent)] text-[color:var(--color-accent-contrast)]'
                          : 'text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)]'
                      }`}
                    >
                      PROPRIÉTAIRE
                    </button>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="relative">
                      <input
                        required
                        name="nom"
                        type="text"
                        placeholder="Nom complet"
                        className="w-full bg-[color:var(--color-surface-muted)] border border-[color:var(--color-border)] rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-[color:var(--color-accent)] transition text-[color:var(--color-foreground)] font-bold text-sm sm:text-base"
                      />
                    </div>

                    <div className="relative">
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="Adresse email"
                        className="w-full bg-[color:var(--color-surface-muted)] border border-[color:var(--color-border)] rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-[color:var(--color-accent)] transition text-[color:var(--color-foreground)] font-bold text-sm sm:text-base"
                      />
                      <Mail size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[color:var(--color-accent)]" />
                    </div>

                    <div className="relative">
                      <input
                        required
                        name="telephone"
                        type="tel"
                        placeholder="Téléphone"
                        pattern="[0-9\s\+]+"
                        className="w-full bg-[color:var(--color-surface-muted)] border border-[color:var(--color-border)] rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-[color:var(--color-accent)] transition text-[color:var(--color-foreground)] font-bold text-sm sm:text-base"
                      />
                      <Phone size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[color:var(--color-accent)]" />
                    </div>

                    <div className="relative">
                      <input
                        required
                        name="code_postal"
                        type="text"
                        placeholder="Code postal"
                        className="w-full bg-[color:var(--color-surface-muted)] border border-[color:var(--color-border)] rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-[color:var(--color-accent)] transition text-[color:var(--color-foreground)] font-bold text-sm sm:text-base"
                      />
                      <MapPin size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[color:var(--color-accent)]" />
                    </div>

                    {userType === 'host' && (
                      <div className="relative animate-in slide-in-from-top-2 duration-300">
                        <input
                          required
                          name="info_borne"
                          type="text"
                          placeholder="Type de borne / Puissance"
                          className="w-full bg-[color:var(--color-surface-muted)] border border-[color:var(--color-accent)] rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-[color:var(--color-accent)] transition text-[color:var(--color-foreground)] font-bold text-sm sm:text-base"
                        />
                        <Zap size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[color:var(--color-accent)]" />
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)]/95 text-[color:var(--color-accent-contrast)] font-black py-4 sm:py-5 rounded-xl transition-all flex items-center justify-center gap-2 sm:gap-3 border-2 border-[color:var(--color-accent)] active:scale-95 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" /> ENVOI EN COURS...
                      </>
                    ) : (
                      <>
                        {userType === 'driver' ? 'REJOINDRE LA COMMUNAUTÉ' : 'PROPOSER MA BORNE'}{' '}
                        <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                      </>
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
