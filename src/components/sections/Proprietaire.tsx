"use client";
import Image from "next/image";

export default function Proprietaire() {
  const scrollToForm = () => {
    document.getElementById("inscription")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-6 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* items-stretch → les deux colonnes ont la même hauteur */}
        <div className="bg-[#1a3a1f] rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">

          {/* ─── GAUCHE : Message + CTA ─── */}
          <div className="lg:w-[38%] shrink-0 flex flex-col justify-center">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#4A7C44] bg-[#4A7C44]/15 px-3 py-1 rounded-full mb-5 w-fit">
              Propriétaires de borne
            </span>

            <h2 className="text-2xl lg:text-[1.75rem] font-black text-white leading-snug mb-4">
              Votre borne peut vous<br />
              <span className="text-[#6fcf70]">rapporter localement.</span>
            </h2>

            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
              Votre borne reste souvent inutilisée ? StreetCharge vous aide à l'ouvrir à des conducteurs proches, simplement et selon vos règles.
            </p>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-white text-[#1a3a1f] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#4A7C44] hover:text-white transition-all duration-200 shadow-lg hover:scale-[1.02] active:scale-[0.98] w-fit"
            >
              Proposer ma borne
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* ─── DROITE : 3 photos égales ─── */}
          <div className="flex-1 grid grid-cols-3 gap-2.5">
            {[
              { src: "/pro1.png", alt: "Borne inutilisée" },
              { src: "/pro2.png", alt: "Revenu complémentaire" },
              { src: "/pro3.png", alt: "Conducteurs locaux" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-3/4 rounded-2xl overflow-hidden bg-[#0f2614]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
