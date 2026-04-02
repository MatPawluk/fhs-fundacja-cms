import { useMemo } from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import DottedMap from 'dotted-map/without-countries';
import worldMapData from '@/data/worldMapData.json';

interface WorldDotMapProps {
  className?: string;
}

const WARSAW_LAT = 52.237049;
const WARSAW_LNG = 21.017532;
const BANJUL_LAT = 13.4549; // Banjul, Gambia
const BANJUL_LNG = -16.5790;

export const WorldDotMap = ({ className = '' }: WorldDotMapProps) => {
  const { points, warsawPoint, banjulPoint, viewBox } = useMemo(() => {
    // @ts-ignore
    const map = new DottedMap({ map: worldMapData });

    // Add pins for logic extraction
    map.addPin({ lat: WARSAW_LAT, lng: WARSAW_LNG, svgOptions: { color: '#94c43d' } });
    map.addPin({ lat: BANJUL_LAT, lng: BANJUL_LNG, svgOptions: { color: '#94c43d' } });

    const allPoints: { x: number; y: number; svgOptions?: { color?: string } }[] = map.getPoints();

    // Find our specific pins
    // In our height=60 grid, Warsaw is north (~y=16), Banjul is south (~y=33)
    const pins = allPoints.filter(p => p.svgOptions?.color === '#94c43d');
    const wp = pins.find(p => p.y < 25);
    const bp = pins.find(p => p.y >= 25);

    // Calculate dynamic viewBox based on data (usually 119x60 for height=60)
    // but using actual point bounds for precision
    const allX = allPoints.map(p => p.x);
    const allY = allPoints.map(p => p.y);
    const minX = Math.min(...allX);
    const maxX = Math.max(...allX);
    const minY = Math.min(...allY);
    const maxY = Math.max(...allY);

    // Adding 1 unit padding so circles on edges aren't clipped
    const paddedViewBox = `${minX - 1} ${minY - 1} ${maxX - minX + 2} ${maxY - minY + 2}`;

    return {
      points: allPoints,
      warsawPoint: wp || { x: 61, y: 16 },
      banjulPoint: bp || { x: 53, y: 33 },
      viewBox: paddedViewBox
    };
  }, []);

  // Arc control point for a nice curve
  const arcQx = (warsawPoint.x + banjulPoint.x) / 2 - 12;
  const arcQy = (warsawPoint.y + banjulPoint.y) / 2 - 4;
  const arcPath = `M ${warsawPoint.x} ${warsawPoint.y} Q ${arcQx} ${arcQy} ${banjulPoint.x} ${banjulPoint.y}`;

  return (
    <div className={`relative w-full ${className}`} style={{ userSelect: 'none' }}>
      <svg
        className="w-full h-auto block"
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Dots */}
        {points.map((p, i) => {
          const isPin = p.svgOptions?.color === '#94c43d';
          return (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={0.22}
              fill={isPin ? 'transparent' : '#374151'}
              opacity={isPin ? 0 : 0.4}
            />
          );
        })}

        {/* The Connection Arc */}
        <motion.path
          d={arcPath}
          fill="none"
          stroke="#94c43d"
          strokeWidth={0.3}
          strokeDasharray="1.5 1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2.5, delay: 0.5, ease: 'easeInOut' }}
        />

        {/* Animated plane dot along arc */}
        <motion.circle
          r={0.6}
          fill="#94c43d"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0], offsetDistance: ['0%', '50%', '100%', '100%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear', delay: 2 }}
          style={{ offsetPath: `path('${arcPath}')` } as any}
        />

        {/* Warsaw Pin Group */}
        <g>
          {/* Outer ripples */}
          <motion.circle
            cx={warsawPoint.x} cy={warsawPoint.y} r={1.6}
            fill="none" stroke="#94c43d" strokeWidth={0.2}
            animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            style={{ transformOrigin: `${warsawPoint.x}px ${warsawPoint.y}px` }}
          />
          {/* Inner core */}
          <circle cx={warsawPoint.x} cy={warsawPoint.y} r={0.7} fill="#94c43d" />
        </g>

        {/* Banjul Pin Group */}
        <g>
          {/* Outer ripples */}
          <motion.circle
            cx={banjulPoint.x} cy={banjulPoint.y} r={1.6}
            fill="none" stroke="#94c43d" strokeWidth={0.2}
            animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 1 }}
            style={{ transformOrigin: `${banjulPoint.x}px ${banjulPoint.y}px` }}
          />
          {/* Inner core */}
          <circle cx={banjulPoint.x} cy={banjulPoint.y} r={0.7} fill="#94c43d" />
        </g>
      </svg>

      {/* HTML Labels — Positioned with CSS using percentages based on viewBox logic */}
      {/* Since we know the coordinate space, we can map to percentages for absolute positioning */}
      {/* But for perfect alignment with SVG elements, it's safer to keep them as foreignObject or absolute positioned divs */}

      <div
        className="absolute pointer-events-none"
        style={{
          left: '52.5%', // Manual tweak for Warsaw based on grid (61/119)
          top: '28%',   // (16/60)
          transform: 'translateX(-50%)',
        }}
      >
        <div className="bg-gray-900/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-gray-700 whitespace-nowrap">
          <p className="text-white text-[10px] font-semibold">Warszawa, Polska</p>
        </div>
      </div>

      <div
        className="absolute pointer-events-none"
        style={{
          left: '46%', // Manual tweak for Banjul (53/119)
          top: '55%', // (33/60 + offset)
          transform: 'translateX(-50%)',
        }}
      >
        <div className="bg-gray-900/80 backdrop-blur-sm px-2 py-1 rounded-lg border border-gray-700 whitespace-nowrap">
          <p className="text-white text-[10px] font-semibold">Banjul, Gambia</p>
        </div>
      </div>
    </div>
  );
};
