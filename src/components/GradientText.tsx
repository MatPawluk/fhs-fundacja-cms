import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export const GradientText = ({ children, className = '' }: GradientTextProps) => {
  return (
    <span 
      className={`bg-gradient-to-r from-[#a8d84e] via-[#94c43d] to-[#7db32e] bg-clip-text text-transparent box-decoration-clone ${className}`}
      style={{ WebkitBoxDecorationBreak: 'clone' }}
    >
      {children}
    </span>
  );
};
