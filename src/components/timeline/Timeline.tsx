import { useCallback, useRef, useState } from 'react';
import { motion } from 'motion/react';
import type { EraYear } from '@/types';
import { ERA_YEARS } from '@/types';
import { getYearFromIndex, getYearIndex } from '@/utils/year';
import { useChronoWebStore } from '@/store/chronowebStore';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getEraTheme } from '@/theme/registry';

interface TimelineProps {
  onYearSelect?: (year: EraYear) => void;
}

export function Timeline({ onYearSelect }: TimelineProps = {}) {
  const { destinationYear, setDestinationYear, isTraveling } =
    useChronoWebStore();
  const reducedMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const currentIndex = getYearIndex(destinationYear);
  const progress = currentIndex / (ERA_YEARS.length - 1);

  const selectYear = useCallback(
    (year: EraYear) => {
      setDestinationYear(year);
      onYearSelect?.(year);
    },
    [setDestinationYear, onYearSelect],
  );

  const updateFromPosition = useCallback(
    (clientX: number) => {
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const ratio = Math.max(
        0,
        Math.min(1, (clientX - rect.left) / rect.width),
      );
      const index = Math.round(ratio * (ERA_YEARS.length - 1));
      const year = getYearFromIndex(index);
      selectYear(year);
    },
    [selectYear],
  );

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isTraveling) return;
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateFromPosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || isTraveling) return;
    updateFromPosition(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent, year: EraYear) => {
    if (isTraveling) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      selectYear(year);
    }
  };

  return (
    <div
      className="w-full max-w-2xl"
      role="group"
      aria-label="Timeline year selector"
    >
      <div className="mb-3 flex justify-between font-mono text-[10px] uppercase tracking-widest text-red-900/60">
        <span>1995</span>
        <span>Timeline</span>
        <span>2026</span>
      </div>

      <div
        ref={trackRef}
        className="timeline-track relative h-2 cursor-pointer rounded-full bg-red-950/40"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        role="slider"
        aria-valuemin={1995}
        aria-valuemax={2026}
        aria-valuenow={destinationYear}
        aria-label={`Selected year: ${destinationYear}`}
        tabIndex={isTraveling ? -1 : 0}
        onKeyDown={(e) => {
          if (isTraveling) return;
          const idx = getYearIndex(destinationYear);
          if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
            e.preventDefault();
            const next = getYearFromIndex(
              Math.min(ERA_YEARS.length - 1, idx + 1),
            );
            selectYear(next);
          } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
            e.preventDefault();
            const prev = getYearFromIndex(Math.max(0, idx - 1));
            selectYear(prev);
          }
        }}
      >
        {/* Progress fill */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-red-800 to-red-500"
          style={{ width: `${progress * 100}%` }}
          layout={!reducedMotion}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />

        {/* Thumb */}
        <motion.div
          className="absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-2 border-red-400 bg-red-600 shadow-[0_0_12px_rgba(239,68,68,0.5)]"
          style={{ left: `calc(${progress * 100}% - 10px)` }}
          layout={!reducedMotion}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          whileHover={reducedMotion ? undefined : { scale: 1.2 }}
        />
      </div>

      {/* Year markers */}
      <div className="mt-4 flex justify-between">
        {ERA_YEARS.map((year) => {
          const theme = getEraTheme(year);
          const isActive = year === destinationYear;

          return (
            <button
              key={year}
              onClick={() => !isTraveling && selectYear(year)}
              onKeyDown={(e) => handleKeyDown(e, year)}
              disabled={isTraveling}
              className={`flex flex-col items-center gap-1 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:opacity-40 ${
                isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
              }`}
              aria-label={`Select year ${year}: ${theme.metadata.title}`}
              aria-pressed={isActive}
            >
              <motion.div
                className={`h-2 w-2 rounded-full ${
                  isActive ? 'bg-red-400' : 'bg-red-900/60'
                }`}
                animate={
                  isActive && !reducedMotion ? { scale: [1, 1.3, 1] } : {}
                }
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="font-mono text-[10px] text-red-800/80">
                {year}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
