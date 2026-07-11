import type { EraTheme } from '@/types';

export const theme2010: EraTheme = {
  metadata: {
    year: 2010,
    title: 'The Responsive Era',
    subtitle: 'Mobile-First & Flat Design',
    description:
      'Smartphones reshaped the web, pushing interfaces toward simplicity, clarity, and responsiveness.',
    tags: ['Responsive', 'Flat Design', 'Mobile', 'Bootstrap'],
    isComplete: true,
  },
  colors: {
    background: '#f7f8fb',
    foreground: '#1f2937',
    primary: '#2563eb',
    secondary: '#7c3aed',
    accent: '#10b981',
    muted: '#64748b',
    border: 'rgba(15, 23, 42, 0.12)',
    link: '#2563eb',
  },
  typography: {
    fontFamily: '"Segoe UI", Roboto, sans-serif',
    headingFamily: '"Segoe UI", Roboto, sans-serif',
    baseSize: '16px',
    lineHeight: '1.5',
  },
  decorations: ['flat-cards', 'responsive-grid', 'mobile-first'],
  cssVariables: {
    '--era-bg': '#f7f8fb',
    '--era-fg': '#1f2937',
    '--era-primary': '#2563eb',
    '--era-secondary': '#7c3aed',
    '--era-accent': '#10b981',
    '--era-border': 'rgba(15, 23, 42, 0.12)',
  },
};
