import { describe, it, expect } from 'vitest';
import {
  isEraYear,
  clampYear,
  getYearIndex,
  getYearFromIndex,
  formatYear,
} from '@/utils/year';

describe('year utils', () => {
  it('identifies valid era years', () => {
    expect(isEraYear(1995)).toBe(true);
    expect(isEraYear(2026)).toBe(true);
    expect(isEraYear(1999)).toBe(false);
    expect(isEraYear(2027)).toBe(false);
  });

  it('clamps to nearest era year', () => {
    expect(clampYear(1997)).toBe(1995);
    expect(clampYear(2003)).toBe(2005);
    expect(clampYear(2026)).toBe(2026);
  });

  it('converts between index and year', () => {
    expect(getYearIndex(1995)).toBe(0);
    expect(getYearIndex(2026)).toBe(6);
    expect(getYearFromIndex(3)).toBe(2010);
    expect(getYearFromIndex(99)).toBe(2026);
  });

  it('formats year with leading zeros', () => {
    expect(formatYear(1995)).toBe('1995');
    expect(formatYear(200)).toBe('0200');
  });
});
