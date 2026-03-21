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
      // Animation des cartes au scroll
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
    <section ref={sectionRef} id="trouver" className="py-20 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* EN-TÊTE DE SECTION - FUSION CONSTAT/SOLUTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-end">
          <div ref={addToRefs}>
            <span className="text-[#4A7C44] font-bold tracking-widest uppercase text-sm">Le Constat</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 text-zinc-900 leading-tight">
              Trouver une borne publique est devenu un défi quotidien.
            </h2>
          </div>
          <div ref={addToRefs} className="bg-[#4A7C44]/5 p-8 rounded-[2rem] border border-[#4A7C44]/10">
            <p className="text-lg text-zinc-700 leading-relaxed">
              <span className="font-bold text-[#4A7C44]">La Solution :</span> Une communauté locale qui permet de partager sa borne, réduire les coûts et recharger sereinement juste à côté de chez soi.
            </p>
          </div>
        </div>

        {/* COMMENT ÇA MARCHE - VERSION COMPACTE (3 ÉTAPES) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* ÉTAPE 1 */}
          <div ref={addToRefs} className="group p-8 rounded-[2rem] bg-[#F9FAF9] border border-transparent hover:border-[#4A7C44]/20 transition-all duration-500">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
              <span className="text-[#4A7C44] font-bold">01</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Inscrivez-vous</h3>
            <p className="text-zinc-600">Rejoignez la communauté en quelques clics, que vous soyez conducteur ou hôte.</p>
          </div>

          {/* ÉTAPE 2 */}
          <div ref={addToRefs} className="group p-8 rounded-[2rem] bg-[#F9FAF9] border border-transparent hover:border-[#4A7C44]/20 transition-all duration-500">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
              <span className="text-[#4A7C44] font-bold">02</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Trouvez une borne</h3>
            <p className="text-zinc-600">Accédez à la carte des bornes privées disponibles autour de votre position.</p>
          </div>

          {/* ÉTAPE 3 */}
          <div ref={addToRefs} className="group p-8 rounded-[2rem] bg-[#4A7C44] text-white shadow-xl shadow-[#4A7C44]/20">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-white font-bold">03</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Rechargez</h3>
            <p className="text-white/80">Branchez votre véhicule à prix local et profitez de l'entraide entre voisins.</p>
          </div>

        </div>

        {/* PETIT RÉSUMÉ "CONSTAT" SOUS FORME DE STATS COMPACTES POUR VALIDER LE BESOIN */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 lg:gap-20 border-t border-zinc-100 pt-16">
          <div ref={addToRefs} className="text-center">
            <div className="text-3xl font-bold text-zinc-900">+50%</div>
            <div className="text-sm text-zinc-500 uppercase tracking-wide">de véhicules VE / an</div>
          </div>
          <div ref={addToRefs} className="text-center">
            <div className="text-3xl font-bold text-zinc-900">Souvent</div>
            <div className="text-sm text-zinc-500 uppercase tracking-wide">occupées ou coûteuses</div>
          </div>
          <div ref={addToRefs} className="text-center">
            <div className="text-3xl font-bold text-zinc-900">100%</div>
            <div className="text-sm text-zinc-500 uppercase tracking-wide">Entraide locale</div>
          </div>
        </div>

      </div>
    </section>
  );
}