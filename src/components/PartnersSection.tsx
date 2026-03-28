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
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900">
            {title.our} <GradientText>{title.highlight}</GradientText>
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
