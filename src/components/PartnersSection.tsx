import { motion } from 'framer-motion';
import { GradientText } from '@/components/GradientText';
import { useLanguage } from '@/contexts/LanguageContext';

import logo1 from '@/assets/loga/1.png';
import logo2 from '@/assets/loga/2.png';
import logo3 from '@/assets/loga/3.png';
import logo4 from '@/assets/loga/4.png';
import logo5 from '@/assets/loga/5.png';
import logo6 from '@/assets/loga/6.png';
import logo7 from '@/assets/loga/7.png';
import logo8 from '@/assets/loga/8.png';
import logo9 from '@/assets/loga/9.png';
import logo10 from '@/assets/loga/10.png';

const partners = [
  { name: 'Partner 1', logo: logo1 },
  { name: 'Partner 2', logo: logo2 },
  { name: 'Partner 3', logo: logo3 },
  { name: 'Partner 4', logo: logo4 },
  { name: 'Partner 5', logo: logo5 },
  { name: 'Partner 6', logo: logo6 },
  { name: 'Partner 7', logo: logo7 },
  { name: 'Partner 8', logo: logo8 },
  { name: 'Partner 9', logo: logo9 },
  { name: 'Partner 10', logo: logo10 },
];

const titleTranslations = {
  pl: { our: 'Nasi', highlight: 'Partnerzy' },
  en: { our: 'Our', highlight: 'Partners' },
  nl: { our: 'Onze', highlight: 'Partners' },
};

export const PartnersSection = () => {
  const { language } = useLanguage();
  const title = titleTranslations[language];

  return (
    <section className="py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#94c43d]" />
            <span className="text-gray-900 font-display font-medium tracking-wider uppercase text-sm">Zaufali nam</span>
            <div className="w-8 h-0.5 bg-[#94c43d]" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {title.our} <span className="text-[#94c43d]">{title.highlight}</span>
          </h2>
        </motion.div>
      </div>

      {/* Carousel Container - Now outside container for Full Width */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-[#f5f3ef] to-transparent pointer-events-none opacity-100" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-[#f5f3ef] to-transparent pointer-events-none opacity-100" />

        {/* Scrolling Track */}
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
          <div className="flex items-center gap-8 py-6 pr-8">
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className={`flex-shrink-0 flex items-center justify-center transition-all duration-500 transform hover:scale-110 min-w-[140px] md:min-w-[200px] ${
                  index === 9
                    ? 'opacity-100 grayscale-0'
                    : 'grayscale hover:grayscale-0 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-48 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-8 py-6 pr-8" aria-hidden="true">
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-duplicate-${index}`}
                className={`flex-shrink-0 flex items-center justify-center transition-all duration-500 transform hover:scale-110 min-w-[140px] md:min-w-[200px] ${
                  index === 9
                    ? 'opacity-100 grayscale-0'
                    : 'grayscale hover:grayscale-0 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-48 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

