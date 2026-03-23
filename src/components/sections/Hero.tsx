"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

      tl.from(textRef.current, { opacity: 0, x: -30 })
        .from(listRef.current ? Array.from(listRef.current.children) : [],
          { opacity: 0, y: 20, stagger: 0.1 },
          "-=0.5"
        )
        .from(imageRef.current, { opacity: 0, y: 30, duration: 1.2 }, "-=0.8");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToForm = () => {
    document.getElementById("inscription")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative flex items-center bg-[#F9FAF9] overflow-hidden px-6 lg:px-20 pt-28 pb-14 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* TEXTE */}
        <div ref={textRef} className="z-10 text-center lg:text-left">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A7C44]/10 text-[#4A7C44] text-xs font-bold mb-6 uppercase tracking-wider">
            Lancement à Bruxelles
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-zinc-900 leading-[1.2] tracking-tight">
            Rechargez près de chez vous,{" "}
            <span className="text-[#4A7C44]">grâce à vos voisins.</span>
          </h1>

          <p className="mt-5 text-lg text-zinc-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            StreetCharge connecte les conducteurs de véhicules électriques avec des particuliers qui partagent leur borne. Une solution locale, humaine et pratique.
          </p>

          <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-4">
            <button
              onClick={scrollToForm}
              className="bg-[#4A7C44] hover:bg-zinc-900 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:scale-105 active:scale-95 text-sm"
            >
              Rejoindre la communauté
            </button>
            <button
              onClick={scrollToForm}
              className="border-2 border-[#4A7C44] text-[#4A7C44] px-8 py-4 rounded-full font-bold hover:bg-[#4A7C44]/5 transition-all text-sm"
            >
              Proposer ma borne
            </button>
          </div>

          <ul ref={listRef} className="mt-10 space-y-3 inline-block text-left">
            {[
              "Recharge à moindre coût",
              "Réseau de particuliers locaux",
              "Simple, sans application pour l'instant",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-zinc-700 font-semibold text-sm">
                <div className="bg-[#4A7C44] p-1 rounded-full shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGE */}
        <div ref={imageRef} className="relative w-full">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-4/3 w-full z-10 border-4 border-white">
            <Image
              src="/b.png"
              alt="Recharge StreetCharge"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Carte flottante */}
          <div className="
            relative mt-5 mx-auto
            lg:absolute lg:mt-0 lg:-bottom-10 lg:-right-10
            w-full max-w-65 h-36
            bg-white rounded-3xl p-2 shadow-2xl border-4 border-white z-20
            transition-transform duration-500 hover:scale-105
          ">
            <div className="w-full h-full bg-zinc-100 rounded-2xl overflow-hidden relative">
              <img
                src="/img3.png"
                alt="Bornes à Bruxelles"
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-[#4A7C44]/20 to-transparent" />
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#4A7C44] rounded-full border-2 border-white shadow-lg -translate-x-1/2 -translate-y-1/2">
                <div className="absolute inset-0 bg-[#4A7C44] rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
