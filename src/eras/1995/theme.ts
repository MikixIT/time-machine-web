import type { EraTheme } from '@/types';

export const theme1995: EraTheme = {
  metadata: {
    year: 1995,
    title: 'The Dawn of the Web',
    subtitle: 'Tables, GIFs & Guestbooks',
    description:
      'The early web was raw HTML — gray backgrounds, blue links, and animated GIFs everywhere.',
    tags: ['HTML', 'Tables', 'GIFs', 'GeoCities'],
    isComplete: true,
  },
  colors: {
    background: '#C0C0C0',
    foreground: '#000000',
    primary: '#000080',
    secondary: '#808080',
    accent: '#FFFF00',
    muted: '#808080',
    border: '#000000',
    link: '#0000EE',
  },
  typography: {
    fontFamily: '"Times New Roman", Times, serif',
    headingFamily: '"Times New Roman", Times, serif',
    baseSize: '14px',
    lineHeight: '1.2',
  },
  decorations: [
    'marquee',
    'visitor-counter',
    'under-construction',
    'guestbook',
  ],
  cssVariables: {
    '--era-bg': '#C0C0C0',
    '--era-fg': '#000000',
    '--era-link': '#0000EE',
    '--era-visited': '#551A8B',
    '--era-border': '#000000',
  },
};
