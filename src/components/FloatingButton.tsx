import { motion } from 'framer-motion';

interface FloatingButtonProps {
  label: string;
  position: 'left' | 'right';
  className?: string;
}

export const FloatingButton = ({ label, position, className = '' }: FloatingButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: position === 'left' ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`absolute ${position === 'left' ? 'left-4 lg:left-8' : 'right-4 lg:right-8'} ${className}`}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="px-6 py-3 bg-gray-800/80 backdrop-blur-sm border border-lime/30 rounded-full shadow-lg shadow-lime/10"
      >
        <span className="text-lime font-medium text-sm">{label}</span>
      </motion.div>
    </motion.div>
  );
};
