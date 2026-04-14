"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function Hero() {
  const { t } = useTranslation();

  const scrollToForm = () => {
    document.getElementById("inscription")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col lg:flex-row bg-white overflow-hidden h-auto lg:h-[90vh]">

      {/* ─── GAUCHE : Contenu ─── */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[52%] px-6 lg:px-14 xl:px-20 pt-32 pb-14 lg:pt-24 lg:pb-0">

        <h1 className="text-3xl sm:text-4xl xl:text-[3.rem] font-black text-zinc-900 leading-[1.05] tracking-tight mb-5">
          {t.hero.titleLine1}<br />
          <span className="text-[#4A7C44]">{t.hero.titleLine2}</span>
        </h1>

        <p className="text-base lg:text-lg text-zinc-500 max-w-sm lg:max-w-md leading-relaxed mb-9">
          {t.hero.subtitle}
        </p>

        <div className="mb-6">
          <button
            onClick={scrollToForm}
            className="bg-[#4A7C44] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#3a6235] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            {t.hero.cta}
          </button>
        </div>

        <div className="flex flex-col gap-3 text-sm text-zinc-500 font-semibold pt-6 border-t border-zinc-100">
          {t.hero.bullets.map((item, i) => (
            <span key={i} className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-[#4A7C44] rounded-full shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ─── DROITE : Image ─── */}
      <div className="relative w-full h-72 sm:h-96 lg:w-[48%] lg:h-auto overflow-hidden bg-zinc-100">
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white to-transparent z-10 hidden lg:block pointer-events-none" />
        <Image
          src="/sof2.jpeg"
          alt={t.hero.imageAlt}
          fill
          unoptimized
          className="object-cover object-[65%_center] lg:object-[85%_center]"
          priority
        />
      </div>
    </section>
  );
}
