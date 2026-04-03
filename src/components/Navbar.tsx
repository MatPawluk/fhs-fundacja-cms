import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import logoImg from '@/assets/logo/FHS Foundation Logo green.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  // True gdy jesteśmy na głównej I jeszcze nie scrollowaliśmy — wtedy biały tekst
  const isHeroMode = location.pathname === '/' && !isScrolled;

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.services, href: '/uslugi' },
    { name: t.nav.knowledge, href: '/baza-wiedzy' },
    { name: t.nav.about, href: '/o-nas' },
    { name: t.nav.contact, href: '/kontakt' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-[#f5f3ef]/95 backdrop-blur-xl border-b border-black/5 shadow-sm'
            : 'bg-transparent'
          }`}
      >
        <nav className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="relative z-10 flex items-center gap-3 group">
              <img
                src={logoImg}
                alt=""
                className={`h-10 w-auto object-contain transition-all duration-300 ${isHeroMode ? 'brightness-0 invert' : ''}`}
              />
              <span className="font-display font-bold text-xl italic tracking-tight">
                <span className="text-[#94c43d]">FHS</span>{' '}
                <span className={`transition-colors duration-300 ${isHeroMode ? 'text-white' : 'text-gray-900'}`}>
                  Foundation
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative text-sm font-medium transition-colors duration-300 ${isActive
                        ? 'text-[#94c43d]'
                        : isHeroMode
                          ? 'text-white/80 hover:text-white'
                          : 'text-gray-600 hover:text-[#94c43d]'
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#94c43d] rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Side - Language + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* LanguageSelector powinien też przyjmować prop `light` jeśli chcesz biały tekst */}
              <LanguageSelector />
              <Link
                to="/kontakt"
                className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-[#94c43d] text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_-8px_rgba(148,196,61,0.4)]"
              >
                {t.nav.consultation}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative z-10 p-2 transition-colors duration-300 ${isHeroMode ? 'text-white' : 'text-gray-900'
                }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#f5f3ef]/98 backdrop-blur-xl">
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className={`text-2xl font-display font-semibold transition-colors duration-300 ${location.pathname === link.href
                          ? 'text-[#94c43d]'
                          : 'text-gray-900 hover:text-[#94c43d]'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center gap-4"
                >
                  <LanguageSelector />
                  <Link
                    to="/kontakt"
                    className="mt-4 inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-[#94c43d] text-white rounded-full"
                  >
                    {t.nav.consultation}
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};