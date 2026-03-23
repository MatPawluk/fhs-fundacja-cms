import { motion } from 'framer-motion';

import galeria0 from '@/assets/onas-galeria-0.png';
import galeria1 from '@/assets/onas-galeria-1.png';
import galeria2 from '@/assets/onas-galeria-2.png';
import galeria3 from '@/assets/onas-galeria-3.png';
import galeria4 from '@/assets/onas-galeria-4.jpg';
import galeria5 from '@/assets/onas-galeria-5.jpg';
import galeria6 from '@/assets/onas-galeria-6.jpg';
import galeria9 from '@/assets/onas-galeria-9.jpg';
import galeria10 from '@/assets/onas-galeria-10.png';
import galeria11 from '@/assets/onas-galeria-11.png';

const teamPhotos = [
  galeria0, galeria1, galeria2, galeria3, galeria4, galeria5,
  galeria6, galeria9, galeria10, galeria11,
];

export const TeamCarousel = () => {
  const duplicatedPhotos = [...teamPhotos, ...teamPhotos];

  return (
    <section className="py-16 overflow-hidden" style={{ backgroundColor: '#050608' }}>
      <div className="relative py-4">
        <div className="absolute left-0 -top-4 -bottom-4 w-48 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #050608 30%, transparent)' }} />
        <div className="absolute right-0 -top-4 -bottom-4 w-48 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #050608 30%, transparent)' }} />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
          className="flex gap-6 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {duplicatedPhotos.map((photo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-40 rounded-2xl overflow-hidden"
              style={{
                transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`,
              }}
            >
              <img
                src={photo}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
