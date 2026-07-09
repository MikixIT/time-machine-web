import { useMemo } from 'react';
import type { EraYear } from '@/types';
import { getEraModule, getEraTheme } from '@/theme/registry';

export function useEra(year: EraYear) {
  const theme = useMemo(() => getEraTheme(year), [year]);
  const module = useMemo(() => getEraModule(year), [year]);

  return { theme, module, year };
}
