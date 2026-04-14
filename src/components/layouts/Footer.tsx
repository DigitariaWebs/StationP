"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer id="footer" className="bg-[#1a3a1f] text-white pt-10 lg:pt-14 pb-6 lg:pb-8 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Ligne principale */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/">
              <Image
                src="/w1.png"
                alt="StreetCharge"
                width={220}
                height={66}
                className="w-52 h-auto brightness-0 invert mb-5"
                priority
              />
            </Link>
            <p className="text-white/95 text-sm font-semibold leading-relaxed mb-5">
              {t.footer.tagline}
            </p>
          </div>

          {/* Liens */}
          <div className="grid grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-white/85 mb-4">{t.footer.navTitle}</h4>
              <ul className="space-y-3">
                <FooterLink href="#comment-ca-marche">{t.footer.navHow}</FooterLink>
                <FooterLink href="#inscription">{t.footer.navSignup}</FooterLink>
                <FooterLink href="#faq">{t.footer.navFaq}</FooterLink>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-white/85 mb-4">{t.footer.contactTitle}</h4>
              <p className="text-white/95 text-sm font-semibold leading-relaxed">
                {t.footer.contactDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-white/70 font-semibold uppercase tracking-widest">
          <span className="text-white/90 font-bold">© {currentYear} StreetCharge — {t.footer.rights}</span>
          <span className="text-white font-extrabold">{t.footer.human}</span>
        </div>

      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-white font-semibold hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  );
}
