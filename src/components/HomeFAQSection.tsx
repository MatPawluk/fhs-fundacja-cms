import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { GradientText } from '@/components/GradientText';
import { ChineseCharacters } from '@/components/ChineseCharacters';
import { useLanguage } from '@/contexts/LanguageContext';
import { homeFaqTranslations } from '@/i18n/contentTranslations';

export const HomeFAQSection = () => {
  const { t, language } = useLanguage();
  const faqs = homeFaqTranslations[language];
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggleIndex = (index: number) => {
    setOpenIndices(prev => {
      const next = new Set(prev);
      if (next.has(index)) { next.delete(index); } else { next.add(index); }
      return next;
    });
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
      <ChineseCharacters characters="信任" position="right" className="top-20" opacity={0.08} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-lime/5 blur-[150px] rounded-full" />
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-4">{t.faq.badge}</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900">{t.faq.title} <GradientText>{t.faq.titleHighlight}</GradientText></h2>
        </motion.div>
        <div className="max-w-4xl mx-auto space-y-0">
          {faqs.map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="border-b border-gray-200">
              <button onClick={() => toggleIndex(index)} className="w-full flex items-center justify-between py-6 text-left group">
                <span className="font-display text-lg md:text-xl font-semibold text-gray-900 group-hover:text-lime transition-colors duration-300 pr-4">{faq.question}</span>
                <ChevronRight className={`w-5 h-5 text-gray-500 group-hover:text-lime transition-all duration-300 flex-shrink-0 ${openIndices.has(index) ? 'rotate-90' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndices.has(index) && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="text-gray-500 pb-6 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
