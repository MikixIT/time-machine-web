import { describe, expect, it } from 'vitest';
import { getEraModule } from './registry';
import type { EraYear } from '@/types';

describe('era registry', () => {
  it.each([2000, 2005, 2010, 2015, 2020] as EraYear[])(
    'marks %s as implemented',
    (year) => {
      expect(getEraModule(year).theme.metadata.isComplete).toBe(true);
    },
  );
});
