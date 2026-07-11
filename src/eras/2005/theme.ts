import type { EraTheme } from '@/types';

export const theme2005: EraTheme = {
  metadata: {
    year: 2005,
    title: 'Web 2.0 Rising',
    subtitle: 'AJAX & Rounded Corners',
    description:
      'Web 2.0 introduced glossy buttons, richer interactions, and a new social web.',
    tags: ['AJAX', 'Web 2.0', 'Glossy UI', 'Blogs'],
    isComplete: true,
  },
  colors: {
    background: '#1d2336',
    foreground: '#f7f4ff',
    primary: '#9b5de5',
    secondary: '#00bbf9',
    accent: '#f15bb5',
    muted: '#8d92b0',
    border: 'rgba(255,255,255,0.14)',
    link: '#9d4edd',
  },
  typography: {
    fontFamily: '"Trebuchet MS", Arial, sans-serif',
    headingFamily: '"Trebuchet MS", Arial, sans-serif',
    baseSize: '16px',
    lineHeight: '1.5',
  },
  decorations: ['rounded-corners', 'glossy-panels', 'social-icons'],
  cssVariables: {
    '--era-bg': '#1d2336',
    '--era-fg': '#f7f4ff',
    '--era-primary': '#9b5de5',
    '--era-secondary': '#00bbf9',
    '--era-accent': '#f15bb5',
    '--era-border': 'rgba(255,255,255,0.14)',
  },
};
