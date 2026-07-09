import { lazy } from 'react';
import type { EraModule, EraTheme } from '@/types';

function createPlaceholderTheme(
  year: 2000 | 2005 | 2010 | 2015 | 2020,
  title: string,
  subtitle: string,
  description: string,
  tags: string[],
): EraTheme {
  return {
    metadata: {
      year,
      title,
      subtitle,
      description,
      tags,
      isComplete: false,
    },
    colors: {
      background: '#1a1a2e',
      foreground: '#eaeaea',
      primary: '#6c63ff',
      secondary: '#4a4a6a',
      accent: '#ff6b6b',
      muted: '#888899',
      border: '#333355',
      link: '#6c63ff',
    },
    typography: {
      fontFamily: 'system-ui, sans-serif',
      headingFamily: 'system-ui, sans-serif',
      baseSize: '16px',
      lineHeight: '1.5',
    },
    decorations: [],
    cssVariables: {
      '--era-bg': '#1a1a2e',
      '--era-fg': '#eaeaea',
    },
  };
}

const PlaceholderPage = lazy(
  () => import('@/components/eras/PlaceholderEraPage'),
);

export const era2000: EraModule = {
  theme: createPlaceholderTheme(
    2000,
    'The Dot-Com Boom',
    'Flash & Table Layouts',
    'The millennium brought Flash animations, splash pages, and ambitious table-based designs.',
    ['Flash', 'Tables', 'Splash Pages'],
  ),
  component: PlaceholderPage,
};

export const era2005: EraModule = {
  theme: createPlaceholderTheme(
    2005,
    'Web 2.0 Rising',
    'AJAX & Rounded Corners',
    'Web 2.0 introduced gradients, glossy buttons, and the first wave of interactive web apps.',
    ['AJAX', 'Web 2.0', 'Glossy UI'],
  ),
  component: PlaceholderPage,
};

export const era2010: EraModule = {
  theme: createPlaceholderTheme(
    2010,
    'The Responsive Era',
    'Mobile-First & Flat Design',
    'Smartphones changed everything. Responsive design and flat UI became the new standard.',
    ['Responsive', 'Flat Design', 'Mobile'],
  ),
  component: PlaceholderPage,
};

export const era2015: EraModule = {
  theme: createPlaceholderTheme(
    2015,
    'Material & Minimalism',
    'Design Systems Emerge',
    'Google Material Design and component libraries brought consistency to the web.',
    ['Material Design', 'React', 'Components'],
  ),
  component: PlaceholderPage,
};

export const era2020: EraModule = {
  theme: createPlaceholderTheme(
    2020,
    'The Dark Mode Decade',
    'Neumorphism & Accessibility',
    'Dark mode went mainstream. Neumorphism trended briefly. Accessibility became essential.',
    ['Dark Mode', 'Neumorphism', 'A11y'],
  ),
  component: PlaceholderPage,
};
