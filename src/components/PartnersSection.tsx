import { motion } from 'framer-motion';
import { GradientText } from '@/components/GradientText';

import logoMakassatu from '@/assets/partner-makassatu.png';
import logoYinYang from '@/assets/partner-yinyang.png';
import logoCiekawostki from '@/assets/partner-ciekawostki.png';
import logoOuterspace from '@/assets/partner-outerspace.png';
import logoKozminski from '@/assets/partner-kozminski.png';

const partners = [
  { name: 'Makassatu Association', logo: logoMakassatu },
  { name: 'Yin Yang', logo: logoYinYang },
  { name: 'ciekawostki.app', logo: logoCiekawostki },
  { name: 'Outerspace', logo: logoOuterspace },
  { name: 'Kozminski University', logo: logoKozminski },
];

export const PartnersSection = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#f5f3ef' }}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Nasi <GradientText>Partnerzy</GradientText>
          </h2>
          
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
