'use client';

import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#1B1F24] text-white border-t border-[#00F5A0]/30 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          
          {/* Brand - Logo avec fond blanc */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center justify-center sm:justify-start mb-4 sm:mb-6 group">
              <div className="bg-white p-3 rounded-xl shadow-lg inline-block">
                <Image 
                  src="/4.png" 
                  alt="StationP Logo" 
                  width={1000} 
                  height={1000} 
                  className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44 h-auto transition-transform group-hover:scale-105"
                  priority
                />
              </div>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
              Le premier réseau de mise en relation humaine pour la recharge électrique à Bruxelles. 
              Un appel suffit pour connecter conducteurs et hôtes.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center sm:text-left">
            <h4 className="font-black text-[#00F5A0] mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">
              Découvrir
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-medium">
              <li>
                <Link href="/bornes" className="hover:text-[#00F5A0] transition-colors inline-block py-1">
                  Trouver une borne
                </Link>
              </li>
              <li>
                <Link href="/devenir-hote" className="hover:text-[#00F5A0] transition-colors inline-block py-1">
                  Devenir Hôte
                </Link>
              </li>
              <li>
                <Link href="/comment-ca-marche" className="hover:text-[#00F5A0] transition-colors inline-block py-1">
                  Comment ça marche
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="text-center sm:text-left">
            <h4 className="font-black text-[#00F5A0] mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">
              Besoin d'aide
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-medium">
              <li>
                <Link href="/contact" className="hover:text-[#00F5A0] transition-colors inline-block py-1">
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#00F5A0] transition-colors inline-block py-1">
                  Questions fréquentes
                </Link>
              </li>
              <li>
                <Link href="/aide" className="hover:text-[#00F5A0] transition-colors inline-block py-1">
                  Centre d'aide
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="text-center sm:text-left">
            <h4 className="font-black text-[#00F5A0] mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-wider">
              Restons connectés
            </h4>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start mb-4">
              <Link 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#00F5A0] hover:text-[#00F5A0] transition-all hover:scale-110 active:scale-95"
                aria-label="Instagram"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </Link>
              <Link 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#00F5A0] hover:text-[#00F5A0] transition-all hover:scale-110 active:scale-95"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </Link>
            </div>
            <p className="text-xs text-gray-500">
              ✦ Rejoignez la communauté
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest text-center sm:text-left">
            © {currentYear} StationP Belgium. Mise en relation 100% humaine.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-gray-500 font-bold">
            <Link href="/legal" className="hover:text-white transition-colors py-1">
              MENTIONS LÉGALES
            </Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors py-1">
              CONFIDENTIALITÉ
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors py-1">
              COOKIES
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}