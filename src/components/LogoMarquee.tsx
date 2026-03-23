import { motion } from 'framer-motion';

const companies = [
  'TechPol', 'SinoTrade', 'EuroAsia', 'GlobalLink', 
  'InnoVest', 'AsiaConnect', 'PrimeExport', 'NexGen'
];

export const LogoMarquee = () => {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f5f3ef] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f5f3ef] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee">
        {[...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-12 flex items-center justify-center"
          >
            <span className="text-2xl font-display font-bold text-gray-400 hover:text-[#94c43d] transition-colors duration-300 cursor-default">
              {company}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const LogoMarqueeLight = () => {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f5f3ef] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f5f3ef] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee">
        {[...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-12 flex items-center justify-center"
          >
            <span className="text-2xl font-display font-bold text-gray-400 hover:text-[#94c43d] transition-colors duration-300 cursor-default">
              {company}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
