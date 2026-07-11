import type { CSSProperties } from 'react';
import { motion } from 'motion/react';
import { useChronoWebStore } from '@/store/chronowebStore';
import { TRAVEL_PHASES } from '@/animations/travel';
import { GLITCH_CHARS } from '@/animations/travel';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { formatYear } from '@/utils/year';
import { PRESENT_YEAR } from '@/types';

function Spark({ style }: { style: CSSProperties }) {
  return (
    <motion.div
      className="absolute h-1 w-1 rounded-full bg-cyan-300"
      style={style}
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}

function GlitchText({ text }: { text: string }) {
  const chars = text.split('');
  return (
    <span className="font-mono text-6xl font-bold tracking-widest text-red-500 sm:text-8xl">
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          animate={{
            opacity: [1, 0.3, 1],
            x: [0, Math.random() * 6 - 3, 0],
          }}
          transition={{
            duration: 0.1,
            repeat: Infinity,
            repeatDelay: Math.random() * 0.2,
          }}
        >
          {Math.random() > 0.7
            ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
            : char}
        </motion.span>
      ))}
    </span>
  );
}

export function TravelAnimation() {
  const { travelPhase, destinationYear, isTraveling } = useChronoWebStore();
  const reducedMotion = useReducedMotion();

  if (!isTraveling) return null;

  const currentPhase = TRAVEL_PHASES.find((p) => p.phase === travelPhase);
  const label = currentPhase?.label ?? 'Initializing...';

  if (reducedMotion) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        role="alert"
        aria-live="assertive"
        aria-label="Time travel in progress"
      >
        <p className="font-mono text-red-400">
          Traveling to {formatYear(destinationYear)}...
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
      role="alert"
      aria-live="assertive"
      aria-label="Time travel in progress"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Flicker overlay */}
      {(travelPhase === 'flicker' || travelPhase === 'glitch') && (
        <motion.div
          className="absolute inset-0 bg-red-500/10"
          animate={{ opacity: [0, 0.3, 0, 0.5, 0, 0.2, 0] }}
          transition={{ duration: 0.6, repeat: 2 }}
        />
      )}

      {/* Camera shake container */}
      <motion.div
        className="flex flex-col items-center gap-8"
        animate={
          travelPhase === 'flicker' || travelPhase === 'glitch'
            ? { x: [0, -8, 8, -5, 5, -2, 2, 0], y: [0, 4, -4, 2, -2, 0] }
            : { x: 0, y: 0 }
        }
        transition={{ duration: 0.5 }}
      >
        {/* Glitch year display */}
        <div className="relative">
          {travelPhase === 'glitch' || travelPhase === 'loading' ? (
            <GlitchText text={formatYear(destinationYear)} />
          ) : (
            <motion.span
              className="font-mono text-6xl font-bold tracking-widest text-red-500 sm:text-8xl"
              key={destinationYear}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {formatYear(destinationYear)}
            </motion.span>
          )}
        </div>

        {/* Loading bar */}
        {(travelPhase === 'loading' || travelPhase === 'arrival') && (
          <div className="w-64">
            <div className="h-1 overflow-hidden rounded-full bg-red-900/30">
              <motion.div
                className="h-full bg-linear-to-r from-red-600 to-red-400"
                initial={{ width: '0%' }}
                animate={{
                  width: travelPhase === 'arrival' ? '100%' : '70%',
                }}
                transition={{ duration: travelPhase === 'arrival' ? 0.8 : 1.2 }}
              />
            </div>
          </div>
        )}

        {/* Status text */}
        <motion.p
          className="font-mono text-sm uppercase tracking-[0.3em] text-red-400/80"
          key={label}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {label}
        </motion.p>

        {/* Present year countdown */}
        {travelPhase === 'loading' && (
          <motion.p
            className="font-mono text-xs text-red-900"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            Departing {formatYear(PRESENT_YEAR)}...
          </motion.p>
        )}
      </motion.div>

      {/* Electric sparks */}
      {travelPhase === 'flicker' &&
        Array.from({ length: 12 }).map((_, i) => (
          <Spark
            key={i}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
          />
        ))}

      {/* Screen glitch lines */}
      {travelPhase === 'glitch' && (
        <>
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,0,0,0.03) 2px, rgba(255,0,0,0.03) 4px)',
            }}
            animate={{ y: [0, 10, -5, 0] }}
            transition={{ duration: 0.2, repeat: 5 }}
          />
          <motion.div
            className="pointer-events-none absolute left-0 right-0 h-1 bg-red-500/50"
            animate={{ top: ['0%', '30%', '60%', '90%', '100%'] }}
            transition={{ duration: 0.6, repeat: 2 }}
          />
        </>
      )}

      {/* Arrival flash */}
      {travelPhase === 'arrival' && (
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{ duration: 0.8 }}
        />
      )}

      {/* CRT vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.8)_100%)]" />
    </motion.div>
  );
}
