"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTranslation } from "@/i18n/LanguageProvider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Trouver() {
  const { t } = useTranslation();
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
      {/* ─── ACCROCHE ─── */}
      <section className="py-6 lg:py-10 px-6 lg:px-20 bg-white">
        <h2 className="text-center text-2xl lg:text-3xl font-black text-zinc-900 max-w-2xl mx-auto leading-tight">
          {t.trouver.accrocheLine1}
          <span className="text-[#4A7C44]">{t.trouver.accrocheHighlight}</span>
        </h2>
      </section>

      {/* ─── BANDE STATS avec back.png en arrière-plan ─── */}
      <section className="relative py-8 lg:py-14 px-6 lg:px-20 overflow-hidden bg-[#152417]">

        <Image
          src="/back.png"
          alt=""
          fill
          unoptimized
          className="object-cover scale-108 object-[4%_center]"
          priority
        />
        <div className="absolute inset-0 bg-black/5" />

        <div
          ref={statsRef}
          className="relative z-10 max-w-7xl mx-auto grid grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden"
        >
          {t.trouver.stats.map((s, i) => (
            <div
              key={i}
              className="h-full hover:bg-black/60 transition-colors duration-300 px-2 py-4 sm:px-6 sm:py-7 lg:px-8 lg:py-8 flex flex-col gap-2 sm:gap-3 min-h-40 sm:min-h-48 bg-black/50"
            >
              <div className="text-sm sm:text-2xl lg:text-4xl font-black text-white leading-none text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
                {s.value}
              </div>
              <p className="text-white text-[10px] sm:text-sm lg:text-base font-semibold leading-relaxed border-t border-white/25 pt-2.5 min-h-19 sm:min-h-0 text-center px-2 sm:px-6 lg:px-8 py-2.5">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONSTAT / SOLUTION / ÉTAPES ─── */}
      <section id="trouver" className="pt-10 lg:pt-16 pb-6 lg:pb-8 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">

          <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 mb-6 lg:mb-8 items-stretch">

            <div className="bg-[#f4f9f4] rounded-3xl p-6 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[#4A7C44] font-bold tracking-widest uppercase text-[10px] block mb-4">
                  {t.trouver.constatTag}
                </span>
                <h2 className="text-2xl lg:text-3xl font-black text-zinc-900 leading-tight mb-4">
                  {t.trouver.constatTitle}
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {t.trouver.constatDesc}
                </p>
              </div>
            </div>

            <div className="bg-[#4A7C44] rounded-3xl p-6 lg:p-10 flex flex-col justify-between text-white">
              <div>
                <span className="text-white/60 font-bold tracking-widest uppercase text-[10px] block mb-4">
                  {t.trouver.solutionTag}
                </span>
                <h2 className="text-2xl lg:text-3xl font-black leading-tight mb-4">
                  {t.trouver.solutionTitle}
                </h2>
                <p className="text-white/75 text-sm leading-relaxed">
                  {t.trouver.solutionDesc}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 3 BLOCS SOLUTION avec d.png en arrière-plan ─── */}
      <section className="relative py-8 lg:py-14 px-6 lg:px-20 overflow-hidden bg-[#152417]">
        <Image
          src="/d.png"
          alt=""
          fill
          unoptimized
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {t.trouver.blocks.map((s, i) => (
            <div
              key={i}
              className="hover:bg-black/60 transition-colors duration-300 px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8 flex flex-col gap-2 sm:gap-3 min-h-40 sm:min-h-48 bg-black/50"
            >
              <div className="text-lg sm:text-2xl lg:text-4xl font-black text-white leading-none text-center sm:text-left drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
                {s.value}
              </div>
              <p className="text-white text-xs sm:text-sm lg:text-base font-semibold leading-relaxed border-t border-white/25 pt-2.5 text-center px-4 sm:px-6 lg:px-8 py-2.5">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── COMMENT ÇA MARCHE ─── */}
      <section className="py-10 lg:py-16 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">

          <div id="comment-ca-marche">
            <div className="flex items-center gap-4 mb-6 lg:mb-10">
              <span className="text-[#4A7C44] font-bold tracking-widest uppercase text-[10px]">{t.trouver.howTag}</span>
              <div className="flex-1 h-px bg-zinc-100" />
            </div>

            <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {t.trouver.steps.map((step, i) => (
                <div key={i} className="bg-[#f4f9f4] rounded-3xl p-6 lg:p-8 hover:bg-[#edf5ed] transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4 lg:mb-6">
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
