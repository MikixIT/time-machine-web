import { lazy } from 'react';
import type { EraModule } from '@/types';
import { theme2015 } from './theme';

const Era2015Page = lazy(() => import('./Era2015Page'));

export const era2015: EraModule = {
  theme: theme2015,
  component: Era2015Page,
};
