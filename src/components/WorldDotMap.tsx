import { motion } from 'framer-motion';
import { useState } from 'react';

// World map coordinates (simplified grid representation)
// Each point is [x, y] normalized to 0-100 range
const worldMapPoints: [number, number][] = [];

// Generate a simplified world map using dots
// This creates a dot-based representation of continents
const generateWorldMapPoints = () => {
  const points: [number, number][] = [];
  
  // Europe
  for (let x = 45; x <= 55; x += 2) {
    for (let y = 25; y <= 40; y += 2) {
      if (Math.random() > 0.3) points.push([x, y]);
    }
  }
  
  // Asia (including China)
  for (let x = 55; x <= 85; x += 2) {
    for (let y = 20; y <= 50; y += 2) {
      if (Math.random() > 0.25) points.push([x, y]);
    }
  }
  
  // North America
  for (let x = 10; x <= 35; x += 2) {
    for (let y = 20; y <= 45; y += 2) {
      if (Math.random() > 0.35) points.push([x, y]);
    }
  }
  
  // South America
  for (let x = 20; x <= 35; x += 2) {
    for (let y = 50; y <= 75; y += 2) {
      if (Math.random() > 0.4) points.push([x, y]);
    }
  }
  
  // Africa
  for (let x = 42; x <= 58; x += 2) {
    for (let y = 40; y <= 70; y += 2) {
      if (Math.random() > 0.35) points.push([x, y]);
    }
  }
  
  // Australia
  for (let x = 75; x <= 88; x += 2) {
    for (let y = 60; y <= 72; y += 2) {
      if (Math.random() > 0.4) points.push([x, y]);
    }
  }
  
  return points;
};

// Pre-generate points (stable across renders)
const staticPoints = generateWorldMapPoints();

// Poland and China approximate positions
const POLAND_POS = { x: 51, y: 32 };
const CHINA_POS = { x: 75, y: 35 };

interface WorldDotMapProps {
  className?: string;
}

export const WorldDotMap = ({ className = '' }: WorldDotMapProps) => {
  const [hoveredLocation, setHoveredLocation] = useState<'poland' | 'china' | null>(null);

  // Calculate if a point is near Poland or China
  const isNearPoland = (x: number, y: number) => {
    return Math.abs(x - POLAND_POS.x) < 4 && Math.abs(y - POLAND_POS.y) < 4;
  };

  const isNearChina = (x: number, y: number) => {
    return Math.abs(x - CHINA_POS.x) < 6 && Math.abs(y - CHINA_POS.y) < 6;
  };

  return (
    <div className={`relative w-full aspect-[2/1] ${className}`}>
      <svg
        viewBox="0 0 100 80"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background dots - gray */}
        {staticPoints.map((point, index) => {
          const isPoland = isNearPoland(point[0], point[1]);
          const isChina = isNearChina(point[0], point[1]);
          const isHighlighted = isPoland || isChina;
          
          return (
            <motion.circle
              key={index}
              cx={point[0]}
              cy={point[1]}
              r={isHighlighted ? 0.8 : 0.6}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: isHighlighted ? 1 : 0.4, 
                scale: 1,
                fill: isHighlighted ? '#94c43d' : '#6b7280'
              }}
              transition={{ 
                delay: index * 0.002,
                duration: 0.3
              }}
              className={isHighlighted ? 'drop-shadow-[0_0_3px_#94c43d]' : ''}
            />
          );
        })}

        {/* Poland marker */}
        <motion.g
          onMouseEnter={() => setHoveredLocation('poland')}
          onMouseLeave={() => setHoveredLocation(null)}
          className="cursor-pointer"
        >
          <motion.circle
            cx={POLAND_POS.x}
            cy={POLAND_POS.y}
            r={2}
            fill="#94c43d"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="drop-shadow-[0_0_8px_#94c43d]"
          />
          <motion.circle
            cx={POLAND_POS.x}
            cy={POLAND_POS.y}
            r={4}
            fill="transparent"
            stroke="#94c43d"
            strokeWidth={0.3}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 2], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.g>

        {/* China marker */}
        <motion.g
          onMouseEnter={() => setHoveredLocation('china')}
          onMouseLeave={() => setHoveredLocation(null)}
          className="cursor-pointer"
        >
          <motion.circle
            cx={CHINA_POS.x}
            cy={CHINA_POS.y}
            r={2}
            fill="#94c43d"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="drop-shadow-[0_0_8px_#94c43d]"
          />
          <motion.circle
            cx={CHINA_POS.x}
            cy={CHINA_POS.y}
            r={4}
            fill="transparent"
            stroke="#94c43d"
            strokeWidth={0.3}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 2], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.g>

        {/* Connecting line */}
        <motion.path
          d={`M ${POLAND_POS.x} ${POLAND_POS.y} Q ${(POLAND_POS.x + CHINA_POS.x) / 2} ${POLAND_POS.y - 15} ${CHINA_POS.x} ${CHINA_POS.y}`}
          fill="none"
          stroke="#94c43d"
          strokeWidth={0.4}
          strokeDasharray="2 1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        {/* Animated dot on path */}
        <motion.circle
          r={0.8}
          fill="#94c43d"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            offsetDistance: ['0%', '50%', '100%', '100%']
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            offsetPath: `path('M ${POLAND_POS.x} ${POLAND_POS.y} Q ${(POLAND_POS.x + CHINA_POS.x) / 2} ${POLAND_POS.y - 15} ${CHINA_POS.x} ${CHINA_POS.y}')`
          }}
          className="drop-shadow-[0_0_4px_#94c43d]"
        />
      </svg>

      {/* Labels */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredLocation === 'poland' ? 1 : 0.8 }}
        className="absolute left-[48%] top-[35%] transform -translate-x-1/2"
      >
        <div className="bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-700">
          <p className="text-white text-sm font-medium">Warszawa</p>
          <p className="text-gray-400 text-xs">Polska</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredLocation === 'china' ? 1 : 0.8 }}
        className="absolute left-[73%] top-[38%] transform -translate-x-1/2"
      >
        <div className="bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-700">
          <p className="text-white text-sm font-medium">Shanghai</p>
          <p className="text-gray-400 text-xs">China</p>
        </div>
      </motion.div>
    </div>
  );
};