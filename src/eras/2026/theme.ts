import type { EraTheme } from '@/types';

export const theme2026: EraTheme = {
  metadata: {
    year: 2026,
    title: 'The Future of the Web',
    subtitle: 'Glass, Motion & Intelligence',
    description:
      'Modern SaaS aesthetics with glassmorphism, bento grids, and fluid micro-animations.',
    tags: ['Glassmorphism', 'Bento Grid', 'Dark Mode', 'Motion'],
    isComplete: true,
  },
  colors: {
    background: '#0A0A0F',
    foreground: '#FAFAFA',
    primary: '#6366F1',
    secondary: '#8B5CF6',
    accent: '#22D3EE',
    muted: '#71717A',
    border: 'rgba(255,255,255,0.1)',
    link: '#818CF8',
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    headingFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    baseSize: '16px',
    lineHeight: '1.6',
    letterSpacing: '-0.02em',
  },
  decorations: ['glass-panels', 'gradients', 'bento-grid', 'glow-effects'],
  cssVariables: {
    '--era-bg': '#0A0A0F',
    '--era-fg': '#FAFAFA',
    '--era-primary': '#6366F1',
    '--era-secondary': '#8B5CF6',
    '--era-accent': '#22D3EE',
    '--era-glass': 'rgba(255,255,255,0.05)',
    '--era-border': 'rgba(255,255,255,0.1)',
  },
};
