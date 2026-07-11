import { lazy } from 'react';
import type { EraModule } from '@/types';
import { theme2020 } from './theme';

const Era2020Page = lazy(() => import('./Era2020Page'));

export const era2020: EraModule = {
  theme: theme2020,
  component: Era2020Page,
};
