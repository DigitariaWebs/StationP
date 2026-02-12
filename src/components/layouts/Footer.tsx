'use client';

import Link from 'next/link';
import { Instagram, Linkedin, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-[#00F5A0]/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-[#00F5A0] text-black p-1.5 rounded-lg transition-colors">
                <Zap size={20} fill="currentColor" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                StationP
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Le premier réseau communautaire de recharge électrique à Bruxelles. 
              Simplifiez votre route.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-black text-[#00F5A0] mb-6 text-sm uppercase">Plateforme</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/bornes" className="hover:text-[#00F5A0] transition-colors">Trouver une borne</Link></li>
              <li><Link href="/devenir-hote" className="hover:text-[#00F5A0] transition-colors">Devenir Hôte</Link></li>
              <li><Link href="/tarifs" className="hover:text-[#00F5A0] transition-colors">Tarifs</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-black text-[#00F5A0] mb-6 text-sm uppercase">Aide</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/aide" className="hover:text-[#00F5A0] transition-colors">Comment ça marche ?</Link></li>
              <li><Link href="/contact" className="hover:text-[#00F5A0] transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-[#00F5A0] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-black text-[#00F5A0] mb-6 text-sm uppercase">Suivez-nous</h4>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#00F5A0] hover:text-[#00F5A0] transition-all">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#00F5A0] hover:text-[#00F5A0] transition-all">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
            © {currentYear} StationP Belgium.
          </p>
          <div className="flex gap-6 text-xs text-gray-500 font-bold">
            <Link href="/legal" className="hover:text-white transition-colors">MENTIONS LÉGALES</Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors">CONFIDENTIALITÉ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}