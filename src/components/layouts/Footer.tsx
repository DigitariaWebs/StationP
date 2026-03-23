"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#1a3a1f] text-white pt-14 pb-8 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Ligne principale */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/">
              <Image
                src="/w1.png"
                alt="StreetCharge"
                width={160}
                height={44}
                className="w-36 h-auto brightness-0 invert mb-5"
                priority
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Le premier réseau bruxellois de partage de bornes entre particuliers. Simple, local et humain.
            </p>
            <div className="flex gap-2">
              <SocialIcon href="#" icon={<Instagram size={16} />} />
              <SocialIcon href="#" icon={<Linkedin size={16} />} />
            </div>
          </div>

          {/* Liens */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">Navigation</h4>
              <ul className="space-y-3">
                <FooterLink href="#comment-ca-marche">Comment ça marche</FooterLink>
                <FooterLink href="#inscription">S'inscrire</FooterLink>
                <FooterLink href="#faq">FAQ</FooterLink>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">Légal</h4>
              <ul className="space-y-3">
                <FooterLink href="/legal">Mentions légales</FooterLink>
                <FooterLink href="/confidentialite">Confidentialité</FooterLink>
                <FooterLink href="/cookies">Cookies</FooterLink>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">Contact</h4>
              <a
                href="mailto:hello@streetcharge.be"
                className="text-sm text-white/70 hover:text-white transition-colors font-medium"
              >
                hello@streetcharge.be
              </a>
              <p className="text-white/30 text-xs mt-3 leading-relaxed">
                Notre équipe est basée à Bruxelles.
              </p>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-white/30 font-medium uppercase tracking-widest">
          <span>© {currentYear} StreetCharge — Tous droits réservés</span>
          <span className="text-[#4A7C44] font-bold">Mise en relation 100% humaine</span>
        </div>

      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-white/60 hover:text-white transition-colors font-medium">
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: ReactNode }) {
  return (
    <Link
      href={href}
      className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all"
    >
      {icon}
    </Link>
  );
}
