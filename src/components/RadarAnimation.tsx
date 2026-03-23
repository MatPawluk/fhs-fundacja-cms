import { motion } from 'framer-motion';

interface RadarAnimationProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const RadarAnimation = ({ size = 'md', className = '' }: RadarAnimationProps) => {
  const sizeClasses = {
    sm: 'w-48 h-48',
    md: 'w-72 h-72',
    lg: 'w-full h-full min-w-[500px] min-h-[500px]',
  };

  return (
    <div className={`relative ${sizeClasses[size]} mx-auto ${className}`}>
      {/* Outer circles */}
      <div className="absolute inset-0 rounded-full border border-lime/20" />
      <div className="absolute inset-[10%] rounded-full border border-lime/25" />
      <div className="absolute inset-[20%] rounded-full border border-lime/30" />
      <div className="absolute inset-[30%] rounded-full border border-lime/35" />
      <div className="absolute inset-[40%] rounded-full border border-lime/40" />
      
      {/* Center dot - static, no ping */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-lime shadow-lg shadow-lime/50" />
      </div>
      
      {/* Rotating radar line */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/2 left-1/2 w-1/2 h-1 origin-left bg-gradient-to-r from-lime to-transparent rounded-full" />
      </motion.div>
      
      {/* Radar sweep gradient */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, hsl(75 100% 50% / 0.3) 45deg, transparent 90deg)',
        }}
      />
      
      {/* Static blip dots - no pulsing animation */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-lime shadow-lg shadow-lime/50" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-lime shadow-lg shadow-lime/50" />
      <div className="absolute top-1/3 left-1/3 w-3.5 h-3.5 rounded-full bg-lime shadow-lg shadow-lime/50" />
    </div>
  );
};
