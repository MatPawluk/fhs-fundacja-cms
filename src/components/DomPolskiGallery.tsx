import { Carousel } from '@ark-ui/react/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
import domPolskiGambia from '@/assets/dom-polski-gambia.jpg';

const images = [
  domPolskiGambia,
  galeria0,
  galeria1,
  galeria2,
  galeria3,
  galeria4,
  galeria5,
  galeria6,
  galeria9,
  galeria10,
  galeria11,
];

export const DomPolskiGallery = () => {
  return (
    <Carousel.Root className="w-full">
      {/* Main image */}
      <div className="relative rounded-2xl overflow-hidden mb-3">
        <Carousel.Viewport className="overflow-hidden rounded-2xl">
          <Carousel.ItemGroup className="flex">
            {images.map((img, index) => (
              <Carousel.Item key={index} index={index} className="min-w-0 shrink-0 grow-0 basis-full">
                <img
                  src={img}
                  alt={`Dom Polski ${index + 1}`}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </Carousel.Item>
            ))}
          </Carousel.ItemGroup>
        </Carousel.Viewport>

        <Carousel.PrevTrigger className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-md">
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </Carousel.PrevTrigger>
        <Carousel.NextTrigger className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-md">
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </Carousel.NextTrigger>
      </div>

      {/* Thumbnails */}
      <Carousel.IndicatorGroup className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {images.map((img, index) => (
          <Carousel.Indicator
            key={index}
            index={index}
            className="shrink-0 w-16 h-12 rounded-lg overflow-hidden cursor-pointer ring-2 ring-transparent data-[current]:ring-[#94c43d] transition-all opacity-60 data-[current]:opacity-100 hover:opacity-100"
          >
            <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
          </Carousel.Indicator>
        ))}
      </Carousel.IndicatorGroup>
    </Carousel.Root>
  );
};
