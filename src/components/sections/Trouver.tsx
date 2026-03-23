"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Features() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} id="trouver" className="py-14 px-6 lg:px-20 bg-white scroll-mt-20" style={{ scrollMarginTop: "5rem" }}>
      <div id="comment-ca-marche" className="max-w-7xl mx-auto">

        {/* EN-TÊTE : CONSTAT + SOLUTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-end">
          <div ref={addToRefs}>
            <span className="text-[#4A7C44] font-bold tracking-widest uppercase text-xs">Le constat</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 text-zinc-900 leading-tight">
              Les bornes publiques ne suffisent plus.
            </h2>
            <p className="mt-4 text-zinc-500 text-base leading-relaxed">
              Le nombre de véhicules électriques augmente chaque année. Les bornes publiques, elles, sont souvent occupées, coûteuses ou trop éloignées.
            </p>
          </div>
          <div ref={addToRefs} className="bg-[#4A7C44]/5 p-7 rounded-[2rem] border border-[#4A7C44]/10">
            <p className="text-lg text-zinc-700 leading-relaxed">
              <span className="font-bold text-[#4A7C44]">La solution :</span> une communauté locale de particuliers qui partagent leur borne. Rechargez près de chez vous, à prix local, grâce à vos voisins.
            </p>
          </div>
        </div>

        {/* 3 ÉTAPES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <div ref={addToRefs} className="group p-7 rounded-[2rem] bg-[#F9FAF9] border border-transparent hover:border-[#4A7C44]/20 transition-all duration-500">
            <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 transition-transform">
              <span className="text-[#4A7C44] font-bold text-sm">01</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Inscrivez-vous</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Rejoignez la communauté en quelques clics, que vous soyez conducteur ou propriétaire d'une borne.</p>
          </div>

          <div ref={addToRefs} className="group p-7 rounded-[2rem] bg-[#F9FAF9] border border-transparent hover:border-[#4A7C44]/20 transition-all duration-500">
            <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-5 group-hover:scale-110 transition-transform">
              <span className="text-[#4A7C44] font-bold text-sm">02</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Soyez mis en relation</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Nous vous connectons avec les bornes disponibles dans votre quartier, dès le lancement.</p>
          </div>

          <div ref={addToRefs} className="group p-7 rounded-[2rem] bg-[#4A7C44] text-white shadow-xl shadow-[#4A7C44]/20">
            <div className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center mb-5">
              <span className="text-white font-bold text-sm">03</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Rechargez</h3>
            <p className="text-white/80 text-sm leading-relaxed">Rechargez votre véhicule à prix local, chez un particulier près de chez vous.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
