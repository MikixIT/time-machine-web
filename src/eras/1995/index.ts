import { lazy } from 'react';
import type { EraModule } from '@/types';
import { theme1995 } from './theme';

const Era1995Page = lazy(() => import('./Era1995Page'));

export const era1995: EraModule = {
  theme: theme1995,
  component: Era1995Page,
};
