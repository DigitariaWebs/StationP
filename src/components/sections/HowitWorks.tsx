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
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        opacity: 0,
        y: 30,
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
    <section ref={sectionRef} id="inscription" className="py-14 px-6 lg:px-20 bg-[#F9FAF9]">
      <div className="max-w-5xl mx-auto">

        <div ref={formRef} className="bg-white rounded-[2.5rem] p-8 lg:p-14 shadow-sm border border-zinc-100 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-56 h-56 bg-[#4A7C44]/5 rounded-full -mr-28 -mt-28 blur-3xl" />

          {submitted ? (
            <div className="py-10 text-center">
              <div className="w-16 h-16 bg-[#4A7C44] rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#4A7C44]/20">
                <CheckCircle2 size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-3 text-zinc-900">C'est envoyé !</h3>
              <p className="text-zinc-500 text-lg max-w-md mx-auto">
                Merci pour votre intérêt. Vous faites partie des premiers. On vous recontacte très vite avec les prochaines étapes.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

              {/* Texte à gauche */}
              <div>
                <span className="text-[#4A7C44] font-bold tracking-widest uppercase text-xs">Rejoindre le projet</span>
                <h2 className="text-3xl font-bold text-zinc-900 leading-tight mt-3 mb-4">
                  Accédez en avant-première au réseau local.
                </h2>
                <p className="text-zinc-500 text-base mb-7 leading-relaxed">
                  Inscrivez-vous maintenant pour être parmi les premiers à rejoindre la communauté StreetCharge à Bruxelles. C'est gratuit, sans engagement.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-zinc-700 font-medium text-sm">
                    <Shield size={18} className="text-[#4A7C44] shrink-0" /> Inscription gratuite et sans engagement
                  </div>
                  <div className="flex items-center gap-3 text-zinc-700 font-medium text-sm">
                    <Zap size={18} className="text-[#4A7C44] shrink-0" /> Accès prioritaire au lancement
                  </div>
                </div>
              </div>

              {/* Formulaire à droite */}
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">

                {/* Toggle Conducteur / Propriétaire */}
                <div className="flex p-1.5 bg-zinc-100 rounded-2xl mb-5">
                  <button
                    type="button"
                    onClick={() => setUserType("driver")}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
                      userType === "driver" ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700"
                    }`}
                  >
                    <User size={15} /> Conducteur
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType("host")}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
                      userType === "host" ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700"
                    }`}
                  >
                    <Zap size={15} /> Propriétaire
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    name="nom"
                    placeholder="Nom complet"
                    required
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-3.5 outline-none focus:border-[#4A7C44] focus:ring-1 focus:ring-[#4A7C44] transition-all text-sm"
                  />
                  <input
                    name="telephone"
                    placeholder="Téléphone"
                    type="tel"
                    required
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-3.5 outline-none focus:border-[#4A7C44] focus:ring-1 focus:ring-[#4A7C44] transition-all text-sm"
                  />
                </div>

                <input
                  name="email"
                  placeholder="Adresse email"
                  type="email"
                  required
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-3.5 outline-none focus:border-[#4A7C44] focus:ring-1 focus:ring-[#4A7C44] transition-all text-sm"
                />

                <input
                  name="code_postal"
                  placeholder="Code postal (ex: 1000)"
                  required
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-3.5 outline-none focus:border-[#4A7C44] focus:ring-1 focus:ring-[#4A7C44] transition-all text-sm"
                />

                {userType === "host" && (
                  <input
                    name="info_borne"
                    placeholder="Type de borne (ex: 11kW, 22kW...)"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-3.5 outline-none focus:border-[#4A7C44] focus:ring-1 focus:ring-[#4A7C44] transition-all text-sm"
                  />
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#4A7C44] hover:bg-zinc-900 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#4A7C44]/10 active:scale-[0.98] disabled:opacity-50"
                >
                  {loading ? (
                    <><Loader2 className="animate-spin" size={18} /> Envoi en cours...</>
                  ) : (
                    <>{userType === "driver" ? "Rejoindre la communauté" : "Proposer ma borne"} <ArrowRight size={18} /></>
                  )}
                </button>

                <p className="text-center text-xs text-zinc-400 mt-2">
                  En vous inscrivant, vous acceptez d'être recontacté pour le lancement du projet.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
