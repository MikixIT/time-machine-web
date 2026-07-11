import { motion } from 'motion/react';
import { Rocket } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TravelButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export function TravelButton({ onClick, disabled }: TravelButtonProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className="travel-button group relative overflow-hidden rounded-lg px-12 py-5 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500/50 disabled:cursor-not-allowed disabled:opacity-40"
      aria-label="Initiate time travel to selected year"
      whileHover={reducedMotion || disabled ? undefined : { scale: 1.03 }}
      whileTap={reducedMotion || disabled ? undefined : { scale: 0.97 }}
    >
      {/* Button glow layers */}
      <div className="absolute inset-0 rounded-lg bg-linear-to-b from-red-600 to-red-900" />
      <div className="absolute inset-0.5 rounded-md bg-linear-to-b from-red-500/80 to-red-800/90" />

      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={{
            boxShadow: [
              '0 0 20px rgba(239,68,68,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
              '0 0 40px rgba(239,68,68,0.6), inset 0 1px 0 rgba(255,255,255,0.3)',
              '0 0 20px rgba(239,68,68,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      <span className="relative z-10 flex items-center gap-3 font-mono text-xl font-bold uppercase tracking-[0.2em] text-white">
        <Rocket className="h-6 w-6" aria-hidden="true" />
        Travel
      </span>

      {/* Metallic edge highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
    </motion.button>
  );
}
