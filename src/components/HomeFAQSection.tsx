import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { GradientText } from '@/components/GradientText';
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#94c43d]/5 blur-[150px] rounded-full" />
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#94c43d]" />
            <span className="text-[#94c43d] font-display font-medium tracking-wider uppercase text-sm">{t.faq.badge}</span>
            <div className="w-8 h-px bg-[#94c43d]" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {t.faq.title} <br />
            <span className="text-[#94c43d]">{t.faq.titleHighlight}</span>
          </h2>
        </motion.div>
        <div className="max-w-4xl mx-auto space-y-0">
          {faqs.map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="border-b border-gray-300">
              <button onClick={() => toggleIndex(index)} className="w-full flex items-center justify-between py-6 text-left group">
                <span className="font-display text-lg md:text-xl font-semibold text-gray-900 group-hover:text-[#94c43d] transition-colors duration-300 pr-4">{faq.question}</span>
                <ChevronRight className={`w-5 h-5 text-gray-400 group-hover:text-[#94c43d] transition-all duration-300 flex-shrink-0 ${openIndices.has(index) ? 'rotate-90' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndices.has(index) && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="text-gray-600 pb-6 leading-relaxed">{faq.answer}</p>
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
