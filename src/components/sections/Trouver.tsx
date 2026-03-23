"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: "En hausse", label: "De plus en plus de conducteurs passent à l’électrique" },
  { value: "Peu", label: "Trouver une borne publique près de chez soi reste difficile" },
  { value: "Local", label: "Recharger à domicile revient souvent moins cher" },
];

const steps = [
  {
    num: "01",
    title: "Inscrivez-vous",
    desc: "Rejoignez la communauté en quelques clics, que vous soyez conducteur ou propriétaire d'une borne.",
  },
  {
    num: "02",
    title: "Soyez mis en relation",
    desc: "Nous vous connectons avec les bornes disponibles dans votre quartier dès le lancement.",
  },
  {
    num: "03",
    title: "Rechargez",
    desc: "Rechargez votre véhicule à prix local, chez un particulier près de chez vous.",
  },
];

export default function Trouver() {
  const statsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(statsRef.current?.children ?? [], {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
      });
      gsap.from(contentRef.current?.children ?? [], {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: contentRef.current, start: "top 80%" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ─── BANDE STATS SOMBRE ─── */}
      <section className="bg-[#1a3a1f] py-12 px-6 lg:px-20">
        <div ref={statsRef} className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-white/10">
          {stats.map((s, i) => (
            <div key={i} className="text-center sm:px-10 first:pl-0 last:pr-0">
              <div className="text-4xl lg:text-5xl font-black text-white mb-2">{s.value}</div>
              <p className="text-white/50 text-xs leading-relaxed uppercase tracking-wide whitespace-pre-line">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONSTAT / SOLUTION / ÉTAPES ─── */}
      <section id="trouver" className="py-16 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Constat + Solution */}
          <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">

            {/* Constat */}
            <div className="bg-[#f4f9f4] rounded-3xl p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[#4A7C44] font-bold tracking-widest uppercase text-[10px] block mb-4">
                  Le constat
                </span>
                <h2 className="text-2xl lg:text-3xl font-black text-zinc-900 leading-tight mb-4">
                  Les bornes publiques ne suffisent plus.
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Le nombre de véhicules électriques augmente chaque année. Les bornes publiques sont souvent occupées, trop éloignées ou coûteuses. Les conducteurs ont besoin d'une alternative locale et fiable.
                </p>
              </div>
              <div className="mt-8 flex gap-3 flex-wrap">
                {["Bornes rares", "Files d'attente", "Prix élevés"].map((tag) => (
                  <span key={tag} className="text-xs font-bold text-zinc-500 bg-white border border-zinc-200 rounded-full px-3 py-1.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="bg-[#4A7C44] rounded-3xl p-8 lg:p-10 flex flex-col justify-between text-white">
              <div>
                <span className="text-white/60 font-bold tracking-widest uppercase text-[10px] block mb-4">
                  La solution StreetCharge
                </span>
                <h2 className="text-2xl lg:text-3xl font-black leading-tight mb-4">
                  Une communauté locale qui partage.
                </h2>
                <p className="text-white/75 text-sm leading-relaxed">
                  Des particuliers qui ont une borne chez eux partagent l'accès avec leurs voisins. Une mise en relation simple, humaine et locale, pour recharger à moindre coût, près de chez vous.
                </p>
              </div>
              <div className="mt-8 flex gap-3 flex-wrap">
                {["Réseau local", "Prix abordable", "Entraide"].map((tag) => (
                  <span key={tag} className="text-xs font-bold text-white/80 bg-white/10 border border-white/20 rounded-full px-3 py-1.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Comment ça marche */}
          <div id="comment-ca-marche">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-[#4A7C44] font-bold tracking-widest uppercase text-[10px]">Comment ça marche</span>
              <div className="flex-1 h-px bg-zinc-100" />
            </div>

            <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {steps.map((step, i) => (
                <div key={i} className="bg-[#f4f9f4] rounded-3xl p-8 hover:bg-[#edf5ed] transition-colors duration-300">
                  {/* Numéro + ligne vers la droite */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#4A7C44] flex items-center justify-center shrink-0">
                      <span className="text-white font-black text-xs">{step.num}</span>
                    </div>
                    <div className="flex-1 border-t-2 border-dashed border-[#4A7C44]/25 hidden md:block" />
                  </div>
                  <h3 className="text-lg font-black text-zinc-900 mb-3">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
