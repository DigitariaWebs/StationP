"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
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
      <div className="relative w-full h-72 sm:h-96 lg:w-[48%] lg:h-auto overflow-hidden bg-zinc-100">
        {/* Fondu gauche (desktop) pour fondre avec le fond blanc */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 hidden lg:block pointer-events-none" />

        <Image
          src="/d2.png"
          alt="Recharge électrique"
          fill
          unoptimized
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
