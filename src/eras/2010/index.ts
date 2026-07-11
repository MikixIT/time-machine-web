import { lazy } from 'react';
import type { EraModule } from '@/types';
import { theme2010 } from './theme';

const Era2010Page = lazy(() => import('./Era2010Page'));

export const era2010: EraModule = {
  theme: theme2010,
  component: Era2010Page,
};
