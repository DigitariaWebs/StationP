"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Proprietaire() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      tl.from(contentRef.current, { opacity: 0, x: -30 })
        .from(imageRef.current, { opacity: 0, x: 30 }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToForm = () => {
    document.getElementById("inscription")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="py-14 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#4A7C44] rounded-[2.5rem] p-8 lg:p-14 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* TEXTE */}
          <div ref={contentRef} className="lg:w-1/2">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#ffffff] bg-white/5 px-4 py-1.5 rounded-full mb-6">
              Propriétaires de borne
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              Votre borne peut vous{" "}
              <span className="text-[#ffffff]">rapporter localement.</span>
            </h2>

            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
              Votre borne reste souvent inutilisée ? StreetCharge vous aide à l'ouvrir à des conducteurs proches, simplement et selon vos règles.
            </p>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-white text-[#4A7C44] px-8 py-4 rounded-full font-bold text-sm hover:bg-[#ffffff] hover:text-[#4A7C44] transition-all duration-200 shadow-lg hover:scale-105 active:scale-95"
            >
              Proposer ma borne
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* IMAGE */}
          <div ref={imageRef} className="lg:w-1/2 w-full">
            <div className="relative rounded-[2rem] overflow-hidden aspect-4/3 border-4 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop"
                alt="Propriétaire de borne StreetCharge"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
