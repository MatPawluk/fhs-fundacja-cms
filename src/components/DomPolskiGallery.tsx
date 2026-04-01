import { Carousel } from '@ark-ui/react/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import dompolski1 from '@/assets/dompolski-1.jpg';
import dompolski2 from '@/assets/dompolski-2.jpg';
import dompolski3 from '@/assets/dompolski-3.jpg';
import dompolski4 from '@/assets/dompolski-4.jpg';
import dompolski5 from '@/assets/dompolski-5.jpg';
import dompolski6 from '@/assets/dompolski-6.jpg';
import dompolski7 from '@/assets/dompolski-7.jpg';

const images = [
  dompolski1, dompolski2, dompolski3, dompolski4, dompolski5, dompolski6, dompolski7,
];

export const DomPolskiGallery = () => {
  return (
    <Carousel.Root className="w-full max-w-[90vw] md:max-w-full mx-auto" slideCount={images.length}>
      <div className="relative rounded-2xl overflow-hidden mb-3">
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

        <Carousel.PrevTrigger className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-md">
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </Carousel.PrevTrigger>
        <Carousel.NextTrigger className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-md">
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </Carousel.NextTrigger>
      </div>

      <Carousel.IndicatorGroup className="flex gap-2 overflow-x-auto pb-1 max-w-full">
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
