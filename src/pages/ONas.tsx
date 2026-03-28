import { motion } from 'framer-motion';
import { CobeGlobe } from '@/components/ui/cobe-globe';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { GradientText } from '@/components/GradientText';
import { useLanguage } from '@/contexts/LanguageContext';
import { oNasTranslations } from '@/i18n/pageTranslations';

import { PartnersSection } from '@/components/PartnersSection';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import onasAdrian from '@/assets/onas-adrian.png';
import onasHugo from '@/assets/onas-hugo.png';
import onasMaksymilian from '@/assets/onas-maksymilian.jpg';
import onasLiuWenhao from '@/assets/onas-liu-wenhao.jpeg';
import onasZhangRui from '@/assets/onas-zhang-rui.png';
import onasSara from '@/assets/onas-sara.png';

const team = [
  { name: 'Darek', role: 'Współzałożyciel, koordynacja lokalna', image: onasAdrian },
  { name: 'Adrian', role: 'Współzałożyciel, marketing i komunikacja', image: onasHugo },
  { name: 'Olga', role: 'Wsparcie projektowe', image: onasMaksymilian },
  { name: 'Agata', role: 'Koordynacja lokalna', image: onasLiuWenhao },
  { name: 'Maya', role: 'Gospodyni domu polskiego w Gambii', image: onasZhangRui },
  { name: 'Kebba', role: 'Opiekun domu polskiego w Gambii', image: onasSara },
];

const ONas = () => {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());
  const { language, t } = useLanguage();
  const pt = oNasTranslations[language];
  const faqs = oNasFaqTranslations[language];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f3ef' }}>
      <Navbar />

      {/* Hero / Kim jesteśmy */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#94c43d]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#94c43d]/10 text-[#94c43d] text-sm font-medium mb-6">O nas</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Kim <GradientText>jesteśmy</GradientText>?
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Fundacja FHS to organizacja non-profit działająca od 2022 roku, której misją jest poprawa warunków życia i edukacji w społecznościach Afryki Zachodniej.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Nasze działania koncentrują się wokół edukacji, opieki zdrowotnej, rozwoju infrastruktury oraz wspierania lokalnych inicjatyw przedsiębiorczych.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Wierzymy, że przez empatię, zaangażowanie i wspólne działanie możemy tworzyć trwałe zmiany, które przekształcą życie całych społeczności.
              </p>

              <div className="flex items-center gap-8 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-[#94c43d] mb-1">
                    <AnimatedCounter end={370} suffix="+" />
                  </div>
                  <p className="text-gray-500 text-sm">Dzieci pod opieką</p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-[#94c43d] mb-1">
                    <AnimatedCounter end={17} suffix="+" />
                  </div>
                  <p className="text-gray-500 text-sm">Projektów</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Image Collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[500px] lg:h-[600px]"
            >
              {/* Decorative shapes */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#94c43d]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#94c43d]/15 rounded-full blur-xl" />

              {/* Image grid */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 left-0 w-[48%] h-[45%] rounded-2xl overflow-hidden shadow-lg"
              >
                <img src={team[0]?.image} alt="Fundacja" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-0 left-0 w-[48%] h-[48%] rounded-2xl overflow-hidden shadow-lg"
              >
                <img src={team[1]?.image} alt="Fundacja" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[5%] right-0 w-[48%] h-[90%] rounded-2xl overflow-hidden shadow-lg"
              >
                <img src={team[2]?.image} alt="Fundacja" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#94c43d]/10 text-[#94c43d] text-sm font-medium mb-4">{pt.teamBadge}</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900">Poznaj <GradientText>nas</GradientText></h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
              {team.slice(0, 3).map((member, index) => (
                <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
                  <div className="relative mb-4 rounded-2xl overflow-hidden aspect-[3/4]">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="font-display font-bold text-base lg:text-lg text-gray-900">{member.name}</h3>
                  <p className="text-gray-500 text-xs lg:text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {team.slice(3, 6).map((member, index) => (
                <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index + 3) * 0.1 }} className="group">
                  <div className="relative mb-4 rounded-2xl overflow-hidden aspect-[3/4]">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="font-display font-bold text-base lg:text-lg text-gray-900">{member.name}</h3>
                  <p className="text-gray-500 text-xs lg:text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSection />

      {/* Globe Section */}
      <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900">Gdzie <GradientText>działamy</GradientText></h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">Łączymy Polskę z Gambią - wspólnie budujemy lepszą przyszłość</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <CobeGlobe className="max-w-lg mx-auto" />
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t.cta.title} <GradientText>{t.cta.titleHighlight}</GradientText></h2>
            <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">{t.cta.subtitle}</p>
            <Link to="/kontakt" className="group inline-flex items-center gap-3 px-10 py-5 bg-[#94c43d] text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_-12px_rgba(148,196,61,0.5)]">
              {t.cta.button}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ONas;
