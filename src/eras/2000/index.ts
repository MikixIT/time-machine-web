import { lazy } from 'react';
import type { EraModule } from '@/types';
import { theme2000 } from './theme';

const Era2000Page = lazy(() => import('./Era2000Page'));

export const era2000: EraModule = {
  theme: theme2000,
  component: Era2000Page,
};
