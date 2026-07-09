import { motion } from 'motion/react';
import { formatYear } from '@/utils/year';

interface LedDisplayProps {
  label: string;
  value: string;
  id?: string;
}

export function LedDisplay({ label, value, id }: LedDisplayProps) {
  return (
    <div
      className="console-panel flex flex-col items-center gap-2 p-4"
      role="group"
      aria-labelledby={id ? `${id}-label` : undefined}
    >
      <span
        id={id ? `${id}-label` : undefined}
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-red-900/80"
      >
        {label}
      </span>
      <div
        className="led-display relative overflow-hidden rounded border-2 border-red-900/60 bg-black px-6 py-3"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="crt-scanlines pointer-events-none absolute inset-0" />
        <motion.span
          key={value}
          className="led-text relative z-10 font-mono text-4xl font-bold tracking-[0.15em] text-red-500 sm:text-5xl"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.7, 1, 0.85, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {value}
        </motion.span>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
      </div>
    </div>
  );
}

interface YearSelectorProps {
  value: number;
  onChange: (year: number) => void;
  disabled?: boolean;
}

export function YearSelector({ value, onChange, disabled }: YearSelectorProps) {
  const years = [1995, 2000, 2005, 2010, 2015, 2020, 2026];

  return (
    <div className="flex flex-col items-center gap-2">
      <label
        htmlFor="year-select"
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-red-900/80"
      >
        Select Destination
      </label>
      <select
        id="year-select"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        disabled={disabled}
        className="console-select rounded border-2 border-red-900/40 bg-black/80 px-4 py-2 font-mono text-lg text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 disabled:opacity-40"
        aria-label="Select destination year"
      >
        {years.map((y) => (
          <option key={y} value={y}>
            {formatYear(y)}
          </option>
        ))}
      </select>
    </div>
  );
}
