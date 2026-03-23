"use client";
import React, { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Shield, Loader2, Zap, User } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function InscriptionSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("driver");

  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    formData.append("type_utilisateur", userType === "driver" ? "Conducteur" : "Propriétaire (Hôte)");

    try {
      const response = await fetch("https://formsubmit.co/ajax/elhoudaifi.soufian@gmail.com", {
        method: "POST",
        body: formData,
      });
      if (response.ok) setSubmitted(true);
      else alert("Une erreur est survenue.");
    } catch {
      alert("Erreur de connexion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={sectionRef} id="inscription" className="py-16 px-6 lg:px-20 bg-[#f4f9f4]">
      <div className="max-w-5xl mx-auto">

        {/* En-tête de section */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#4A7C44] font-bold tracking-widest uppercase text-[10px] mb-4">
            Rejoindre le projet
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 leading-tight">
            Rejoignez les premiers.
          </h2>
          <p className="mt-3 text-zinc-500 text-base max-w-md mx-auto leading-relaxed">
            Inscrivez-vous gratuitement pour accéder en avant-première au réseau local dès le lancement à Bruxelles.
          </p>
        </div>

        {/* Card principale */}
        <div ref={cardRef} className="bg-white rounded-4xl overflow-hidden shadow-sm border border-zinc-100">

          {submitted ? (
            <div className="py-16 text-center px-8">
              <div className="w-16 h-16 bg-[#4A7C44] rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#4A7C44]/20">
                <CheckCircle2 size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-zinc-900 mb-3">C'est envoyé !</h3>
              <p className="text-zinc-500 text-base max-w-sm mx-auto leading-relaxed">
                Bienvenue dans la communauté. Vous faites partie des premiers. On vous recontacte très vite.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-5">

              {/* Panneau gauche vert */}
              <div className="lg:col-span-2 bg-[#4A7C44] p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <Zap size={20} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                    Accès prioritaire au lancement
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-8">
                    En vous inscrivant maintenant, vous êtes parmi les premiers à rejoindre StreetCharge et à bénéficier du réseau local dès son ouverture.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80 text-sm font-medium">Inscription gratuite et sans engagement</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80 text-sm font-medium">Mise en relation avec vos voisins</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80 text-sm font-medium">Recharge à moindre coût, localement</span>
                  </div>
                </div>
              </div>

              {/* Panneau droite : formulaire */}
              <div className="lg:col-span-3 p-8 lg:p-10">

                {/* Toggle */}
                <div className="flex p-1.5 bg-zinc-100 rounded-2xl mb-6">
                  <button
                    type="button"
                    onClick={() => setUserType("driver")}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
                      userType === "driver" ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700"
                    }`}
                  >
                    <User size={15} /> Je cherche à recharger
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType("host")}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
                      userType === "host" ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700"
                    }`}
                  >
                    <Zap size={15} /> J'ai une borne
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      name="nom"
                      placeholder="Nom complet"
                      required
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#4A7C44] focus:ring-1 focus:ring-[#4A7C44] transition-all text-sm"
                    />
                    <input
                      name="telephone"
                      placeholder="Téléphone"
                      type="tel"
                      required
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#4A7C44] focus:ring-1 focus:ring-[#4A7C44] transition-all text-sm"
                    />
                  </div>

                  <input
                    name="email"
                    placeholder="Adresse email"
                    type="email"
                    required
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#4A7C44] focus:ring-1 focus:ring-[#4A7C44] transition-all text-sm"
                  />

                  <input
                    name="code_postal"
                    placeholder="Code postal (ex : 1000)"
                    required
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#4A7C44] focus:ring-1 focus:ring-[#4A7C44] transition-all text-sm"
                  />

                  {userType === "host" && (
                    <input
                      name="info_borne"
                      placeholder="Type de borne (ex : 11kW, 22kW...)"
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#4A7C44] focus:ring-1 focus:ring-[#4A7C44] transition-all text-sm"
                    />
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#4A7C44] hover:bg-zinc-900 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#4A7C44]/10 active:scale-[0.98] disabled:opacity-50 mt-2"
                  >
                    {loading ? (
                      <><Loader2 className="animate-spin" size={16} /> Envoi en cours...</>
                    ) : (
                      <>{userType === "driver" ? "Rejoindre la communauté" : "Proposer ma borne"} <ArrowRight size={16} /></>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-zinc-400 pt-1">
                    En vous inscrivant, vous acceptez d'être recontacté pour le lancement.
                  </p>
                </form>

                {/* Shield reassurance */}
                <div className="flex items-center justify-center gap-2 mt-5 text-zinc-400">
                  <Shield size={13} />
                  <span className="text-[11px] font-medium">Vos données ne sont jamais partagées avec des tiers.</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
