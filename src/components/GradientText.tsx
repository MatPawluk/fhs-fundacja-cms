import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export const GradientText = ({ children, className = '' }: GradientTextProps) => {
  return (
    <span 
      className={`bg-gradient-to-r from-[#e8ff80] via-[#c4ff00] to-[#d4ff40] bg-clip-text text-transparent box-decoration-clone ${className}`}
      style={{ WebkitBoxDecorationBreak: 'clone' }}
    >
      {children}
    </span>
  );
};
