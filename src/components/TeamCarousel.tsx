import { motion } from 'framer-motion';

import dompolski1 from '@/assets/dompolski-1.jpg';
import dompolski2 from '@/assets/dompolski-2.jpg';
import dompolski3 from '@/assets/dompolski-3.jpg';
import dompolski4 from '@/assets/dompolski-4.jpg';
import dompolski5 from '@/assets/dompolski-5.jpg';
import dompolski6 from '@/assets/dompolski-6.jpg';
import dompolski7 from '@/assets/dompolski-7.jpg';
import teamDarek from '@/assets/team-darek.jpg';
import teamAdrian from '@/assets/team-adrian.jpg';
import teamAdrian2 from '@/assets/team-adrian-2.jpg';

const teamPhotos = [
  dompolski1, teamDarek, dompolski2, teamAdrian, dompolski3, teamAdrian2,
  dompolski4, dompolski5, dompolski6, dompolski7,
];

export const TeamCarousel = () => {
  const duplicatedPhotos = [...teamPhotos, ...teamPhotos];

  return (
    <section className="py-16 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
      <div className="relative py-4">
        <div className="absolute left-0 -top-4 -bottom-4 w-48 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #f5f3ef 30%, transparent)' }} />
        <div className="absolute right-0 -top-4 -bottom-4 w-48 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #f5f3ef 30%, transparent)' }} />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
          className="flex gap-6 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {duplicatedPhotos.map((photo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-40 rounded-2xl overflow-hidden shadow-md"
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
