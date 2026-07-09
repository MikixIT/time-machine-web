export const TRAVEL_DURATION_MS = 3000;

export const TRAVEL_PHASES = [
  {
    phase: 'flicker' as const,
    duration: 400,
    label: 'Power surge detected...',
  },
  {
    phase: 'glitch' as const,
    duration: 600,
    label: 'Temporal flux unstable...',
  },
  {
    phase: 'loading' as const,
    duration: 1200,
    label: 'Navigating timestream...',
  },
  {
    phase: 'arrival' as const,
    duration: 800,
    label: 'Arriving at destination...',
  },
] as const;

export const GLITCH_CHARS = '!@#$%^&*<>/?|\\~`';
