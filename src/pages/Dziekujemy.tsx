import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/i18n/translations';

const Dziekujemy = () => {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.pl;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f5f3ef' }}>
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center pt-32 pb-16 px-6">
        <div className="max-w-2xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 rounded-full bg-[#94c43d]/10 flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle2 className="w-12 h-12 text-[#94c43d]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {t.thankYou.title} <span className="text-[#94c43d]">{t.thankYou.titleHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 mb-10 leading-relaxed"
          >
            {t.thankYou.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold transition-all hover:bg-gray-800 hover:scale-105"
            >
              {t.thankYou.goHome}
            </Link>
            <Link
              to="/uslugi"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 text-gray-700 rounded-full font-semibold transition-all hover:border-[#94c43d] hover:text-[#94c43d] hover:scale-105"
            >
              {t.thankYou.viewProjects}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 p-8 rounded-3xl bg-white border border-gray-100 shadow-sm inline-block"
          >
            <Heart className="w-8 h-8 text-[#94c43d] mx-auto mb-4" />
            <p className="text-sm text-gray-500 italic">
              {t.thankYou.quote}
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dziekujemy;
