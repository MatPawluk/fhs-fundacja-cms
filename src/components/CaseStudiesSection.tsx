import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GradientText } from './GradientText';
import { useLanguage } from '@/contexts/LanguageContext';
import { caseStudiesTranslations } from '@/i18n/contentTranslations';

// Case study images
import sgCsVektor from '@/assets/sg-cs-vektor.png';
import sgCsArcom from '@/assets/sg-cs-arcom.png';
import sgCsAktir from '@/assets/sg-cs-aktir.png';
import sgCsOrvanta from '@/assets/sg-cs-orvanta.png';

const caseStudyImages: Record<string, string> = {
  vektor: sgCsVektor,
  arcom: sgCsArcom,
  aktir: sgCsAktir,
  orvanta: sgCsOrvanta,
};

export const CaseStudiesSection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const { t, language } = useLanguage();
  const caseStudies = caseStudiesTranslations[language];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium uppercase tracking-wider mb-4">{t.caseStudies.badge}</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">{t.caseStudies.title} <GradientText>{t.caseStudies.titleHighlight}</GradientText></h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div key={study.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative h-[480px] cursor-pointer perspective-1000" onClick={() => setFlippedCard(flippedCard === index ? null : index)}>
              <motion.div animate={{ rotateY: flippedCard === index ? 180 : 0 }} transition={{ duration: 0.6 }} className="relative w-full h-full preserve-3d" style={{ transformStyle: 'preserve-3d' }}>
                <div className="absolute inset-0 rounded-3xl overflow-hidden backface-hidden" style={{ backfaceVisibility: 'hidden' }}>
                  <img src={caseStudyImages[study.imageKey]} alt={study.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-lime text-sm font-medium uppercase tracking-wider">{study.category}</span>
                    <h3 className="font-display text-2xl font-bold text-white mt-2">{study.name}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-[#f0ede8] border border-gray-800 p-6 backface-hidden overflow-hidden" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <h3 className="font-display text-xl font-bold text-white">{study.name}</h3>
                        <span className="px-3 py-1 rounded-full bg-lime/20 text-lime text-xs font-medium">{study.category}</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between border-b border-gray-800 pb-3">
                          <span className="text-gray-500 text-xs uppercase tracking-wider">{t.caseStudies.client}</span>
                          <span className="text-white text-sm text-right max-w-[65%]">{study.client}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-800 pb-3">
                          <span className="text-gray-500 text-xs uppercase tracking-wider">{t.caseStudies.goal}</span>
                          <span className="text-white text-sm text-right max-w-[65%]">{study.goal}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-800 pb-3">
                          <span className="text-gray-500 text-xs uppercase tracking-wider">{t.caseStudies.duration}</span>
                          <span className="text-white text-sm">{study.duration}</span>
                        </div>
                        <div className="pt-1">
                          <span className="text-gray-500 text-xs uppercase tracking-wider block mb-2">{t.caseStudies.result}</span>
                          <span className="text-[#94c43d] text-sm font-medium leading-relaxed block">{study.result}</span>
                        </div>
                      </div>
                    </div>
                    <Link to="/kontakt" className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#e8e5e0] hover:bg-lime hover:text-[#1a1a1a] text-white rounded-full text-sm font-medium transition-all duration-300 group">
                      {t.caseStudies.ctaButton}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};