import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.services, href: '/uslugi' },
    { name: t.nav.about, href: '/o-nas' },
    { name: t.nav.knowledge, href: '/baza-wiedzy' },
    { name: t.nav.contact, href: '/kontakt' },
  ];

  return (
    <footer className="relative" style={{ backgroundColor: '#f5f3ef' }}>
      <div className="container mx-auto px-6 lg:px-12 pt-16 pb-8">
        {/* Main grid - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-12">
          {/* Brand & description */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-display font-bold text-2xl text-gray-900">
                <span className="text-[#94c43d]">FHS</span> Foundation
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tworzymy przestrzeń, w której empatia, edukacja i uśmiech stają się fundamentem przyszłości dzieci w Afryce
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#94c43d] transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#94c43d] transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-gray-900">Nawigacja</h4>
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <Link key={link.href} to={link.href} className="block text-gray-600 hover:text-[#94c43d] transition-colors duration-300 text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-gray-900">Dane kontaktowe</h4>
            <div className="space-y-4">
              <a href="tel:+48698451498" className="flex items-center gap-3 text-gray-600 hover:text-[#94c43d] transition-colors duration-300 text-sm">
                <Phone size={18} className="text-[#94c43d]" />
                +48 698 451 498
              </a>
              <a href="mailto:fundacja@fhspolska.com" className="flex items-center gap-3 text-gray-600 hover:text-[#94c43d] transition-colors duration-300 text-sm">
                <Mail size={18} className="text-[#94c43d]" />
                fundacja@fhspolska.com
              </a>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <MapPin size={18} className="text-[#94c43d] flex-shrink-0" />
                Nowogrodzka 31, 00-511, Warszawa
              </div>
            </div>
          </div>

          {/* Bank account */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-gray-900">Rachunek bankowy</h4>
            <div className="space-y-3 text-sm text-gray-600">
              <p>FHS Foundation</p>
              <div>
                <p className="text-gray-500">Numer konta:</p>
                <p className="font-bold text-gray-900 mt-1">PL 50 1020 3802 0000 1002 0319 5856</p>
              </div>
              <p className="mt-4 leading-relaxed">
                Każdy wkład bezpośrednio wspiera nasze projekty realizowane w Afryce
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-300/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-900 transition-colors">Statut</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Regulamin</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Polityka Prywatności</a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2026 FHS Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};