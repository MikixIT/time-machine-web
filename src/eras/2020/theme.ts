import type { EraTheme } from '@/types';

export const theme2020: EraTheme = {
  metadata: {
    year: 2020,
    title: 'The Dark Mode Decade',
    subtitle: 'Neumorphism & Accessibility',
    description:
      'Dark mode went mainstream, accessibility became central, and interfaces got more refined and inclusive.',
    tags: ['Dark Mode', 'Neumorphism', 'A11y', 'Motion'],
    isComplete: true,
  },
  colors: {
    background: '#0b1120',
    foreground: '#e2e8f0',
    primary: '#38bdf8',
    secondary: '#818cf8',
    accent: '#34d399',
    muted: '#94a3b8',
    border: 'rgba(255,255,255,0.12)',
    link: '#7dd3fc',
  },
  typography: {
    fontFamily: 'Inter, "Segoe UI", sans-serif',
    headingFamily: 'Inter, "Segoe UI", sans-serif',
    baseSize: '16px',
    lineHeight: '1.6',
  },
  decorations: ['dark-mode', 'soft-shadow', 'micro-motion'],
  cssVariables: {
    '--era-bg': '#0b1120',
    '--era-fg': '#e2e8f0',
    '--era-primary': '#38bdf8',
    '--era-secondary': '#818cf8',
    '--era-accent': '#34d399',
    '--era-border': 'rgba(255,255,255,0.12)',
  },
};
