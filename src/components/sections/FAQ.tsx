"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-8 lg:py-14 px-6 lg:px-20 bg-white border-t border-zinc-100">
      <div className="max-w-3xl mx-auto">

        <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
          <div>
            <span className="text-[#4A7C44] font-bold tracking-widest uppercase text-[10px] block mb-2">
              {t.faq.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 leading-tight">
              {t.faq.title}
            </h2>
          </div>
        </div>

        <div className="divide-y divide-zinc-100">
          {t.faq.items.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start justify-between py-5 text-left gap-4 group"
              >
                <span className="font-bold text-zinc-900 text-base group-hover:text-[#4A7C44] transition-colors">
                  {faq.question}
                </span>
                <span className="shrink-0 w-6 h-6 rounded-full bg-zinc-100 group-hover:bg-[#4A7C44]/10 flex items-center justify-center transition-colors mt-0.5">
                  {openIndex === i ? (
                    <Minus size={13} className="text-[#4A7C44]" />
                  ) : (
                    <Plus size={13} className="text-zinc-500 group-hover:text-[#4A7C44] transition-colors" />
                  )}
                </span>
              </button>

              {openIndex === i && (
                <p className="pb-5 text-zinc-500 text-sm leading-relaxed animate-in slide-in-from-top-2 duration-200">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
