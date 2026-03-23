import { motion } from 'framer-motion';

interface ChineseCharactersProps {
  characters: string;
  position?: 'left' | 'right' | 'center';
  className?: string;
  opacity?: number;
}

export const ChineseCharacters = ({ 
  characters, 
  position = 'right',
  className = '',
  opacity = 0.15
}: ChineseCharactersProps) => {
  const positionClasses = {
    left: 'left-4 lg:left-12',
    right: 'right-4 lg:right-12',
    center: 'left-1/2 -translate-x-1/2'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: opacity, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`absolute ${positionClasses[position]} pointer-events-none select-none ${className}`}
    >
      <div className="font-display text-[#c4ff00] writing-vertical text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold leading-none tracking-widest" style={{ writingMode: 'vertical-rl' }}>
        {characters.split('').map((char, index) => (
          <span key={index} className="block">{char}</span>
        ))}
      </div>
    </motion.div>
  );
};
