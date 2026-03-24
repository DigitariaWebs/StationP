"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const slides = [
  { src: "/v3.png", alt: "Recharge électrique à domicile" },
  { src: "/v2.png", alt: "Borne de recharge particulier" },
  {
    src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1400&auto=format&fit=crop",
    alt: "Câble de recharge véhicule électrique",
  },
  { src: "/w.png", alt: "Installation borne privée" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(next, 4500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, next]);

  const scrollToForm = () => {
    document.getElementById("inscription")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    /*
      STRUCTURE DESKTOP :
      - section : h-[90vh] → hauteur DÉFINIE = flex-stretch fonctionne sur les enfants
      - colonne gauche (52%) : justify-center + padding top = centré sous la navbar flottante
      - colonne droite (48%) : h-auto = stretch donne 90vh automatiquement
    */
    <section className="relative flex flex-col lg:flex-row bg-white overflow-hidden h-auto lg:h-[90vh]">

      {/* ─── GAUCHE : Contenu ─── */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[52%] px-6 lg:px-14 xl:px-20 pt-32 pb-14 lg:pt-0 lg:pb-0">

      

        {/* Titre */}
        <h1 className="text-4xl sm:text-5xl xl:text-[3.75rem] font-black text-zinc-900 leading-[1.05] tracking-tight mb-5">
          La recharge,<br />
          <span className="text-[#4A7C44]">entre voisins.</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-base lg:text-lg text-zinc-500 max-w-sm lg:max-w-md leading-relaxed mb-9">
          StreetCharge connecte les conducteurs de véhicules électriques avec des particuliers qui partagent leur borne — localement, simplement, humainement.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <button
            onClick={scrollToForm}
            className="bg-[#4A7C44] text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#3a6235] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Rejoindre la communauté
          </button>
          <button
            onClick={scrollToForm}
            className="border-2 border-zinc-200 text-zinc-700 px-7 py-3.5 rounded-full font-bold text-sm hover:border-[#4A7C44] hover:text-[#4A7C44] transition-all"
          >
            Proposer ma borne →
          </button>
        </div>

        {/* Barre de confiance */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-400 font-semibold pt-6 border-t border-zinc-100">
          {["Inscription gratuite", "Sans engagement", "100 % local"].map((item, i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-[#4A7C44] rounded-full" />
                {item}
              </span>
              {i < 2 && <span className="w-px h-3 bg-zinc-200 hidden sm:block" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ─── DROITE : Slider ───
          Mobile  : h-72 / sm:h-96 (hauteur fixe)
          Desktop : lg:h-auto → flex-stretch remplit les 90vh du parent
      */}
      <div
        className="relative w-full h-72 sm:h-96 lg:w-[48%] lg:h-auto overflow-hidden bg-zinc-100"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fondu gauche (desktop) pour fondre avec le fond blanc */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 hidden lg:block pointer-events-none" />

        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== current}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Flèches de navigation */}
        <button
          onClick={prev}
          aria-label="Slide précédent"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/25 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#4A7C44] transition-all duration-200 hover:scale-110"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Slide suivant"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/25 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#4A7C44] transition-all duration-200 hover:scale-110"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicateurs (dots) */}
        <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Aller au slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
