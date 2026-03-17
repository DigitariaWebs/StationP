'use client';

import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-white text-zinc-900 border-t border-zinc-100 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand - Logo & Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <Link href="/" className="group">
              <div className="relative inline-block">
                <Image 
                  src="/w1.png" 
                  alt="StreetCharge Logo" 
                  width={180} 
                  height={50} 
                  className="w-40 h-auto transition-transform group-hover:scale-105"
                  priority
                />
              </div>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Le premier réseau de mise en relation humaine pour la recharge électrique entre particuliers à Bruxelles. Simple, local et durable.
            </p>
            {/* Social Icons Desktop/Mobile */}
            <div className="flex gap-4 justify-center md:justify-start">
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
            </div>
          </div>

          {/* Navigation - Découvrir */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-black text-black mb-6 text-xs uppercase tracking-[0.2em]">
              Découvrir
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/#howitworks">Rejoindre la communauté</FooterLink>
              <FooterLink href="/#trouveruneborne">Trouver une borne</FooterLink>
              <FooterLink href="/devenir-hote">Devenir Hôte</FooterLink>
            </ul>
          </div>

          {/* Navigation - Support */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-black text-black mb-6 text-xs uppercase tracking-[0.2em]">
              Assistance
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/contact">Nous contacter</FooterLink>
              <FooterLink href="/faq">Questions fréquentes</FooterLink>
              <FooterLink href="/aide">Centre d'aide</FooterLink>
            </ul>
          </div>

          {/* Contact Rapide / Newsletter */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-black text-[#A3E635] mb-6 text-xs uppercase tracking-[0.2em]">
              Restons connectés
            </h4>
            <p className="text-zinc-500 text-sm mb-4 italic">
              ✦ Une question ? Un appel suffit pour vous connecter.
            </p>
            <div className="bg-zinc-50 border border-zinc-100 p-4 rounded-2xl w-full">
               <p className="text-xs font-black uppercase text-zinc-400 mb-1">Email Support</p>
               <p className="text-sm font-bold text-zinc-900">hello@streetcharge.be</p>
            </div>
          </div>
        </div>

        {/* Barre du bas (Mentions) */}
        <div className="pt-8 border-t border-zinc-100 flex flex-col lg:row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
              © {currentYear} STREETCHARGE. TOUS DROITS RÉSERVÉS.
            </p>
            <span className="hidden md:inline text-zinc-200">|</span>
            <p className="text-[10px] font-bold text-[#A3E635] uppercase tracking-widest">
              Mise en relation 100% humaine
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <LegalLink href="/legal">Mentions Légales</LegalLink>
            <LegalLink href="/confidentialite">Confidentialité</LegalLink>
            <LegalLink href="/cookies">Cookies</LegalLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Composants internes pour le style
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-zinc-500 hover:text-[#A3E635] font-bold text-sm transition-all duration-300"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-[#A3E635] hover:text-black hover:border-[#A3E635] transition-all duration-300 shadow-sm"
    >
      {icon}
    </Link>
  );
}

function LegalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-[10px] font-black text-zinc-400 hover:text-black uppercase tracking-widest transition-colors"
    >
      {children}
    </Link>
  );
}