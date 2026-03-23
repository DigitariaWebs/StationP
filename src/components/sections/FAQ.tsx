"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment ça fonctionne exactement ?",
      answer:
        "StreetCharge met en relation des propriétaires de bornes privées avec des conducteurs cherchant à recharger près de chez eux. Vous vous inscrivez, nous facilitons la mise en relation selon votre quartier.",
    },
    {
      question: "Est-ce que c'est gratuit ?",
      answer:
        "L'inscription est totalement gratuite et sans engagement. Nous sommes en phase de lancement et cherchons à construire la communauté avant d'ouvrir le service.",
    },
    {
      question: "Que se passe-t-il après mon inscription ?",
      answer:
        "Nous vous recontactons pour comprendre vos besoins et vous mettre en relation avec des voisins intéressés dès que le service est disponible dans votre quartier.",
    },
    {
      question: "Quelles communes sont concernées ?",
      answer:
        "Nous démarrons à Bruxelles et dans les communes de la périphérie. Plus il y a d'inscrits dans une zone, plus vite nous pouvons lancer le service.",
    },
  ];

  return (
    <section id="faq" className="bg-white px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            Questions fréquentes
          </h2>
          <p className="mt-2 text-zinc-500 text-base">
            Vous avez d'autres questions ? Écrivez-nous à{" "}
            <a href="mailto:hello@streetcharge.be" className="text-[#4A7C44] font-semibold hover:underline">
              hello@streetcharge.be
            </a>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-zinc-100 rounded-2xl overflow-hidden bg-[#F9FAF9]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-zinc-50 transition-colors"
              >
                <span className="font-semibold text-base text-zinc-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp size={18} className="text-[#4A7C44] shrink-0" />
                ) : (
                  <ChevronDown size={18} className="text-[#4A7C44] shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-zinc-500 text-sm leading-relaxed animate-in slide-in-from-top-2 duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
