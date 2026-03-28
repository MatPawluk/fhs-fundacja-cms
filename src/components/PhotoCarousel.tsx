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

const allPhotos = [dompolski1, teamDarek, dompolski2, teamAdrian, dompolski3, teamAdrian2, dompolski4, dompolski5, dompolski6, dompolski7];

const photoGroups: string[][] = [];
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
