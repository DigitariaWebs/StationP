import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Colonne 1 : Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="StationP" width={32} height={32} />
              <span className="text-xl font-bold text-slate-900">StationP</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Le premier réseau communautaire de recharge électrique à Bruxelles. 
              Simplifiez votre route, rentabilisez votre énergie.
            </p>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-6">Plateforme</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/reserver" className="text-slate-600 hover:text-blue-600 transition">Trouver une borne</Link></li>
              <li><Link href="/devenir-hote" className="text-slate-600 hover:text-blue-600 transition">Devenir Hôte</Link></li>
              <li><Link href="/tarifs" className="text-slate-600 hover:text-blue-600 transition">Tarifs & Commission</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Support */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-6">Aide</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/aide" className="text-slate-600 hover:text-blue-600 transition">Comment ça marche ?</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-blue-600 transition">Contactez-nous</Link></li>
              <li><Link href="/faq" className="text-slate-600 hover:text-blue-600 transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Colonne 4 : Social */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-6">Suivez-nous</h4>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 transition">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 transition">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} StationP Belgium. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="/legal" className="hover:text-slate-900 transition">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-slate-900 transition">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}