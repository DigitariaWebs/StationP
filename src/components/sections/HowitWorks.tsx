"use client";
import React, { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Shield, Loader2, Zap, User } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTranslation } from "@/i18n/LanguageProvider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function InscriptionSection() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("driver");
  const isHost = userType === "host";

  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  const sideTitle = isHost ? t.inscription.sideTitleHost : t.inscription.sideTitleDriver;
  const sideDescription = isHost ? t.inscription.sideDescHost : t.inscription.sideDescDriver;
  const sideBenefits = isHost ? t.inscription.benefitsHost : t.inscription.benefitsDriver;

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
    formData.append(
      "type_utilisateur",
      userType === "driver" ? t.inscription.typeDriver : t.inscription.typeHost
    );

    try {
      const response = await fetch("https://formsubmit.co/ajax/elhoudaifi.soufian@gmail.com", {
        method: "POST",
        body: formData,
      });
      if (response.ok) setSubmitted(true);
      else alert(t.inscription.errorGeneric);
    } catch {
      alert(t.inscription.errorConnection);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={sectionRef} id="inscription" className="py-10 lg:py-16 px-6 lg:px-20 bg-[#f4f9f4]">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <span className="inline-block text-[#4A7C44] font-bold tracking-widest uppercase text-[10px] mb-4">
            {t.inscription.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 leading-tight">
            {t.inscription.title}
          </h2>
          <p className="mt-3 text-zinc-500 text-base max-w-md mx-auto leading-relaxed">
            {t.inscription.intro}
          </p>
        </div>

        <div ref={cardRef} className="bg-white rounded-4xl overflow-hidden shadow-sm border border-zinc-100">

          {submitted ? (
            <div className="py-16 text-center px-8">
              <div className="w-16 h-16 bg-[#4A7C44] rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#4A7C44]/20">
                <CheckCircle2 size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-zinc-900 mb-3">{t.inscription.successTitle}</h3>
              <p className="text-zinc-500 text-base max-w-sm mx-auto leading-relaxed">
                {t.inscription.successDesc}
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
                    {sideTitle}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-8">
                    {sideDescription}
                  </p>
                </div>

                <div className="space-y-4">
                  {sideBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/80 text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panneau droite : formulaire */}
              <div className="lg:col-span-3 p-8 lg:p-10">

                <div className="flex flex-col sm:flex-row p-1.5 gap-1.5 sm:gap-0 bg-zinc-100 rounded-2xl mb-6">
                  <button
                    type="button"
                    onClick={() => setUserType("driver")}
                    className={`flex-1 flex items-center justify-start sm:justify-center gap-2 px-3 sm:px-0 py-3 rounded-xl text-[13px] sm:text-sm font-bold transition-all ${
                      userType === "driver" ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700"
                    }`}
                  >
                    <User size={15} /> {t.inscription.toggleDriver}
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType("host")}
                    className={`flex-1 flex items-center justify-start sm:justify-center gap-2 px-3 sm:px-0 py-3 rounded-xl text-[13px] sm:text-sm font-bold transition-all ${
                      userType === "host" ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700"
                    }`}
                  >
                    <Zap size={15} /> {t.inscription.toggleHost}
                  </button>
                </div>

                <p className="text-xs text-zinc-500 mb-4 leading-relaxed">
                  {isHost ? t.inscription.descHost : t.inscription.descDriver}
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      name="nom"
                      placeholder={t.inscription.placeholders.name}
                      required
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#4A7C44] focus:ring-1 focus:ring-[#4A7C44] transition-all text-sm text-zinc-900 placeholder:text-zinc-400 placeholder:opacity-100"
                    />
                    <input
                      name="telephone"
                      placeholder={t.inscription.placeholders.phone}
                      type="tel"
                      required
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#4A7C44] focus:ring-1 focus:ring-[#4A7C44] transition-all text-sm text-zinc-900 placeholder:text-zinc-400 placeholder:opacity-100"
                    />
                  </div>

                  <input
                    name="email"
                    placeholder={t.inscription.placeholders.email}
                    type="email"
                    required
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#4A7C44] focus:ring-1 focus:ring-[#4A7C44] transition-all text-sm text-zinc-900 placeholder:text-zinc-400 placeholder:opacity-100"
                  />

                  <input
                    name="code_postal"
                    placeholder={t.inscription.placeholders.postal}
                    required
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#4A7C44] focus:ring-1 focus:ring-[#4A7C44] transition-all text-sm text-zinc-900 placeholder:text-zinc-400 placeholder:opacity-100"
                  />

                  {userType === "host" && (
                    <input
                      name="info_borne"
                      placeholder={t.inscription.placeholders.terminal}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3.5 outline-none focus:border-[#4A7C44] focus:ring-1 focus:ring-[#4A7C44] transition-all text-sm text-zinc-900 placeholder:text-zinc-400 placeholder:opacity-100"
                    />
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#4A7C44] hover:bg-zinc-900 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#4A7C44]/10 active:scale-[0.98] disabled:opacity-50 mt-2"
                  >
                    {loading ? (
                      <><Loader2 className="animate-spin" size={16} /> {t.inscription.sending}</>
                    ) : (
                      <>{userType === "driver" ? t.inscription.submitDriver : t.inscription.submitHost} <ArrowRight size={16} /></>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-zinc-400 pt-1">
                    {t.inscription.consent}
                  </p>
                </form>

                <div className="flex items-center justify-center gap-2 mt-5 text-zinc-400">
                  <Shield size={13} />
                  <span className="text-[11px] font-medium">{t.inscription.privacy}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
