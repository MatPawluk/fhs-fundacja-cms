import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Settings, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface CookieConsent {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieBanner = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  const translations = {
    pl: {
      title: 'Dbamy o Twoją prywatność',
      desc: 'Używamy plików cookies, aby usprawnić działanie serwisu, analizować ruch i personalizować treści. Klikając „Akceptuj wszystkie”, zgadzasz się na przechowywanie wszystkich ciasteczek.',
      acceptAll: 'Akceptuj wszystkie',
      acceptNecessary: 'Tylko niezbędne',
      settings: 'Ustawienia',
      save: 'Zapisz wybrane',
      policy: 'Polityka Prywatności',
      categories: {
        essential: { title: 'Niezbędne', desc: 'Wymagane do poprawnego działania strony.' },
        analytics: { title: 'Analityka', desc: 'Pomagają nam mierzyć ruch i poprawiać treści.' },
        marketing: { title: 'Marketing', desc: 'Używane do wyświetlania dopasowanych informacji.' },
      }
    },
    en: {
      title: 'We care about your privacy',
      desc: 'We use cookies to improve our website experience, analyze traffic and personalize content. By clicking "Accept all", you agree to store all cookies.',
      acceptAll: 'Accept all',
      acceptNecessary: 'Necessary only',
      settings: 'Settings',
      save: 'Save selected',
      policy: 'Privacy Policy',
      categories: {
        essential: { title: 'Essential', desc: 'Required for the website to function properly.' },
        analytics: { title: 'Analytics', desc: 'Help us measure traffic and improve content.' },
        marketing: { title: 'Marketing', desc: 'Used to display personalized information.' },
      }
    },
    nl: {
      title: 'Wij geven om uw privacy',
      desc: 'Wij gebruiken cookies om onze website-ervaring te verbeteren, verkeer te analyseren en inhoud te personaliseren. Door op "Alles accepteren" te klikken, gaat u akkoord met het opslaan van alle cookies.',
      acceptAll: 'Alles accepteren',
      acceptNecessary: 'Alleen noodzakelijke',
      settings: 'Instellingen',
      save: 'Geselecteerde opslaan',
      policy: 'Privacybeleid',
      categories: {
        essential: { title: 'Noodzakelijk', desc: 'Vereist voor de goede werking van de website.' },
        analytics: { title: 'Analytisch', desc: 'Help ons verkeer te meten en inhoud te verbeteren.' },
        marketing: { title: 'Marketing', desc: 'Gebruikt om gepersonaliseerde informatie te tonen.' },
      }
    }
  };

  const t = translations[language as keyof typeof translations] || translations.pl;

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent');
    if (!savedConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent = { essential: true, analytics: true, marketing: true };
    saveConsent(allConsent);
  };

  const handleAcceptNecessary = () => {
    const necessaryConsent = { essential: true, analytics: false, marketing: false };
    saveConsent(necessaryConsent);
  };

  const saveConsent = (newConsent: CookieConsent) => {
    localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
    setIsVisible(false);
    // Here you would trigger actual script loading (GA, Pixel) based on newConsent
  };

  const toggleCategory = (key: keyof CookieConsent) => {
    if (key === 'essential') return;
    setConsent(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-x-0 bottom-0 z-[9999] p-4 md:p-6 flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full max-w-2xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)] rounded-3xl p-6 md:p-8 pointer-events-auto"
        >
          {!showSettings ? (
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#94c43d]/10 flex items-center justify-center text-[#94c43d]">
                <ShieldCheck size={32} />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-2">{t.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {t.desc}{' '}
                  <Link to="/polityka-prywatnosci" className="text-[#94c43d] hover:underline font-medium">
                    {t.policy}
                  </Link>
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-black transition-colors"
                  >
                    {t.acceptAll}
                  </button>
                  <button
                    onClick={handleAcceptNecessary}
                    className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors"
                  >
                    {t.acceptNecessary}
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-[#94c43d] transition-colors text-sm font-medium"
                  >
                    <Settings size={18} />
                    {t.settings}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-xl text-gray-900">{t.settings}</h3>
                <button onClick={() => setShowSettings(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-3">
                {(['essential', 'analytics', 'marketing'] as const).map((key) => (
                  <div 
                    key={key}
                    onClick={() => toggleCategory(key)}
                    className={`p-4 rounded-2xl border transition-all ${
                      consent[key] ? 'bg-[#94c43d]/5 border-[#94c43d]/20' : 'bg-gray-50/50 border-gray-100'
                    } ${key !== 'essential' ? 'cursor-pointer hover:border-[#94c43d]/30' : 'opacity-80'}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-gray-900">{t.categories[key].title}</p>
                      <div className={`w-10 h-5 rounded-full transition-colors relative ${consent[key] ? 'bg-[#94c43d]' : 'bg-gray-300'}`}>
                        <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${consent[key] ? 'left-6' : 'left-1'}`} />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">{t.categories[key].desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => saveConsent(consent)}
                  className="flex-1 py-3 bg-[#94c43d] text-white rounded-xl font-bold hover:bg-[#83b035] transition-colors flex items-center justify-center gap-2"
                >
                  {t.save}
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CookieBanner;
