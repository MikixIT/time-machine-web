import type { EraYear, EraModule, EraTheme } from '@/types';
import { era1995 } from '@/eras/1995';
import { era2026 } from '@/eras/2026';
import {
  era2000,
  era2005,
  era2010,
  era2015,
  era2020,
} from '@/eras/placeholders';

const eraRegistry: Record<EraYear, EraModule> = {
  1995: era1995,
  2000: era2000,
  2005: era2005,
  2010: era2010,
  2015: era2015,
  2020: era2020,
  2026: era2026,
};

export function getEraModule(year: EraYear): EraModule {
  return eraRegistry[year];
}

export function getEraTheme(year: EraYear): EraTheme {
  return eraRegistry[year].theme;
}

export function getAllEras(): EraModule[] {
  return Object.values(eraRegistry);
}

export function applyEraTheme(theme: EraTheme): void {
  const root = document.documentElement;
  Object.entries(theme.cssVariables).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
  root.dataset.era = String(theme.metadata.year);
}

export function clearEraTheme(): void {
  const root = document.documentElement;
  const props = Array.from(root.style).filter((p) => p.startsWith('--era-'));
  props.forEach((p) => root.style.removeProperty(p));
  delete root.dataset.era;
}
