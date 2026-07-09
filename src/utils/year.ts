import type { EraYear } from '@/types';

export function isEraYear(value: number): value is EraYear {
  return [1995, 2000, 2005, 2010, 2015, 2020, 2026].includes(value);
}

export function clampYear(year: number): EraYear {
  const years = [1995, 2000, 2005, 2010, 2015, 2020, 2026] as const;
  let closest: EraYear = years[0];
  let minDiff = Math.abs(year - closest);

  for (const y of years) {
    const diff = Math.abs(year - y);
    if (diff < minDiff) {
      minDiff = diff;
      closest = y;
    }
  }

  return closest;
}

export function getYearIndex(year: EraYear): number {
  const years = [1995, 2000, 2005, 2010, 2015, 2020, 2026] as const;
  return years.indexOf(year);
}

export function getYearFromIndex(index: number): EraYear {
  const years = [1995, 2000, 2005, 2010, 2015, 2020, 2026] as const;
  const clamped = Math.max(0, Math.min(years.length - 1, index));
  return years[clamped];
}

export function formatYear(year: number): string {
  return String(year).padStart(4, '0');
}
