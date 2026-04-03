'use client';

import { useEffect, useState } from 'react';

interface ThreeDPhotoBackgroundProps {
  images: string[];
}

const COLS_DESKTOP = 6;
const COLS_MOBILE = 3;
const PER_COL = 5;

const DEPTH_DESKTOP: { z: number; y: number; opacity: number }[] = [
  { z: 0, y: 0, opacity: 0.35 },
  { z: 0, y: 0, opacity: 0.60 },
  { z: 0, y: 0, opacity: 0.90 },
  { z: 0, y: 0, opacity: 0.90 },
  { z: 0, y: 0, opacity: 0.60 },
  { z: 0, y: 0, opacity: 0.35 },
];

const DEPTH_MOBILE: { z: number; y: number; opacity: number }[] = [
  { z: 0, y: 0, opacity: 0.50 },
  { z: 0, y: 0, opacity: 0.85 },
  { z: 0, y: 0, opacity: 0.50 },
];

export const ThreeDPhotoBackground = ({ images }: ThreeDPhotoBackgroundProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (!images || images.length === 0) return null;

  const COLS = isMobile ? COLS_MOBILE : COLS_DESKTOP;
  const DEPTH = isMobile ? DEPTH_MOBILE : DEPTH_DESKTOP;

  const columns = Array.from({ length: COLS }, (_, colIdx) => {
    const cards = Array.from({ length: PER_COL }, (_, i) => {
      const imgIdx = (colIdx * PER_COL + i) % images.length;
      return images[imgIdx];
    });
    return [...cards, ...cards];
  });

  // Mobile: mniej agresywna perspektywa i mniejszy rotateZ
  const perspective = isMobile ? '1000px' : '800px';
  const boardRotateX = isMobile ? '15deg' : '24deg';
  const boardRotateZ = isMobile ? '-8deg' : '-14deg';
  const boardWidth = isMobile ? '140%' : '140%';
  const boardLeft = isMobile ? '-20%' : '-20%';
  const boardTop = isMobile ? '-10%' : '-15%';
  const colGap = isMobile ? '12px' : '32px';
  const animDurationEven = isMobile ? 80 : 140;
  const animDurationOdd = isMobile ? 86 : 146;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: '#080808',
        perspective,
        perspectiveOrigin: '50% 50%',
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 0,
      }}
    >
      <style>{`
        @keyframes scrollUp {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          from { transform: translateY(-50%); }
          to   { transform: translateY(0); }
        }
      `}</style>

      {/* 3D board */}
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          gap: colGap,
          alignItems: 'flex-start',
          width: boardWidth,
          left: boardLeft,
          top: boardTop,
          height: '130%',
          transform: `rotateX(${boardRotateX}) rotateZ(${boardRotateZ})`,
          transformStyle: 'preserve-3d',
          transformOrigin: 'center 40%',
        }}
      >
        {columns.map((col, colIdx) => {
          const depth = DEPTH[colIdx];
          const isEven = colIdx % 2 === 0;

          return (
            <div
              key={colIdx}
              style={{
                flex: '1 0 0',
                minWidth: isMobile ? '120px' : '220px',
                display: 'flex',
                flexDirection: 'column',
                transformStyle: 'preserve-3d',
                transform: `translateZ(${depth.z}px) translateY(${depth.y}px)`,
                opacity: depth.opacity,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: colGap,
                  animation: `${isEven ? 'scrollUp' : 'scrollDown'} ${isEven ? animDurationEven : animDurationOdd}s linear infinite`,
                }}
              >
                {col.map((src, imgIdx) => (
                  <div
                    key={imgIdx}
                    style={{
                      borderRadius: isMobile ? '8px' : '10px',
                      overflow: 'hidden',
                      border: '1px solid rgba(255,255,255,0.07)',
                      flexShrink: 0,
                      aspectRatio: '3/4',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.5)',
                      background: '#1a1a1a',
                    }}
                  >
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Edge fades */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '45%', background: 'linear-gradient(to bottom, #080808 20%, transparent)', zIndex: 3 }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%', background: 'linear-gradient(to top, #080808 20%, transparent)', zIndex: 3 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: isMobile ? '10%' : '18%', background: 'linear-gradient(to right, #080808, transparent)', zIndex: 3 }} />
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: isMobile ? '10%' : '18%', background: 'linear-gradient(to left, #080808, transparent)', zIndex: 3 }} />

      {/* Vignette & Overlay for text readability */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 4 }} />
      <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 140px 40px rgba(0,0,0,0.85)', zIndex: 2 }} />
    </div>
  );
};