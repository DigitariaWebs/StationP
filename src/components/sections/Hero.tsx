"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    type: "image" as const,
    src: "/1.png", // Ta photo locale 1
    alt: "Recharge électrique",
  },
  {
    type: "image" as const,
    src: "/loto.webp", // Ta photo locale 2
    alt: "Station de recharge",
  },
  {
    type: "image" as const,
    // Lien Unsplash Vérifié : Gros plan câble
    src: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1400&auto=format&fit=crop",
    alt: "Borne de recharge",
  },
  {
    type: "image" as const,
    // Lien Unsplash Vérifié : Borne moderne
    src: "/w.png",
    alt: "Installation électrique",
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(next, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, next]);

  const scrollToForm = () => {
    document.getElementById("inscription")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col lg:flex-row bg-white overflow-hidden min-h-[90vh]">

      {/* ─── GAUCHE : Contenu ─── */}
      <div className="relative z-10 flex flex-col justify-center px-6 lg:px-16 xl:px-24 pt-24 pb-12 lg:py-0 w-full lg:w-[55%]">

        {/* Titre : Taille réduite (text-3xl à 5xl) pour ne pas écraser la navbar */}
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-zinc-900 leading-tight tracking-tight mb-5">
          La recharge,<br />
          <span className="text-[#4A7C44]">entre voisins.</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-sm lg:text-base text-zinc-500 max-w-md leading-relaxed mb-8">
          StreetCharge connecte les conducteurs de véhicules électriques avec des particuliers qui partagent leur borne — à Bruxelles, près de chez vous.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={scrollToForm}
            className="bg-[#4A7C44] text-white px-6 py-3 rounded-full font-bold text-xs hover:bg-zinc-900 transition-all shadow-md hover:scale-105 active:scale-95"
          >
            Rejoindre la communauté
          </button>
          <button
            onClick={scrollToForm}
            className="border-2 border-zinc-100 text-zinc-700 px-6 py-3 rounded-full font-bold text-xs hover:border-[#4A7C44] hover:text-[#4A7C44] transition-all"
          >
            Proposer ma borne →
          </button>
        </div>

        {/* Barre de confiance */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 font-semibold border-t border-zinc-100 pt-6">
          {["Inscription gratuite", "Sans engagement", "100 % local"].map((item, i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#4A7C44] rounded-full" />
                {item}
              </span>
              {i < 2 && <span className="w-px h-3 bg-zinc-200 hidden sm:block" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ─── DROITE : Slider ─── */}
      <div
        className="relative w-full h-72 sm:h-96 lg:h-auto lg:w-[45%] overflow-hidden bg-zinc-100"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Coin découpé desktop */}
        <div
          className="absolute top-0 left-0 w-16 h-full bg-white z-10 hidden lg:block"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />

        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-1" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#4A7C44] transition-all z-20"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#4A7C44] transition-all z-20"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}