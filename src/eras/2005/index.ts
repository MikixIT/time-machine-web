import { lazy } from 'react';
import type { EraModule } from '@/types';
import { theme2005 } from './theme';

const Era2005Page = lazy(() => import('./Era2005Page'));

export const era2005: EraModule = {
  theme: theme2005,
  component: Era2005Page,
};
