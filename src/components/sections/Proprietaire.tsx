"use client";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function Proprietaire() {
  const { t } = useTranslation();

  const scrollToForm = () => {
    document.getElementById("inscription")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-6 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="bg-[#1a3a1f] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">

          <div className="lg:w-[38%] shrink-0 flex flex-col justify-center">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#4A7C44] bg-[#4A7C44]/15 px-3 py-1 rounded-full mb-5 w-fit">
              {t.proprietaire.tag}
            </span>

            <h2 className="text-2xl lg:text-[1.75rem] font-black text-white leading-snug mb-4">
              {t.proprietaire.titleLine1}<br />
              <span className="text-[#6fcf70]">{t.proprietaire.titleLine2}</span>
            </h2>

            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
              {t.proprietaire.desc}
            </p>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-white text-[#1a3a1f] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#4A7C44] hover:text-white transition-all duration-200 shadow-lg hover:scale-[1.02] active:scale-[0.98] w-fit"
            >
              {t.proprietaire.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex-1 rounded-2xl overflow-hidden bg-[#0f2614]">
            <img
              src="/d.png"
              alt={t.proprietaire.imageAlt}
              className="w-full h-64 sm:h-80 lg:h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
