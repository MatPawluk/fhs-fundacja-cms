import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  imageUrl?: string;
  overlayOpacity?: number;
  variant?: 'default' | 'asian' | 'dots';
}

export const ParallaxSection = ({ 
  children, 
  className = '', 
  imageUrl,
  overlayOpacity = 0.7,
  variant = 'default'
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {imageUrl && (
        <>
          {/* Parallax moving background */}
          <motion.div 
            style={{ y }}
            className="absolute inset-0 w-full h-[130%] -top-[15%]"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${imageUrl})`,
                filter: 'blur(2px)'
              }}
            />
          </motion.div>
          {/* Static overlay that covers entire section - doesn't move with parallax */}
          <div 
            className="absolute inset-0 bg-gray-900 z-[1]" 
            style={{ opacity: overlayOpacity }}
          />
        </>
      )}
      
      {variant === 'dots' && (
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(196, 255, 0, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
