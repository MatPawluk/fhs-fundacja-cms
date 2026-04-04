import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

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

// Video imports
import mov1 from '@/assets/mov/DZIECIAK ZE SZKOŁY _skompresowany.webm';
import mov2 from '@/assets/mov/KHEBA - wizytówka_beznapisów_skompresowany.webm';
import mov3 from '@/assets/mov/NAGRANIA DOMU2_skompresowany.webm';
import mov4 from '@/assets/mov/OLA_wizytówka_skompresowany.webm';
import mov5 from '@/assets/mov/SZPITAL SOMA_skompresowany.webm';
import mov6 from '@/assets/mov/University of the Gambia (1)_skompresowany.webm';
import mov7 from '@/assets/mov/machanie_wioska_skompresowany.webm';

const allMedia = [
  dompolski1, 
  mov1,
  teamDarek, 
  mov2,
  dompolski2, 
  mov3,
  teamAdrian, 
  mov4,
  dompolski3, 
  mov5,
  teamAdrian2, 
  mov6,
  dompolski4, 
  mov7,
  dompolski5, 
  dompolski6, 
  dompolski7
];

const mediaGroups: string[][] = [];
for (let i = 0; i < allMedia.length; i += 3) {
  mediaGroups.push(allMedia.slice(i, i + 3));
}

const LazyVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  // We use a larger rootMargin to "warm up" the video before it enters the viewport
  const isInView = useInView(videoRef, { amount: 0.01, margin: "200px 0px 200px 0px" });

  return (
    <div ref={videoRef as any} className="w-full h-full bg-gray-100 flex items-center justify-center overflow-hidden">
      {isInView ? (
        <video
          src={src}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          style={{ transform: 'translateZ(0)' }}
        />
      ) : (
        <div className="w-full h-full bg-[#94c43d]/5 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-t-transparent border-[#94c43d]/20 animate-spin" />
        </div>
      )}
    </div>
  );
};

export const PhotoCarousel = () => {
  // Reducing repetition to 2 is enough for most screens if the content is wide
  const repeatedGroups = [...mediaGroups, ...mediaGroups];

  return (
    <section className="py-8 overflow-hidden" style={{ backgroundColor: '#f5f3ef' }}>
      <div className="relative overflow-hidden" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #f5f3ef 20%, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #f5f3ef 20%, transparent)' }} />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
          className="flex gap-6 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {repeatedGroups.map((group, groupIndex) => (
            <div key={`group-${groupIndex}`} className="flex-shrink-0 flex gap-4" style={{ height: '400px' }}>
              <div className="flex flex-col gap-4" style={{ width: '240px' }}>
                {group[0] && (
                  <div className="flex-1 rounded-2xl overflow-hidden shadow-md">
                    {group[0].endsWith('.webm') ? (
                      <LazyVideo src={group[0]} />
                    ) : (
                      <img src={group[0]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    )}
                  </div>
                )}
                {group[1] && (
                  <div className="flex-1 rounded-2xl overflow-hidden shadow-md">
                    {group[1].endsWith('.webm') ? (
                      <LazyVideo src={group[1]} />
                    ) : (
                      <img src={group[1]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    )}
                  </div>
                )}
              </div>
              {group[2] && (
                <div className="rounded-2xl overflow-hidden shadow-md" style={{ width: '280px' }}>
                  {group[2].endsWith('.webm') ? (
                    <LazyVideo src={group[2]} />
                  ) : (
                    <img src={group[2]} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  )}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
