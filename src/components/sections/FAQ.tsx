'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment ça fonctionne exactement ?",
      answer:
        "StreetCharge met en relation des propriétaires de bornes privées avec des conducteurs cherchant à recharger. Vous vous inscrivez, nous facilitons la mise en relation selon votre quartier et vos disponibilités.",
    },
    {
      question: "Est-ce vraiment gratuit ?",
      answer:
        "L'inscription est gratuite et sans engagement. Nous sommes en phase de lancement pour tester le service et construire la meilleure solution possible.",
    },
    {
      question: "Quels communes sont concernés ?",
      answer:
        "Nous commençons dans certaines communes de Bruxelles et de la périphérie. Si vous êtes intéressés, inscrivez-vous ! Nous élargirons selon la demande.",
    },
    {
      question: "Que se passe-t-il après mon inscription ?",
      answer:
        "Nous prenons contact avec vous pour comprendre vos besoins et, si possible, vous mettre en relation avec des voisins intéressés.",
    },
    {
      question: "Puis-je vraiment partager ma borne privée ?",
      answer:
        "Oui, c'est le principe ! Si vous avez une borne chez vous et qu'elle est parfois inutilisée, vous pouvez la partager avec vos voisins.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-[color:var(--color-background)] text-[color:var(--color-foreground)] px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <HelpCircle size={40} className="text-[color:var(--color-accent)]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Foire aux <span className="text-[color:var(--color-accent)]">questions</span>
          </h2>
          <p className="text-lg text-[color:var(--color-muted)]">
            Tout ce que vous devez savoir sur StreetCharge
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[color:var(--color-border)] rounded-xl overflow-hidden bg-[color:var(--color-surface)] shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-[color:var(--color-surface-muted)] transition-colors"
              >
                <span className="font-semibold text-lg text-[color:var(--color-foreground)]">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-[color:var(--color-accent)] flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-[color:var(--color-accent)] flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-[color:var(--color-muted)] animate-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[color:var(--color-muted)]">
            Vous avez d'autres questions ?{' '}
            <a
              href="#howitworks"
              className="text-[color:var(--color-accent)] hover:underline font-semibold"
            >
              Contactez-nous
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
