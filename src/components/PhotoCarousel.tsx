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

const allPhotos = [galeria0, galeria1, galeria2, galeria3, galeria4, galeria5, galeria6, galeria9, galeria10, galeria11];

const photoGroups = [];
for (let i = 0; i < allPhotos.length; i += 3) {
  photoGroups.push(allPhotos.slice(i, i + 3));
}

export const PhotoCarousel = () => {
  const repeatedGroups = [...photoGroups, ...photoGroups, ...photoGroups];

  return (
    <section className="py-8 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #f5f3ef 20%, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #f5f3ef 20%, transparent)' }} />

        <motion.div
          animate={{ x: ['0%', '-33.33%'] }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
          className="flex gap-6 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {repeatedGroups.map((group, groupIndex) => (
            <div key={`group-${groupIndex}`} className="flex-shrink-0 flex gap-4" style={{ height: '400px' }}>
              <div className="flex flex-col gap-4" style={{ width: '240px' }}>
                {group[0] && (
                  <div className="flex-1 rounded-2xl overflow-hidden shadow-md">
                    <img src={group[0]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                {group[1] && (
                  <div className="flex-1 rounded-2xl overflow-hidden shadow-md">
                    <img src={group[1]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
              </div>
              {group[2] && (
                <div className="rounded-2xl overflow-hidden shadow-md" style={{ width: '280px' }}>
                  <img src={group[2]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};