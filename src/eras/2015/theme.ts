import type { EraTheme } from '@/types';

export const theme2015: EraTheme = {
  metadata: {
    year: 2015,
    title: 'Material & Minimalism',
    subtitle: 'Design Systems Emerge',
    description:
      'Material Design and component-driven development made interfaces more polished and repeatable.',
    tags: ['Material Design', 'React', 'Components', 'Design Systems'],
    isComplete: true,
  },
  colors: {
    background: '#111827',
    foreground: '#f9fafb',
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#f59e0b',
    muted: '#9ca3af',
    border: 'rgba(255,255,255,0.14)',
    link: '#60a5fa',
  },
  typography: {
    fontFamily: '"Roboto", Arial, sans-serif',
    headingFamily: '"Roboto", Arial, sans-serif',
    baseSize: '16px',
    lineHeight: '1.5',
  },
  decorations: ['cards', 'elevation', 'component-grid'],
  cssVariables: {
    '--era-bg': '#111827',
    '--era-fg': '#f9fafb',
    '--era-primary': '#3b82f6',
    '--era-secondary': '#8b5cf6',
    '--era-accent': '#f59e0b',
    '--era-border': 'rgba(255,255,255,0.14)',
  },
};
