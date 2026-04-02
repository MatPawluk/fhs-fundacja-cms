import { motion } from 'framer-motion';
import { GradientText } from '@/components/GradientText';
import { useLanguage } from '@/contexts/LanguageContext';

import logoKozminski from '@/assets/partner-kozminski-new.png';
import logoYinYang from '@/assets/partner-yinyang-new.png';
import logoMatchventure from '@/assets/partner-matchventure.png';
import logoSmileForAfrica from '@/assets/partner-smile-for-africa.png';
import logoMinistryEducation from '@/assets/partner-ministry-higher-education.png';
import logoMinistryHealth from '@/assets/partner-ministry-health.png';
import logoKardynalDziwisz from '@/assets/partner-kardynal-dziwisz.png';
import logoBishopMendy from '@/assets/partner-bishop-mendy.png';
import logoLightRays from '@/assets/partner-light-rays.png';
import logoMaxSzarik from '@/assets/partner-max-szarik.png';

const partners = [
  { name: 'Kozminski University', logo: logoKozminski },
  { name: 'MV / Matchventure', logo: logoMatchventure },
  { name: 'Yin Yang', logo: logoYinYang },
  { name: 'Smile for Africa', logo: logoSmileForAfrica },
  { name: 'Ministry of Higher Education', logo: logoMinistryEducation },
  { name: 'Ministry of Health', logo: logoMinistryHealth },
  { name: 'Kardynał Dziwisz', logo: logoKardynalDziwisz },
  { name: 'Bishop Gabriel Mendy', logo: logoBishopMendy },
  { name: 'Light Rays', logo: logoLightRays },
  { name: 'Max & Szarik', logo: logoMaxSzarik },
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
    <section className="py-20" style={{ backgroundColor: '#f5f3ef' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#94c43d]" />
            <span className="text-[#94c43d] font-display font-medium tracking-wider uppercase text-sm">Zaufali nam</span>
            <div className="w-8 h-px bg-[#94c43d]" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {title.our} <span className="text-[#94c43d]">{title.highlight}</span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-[#f5f3ef] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-[#f5f3ef] to-transparent pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
            <div className="flex items-center gap-16 py-8 pr-16 md:pr-32">
              {partners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100 transform hover:scale-110 min-w-[120px] md:min-w-[180px]"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-28 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-16 md:gap-32 py-8 pr-16 md:pr-32" aria-hidden="true">
              {partners.map((partner, index) => (
                <div
                  key={`${partner.name}-duplicate-${index}`}
                  className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100 transform hover:scale-110 min-w-[120px] md:min-w-[180px]"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 md:h-20 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

