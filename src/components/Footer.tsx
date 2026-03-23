import { Link } from 'react-router-dom';
import { MapPin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FooterProps {
  variant?: 'dark' | 'light';
}

export const Footer = ({ variant = 'dark' }: FooterProps) => {
  const { t } = useLanguage();

  const footerLinks = {
    navigation: [
      { name: t.nav.home, href: '/' },
      { name: t.nav.services, href: '/uslugi' },
      { name: t.nav.about, href: '/o-nas' },
      { name: t.nav.knowledge, href: '/baza-wiedzy' },
      { name: t.nav.contact, href: '/kontakt' },
    ],
    legal: [
      { name: t.footer.privacy, href: '#' },
      { name: t.footer.gdpr, href: '#' },
      { name: t.footer.cookies, href: '#' },
    ],
  };

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <span className="font-display font-bold text-2xl text-white italic">
                <span className="text-[#94c43d]">FHS</span> Foundation
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">{t.footer.navigation}</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#94c43d] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">{t.footer.contact}</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@fhsfoundation.org"
                className="flex items-center gap-3 text-gray-400 hover:text-[#94c43d] transition-colors duration-300 text-sm"
              >
                <Mail size={18} className="text-[#94c43d]" />
                contact@fhsfoundation.org
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">{t.footer.locations}</h4>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-white font-medium mb-2">
                  <MapPin size={16} className="text-[#94c43d]" />
                  Warszawa
                </div>
                <p className="text-gray-400 text-sm pl-6">
                  Polska
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-700/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 FHS Foundation. {t.footer.rights}
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-300 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
