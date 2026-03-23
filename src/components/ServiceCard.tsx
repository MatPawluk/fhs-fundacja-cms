import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

export const ServiceCard = ({ icon, title, description, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-white rounded-3xl p-8 h-full border border-gray-100 transition-all duration-500 hover:border-lime/30 hover:shadow-xl overflow-hidden">
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-lime/0 to-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon */}
        <div className="relative mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gray-900 flex items-center justify-center text-lime transition-all duration-500 group-hover:scale-110 group-hover:bg-lime group-hover:text-gray-900">
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="font-display font-semibold text-xl text-gray-900 mb-3 group-hover:text-gray-900 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Arrow indicator */}
        <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};
