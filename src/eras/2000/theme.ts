import type { EraTheme } from '@/types';

export const theme2000: EraTheme = {
  metadata: {
    year: 2000,
    title: 'The Dot-Com Boom',
    subtitle: 'Flash & Table Layouts',
    description:
      'The millennium brought splash pages, animated intros, and bright optimism to the web.',
    tags: ['Flash', 'Tables', 'Splash Pages', 'GeoCities'],
    isComplete: true,
  },
  colors: {
    background: '#0f2b4e',
    foreground: '#fef3c7',
    primary: '#ff6b35',
    secondary: '#3b82f6',
    accent: '#facc15',
    muted: '#9fb3cc',
    border: 'rgba(255,255,255,0.16)',
    link: '#7dd3fc',
  },
  typography: {
    fontFamily: 'Georgia, "Times New Roman", serif',
    headingFamily: 'Georgia, "Times New Roman", serif',
    baseSize: '16px',
    lineHeight: '1.5',
  },
  decorations: ['marquee', 'visitor-counter', 'neon-banner'],
  cssVariables: {
    '--era-bg': '#0f2b4e',
    '--era-fg': '#fef3c7',
    '--era-primary': '#ff6b35',
    '--era-secondary': '#3b82f6',
    '--era-accent': '#facc15',
    '--era-border': 'rgba(255,255,255,0.16)',
  },
};
