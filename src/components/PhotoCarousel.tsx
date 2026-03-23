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

const topRow = [galeria0, galeria1, galeria2, galeria3, galeria4];
const bottomRow = [galeria5, galeria6, galeria9, galeria10, galeria11];

export const PhotoCarousel = () => {
  const topPhotos = [...topRow, ...topRow, ...topRow];
  const bottomPhotos = [...bottomRow, ...bottomRow, ...bottomRow];

  return (
    <section className="py-16 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
      <div className="relative space-y-4">
        {/* Top row - moves right */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #f5f3ef 20%, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #f5f3ef 20%, transparent)' }} />
          
          <motion.div
            animate={{ x: ['0%', '-33.33%'] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
            className="flex gap-4 will-change-transform"
            style={{ width: 'max-content' }}
          >
            {topPhotos.map((photo, index) => (
              <div
                key={`top-${index}`}
                className="flex-shrink-0 w-72 h-48 rounded-2xl overflow-hidden shadow-md"
              >
                <img
                  src={photo}
                  alt=""
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom row - moves left */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #f5f3ef 20%, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #f5f3ef 20%, transparent)' }} />
          
          <motion.div
            animate={{ x: ['-33.33%', '0%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
            className="flex gap-4 will-change-transform"
            style={{ width: 'max-content' }}
          >
            {bottomPhotos.map((photo, index) => (
              <div
                key={`bottom-${index}`}
                className="flex-shrink-0 w-72 h-48 rounded-2xl overflow-hidden shadow-md"
              >
                <img
                  src={photo}
                  alt=""
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
