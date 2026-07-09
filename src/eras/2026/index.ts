import { lazy } from 'react';
import type { EraModule } from '@/types';
import { theme2026 } from './theme';

const Era2026Page = lazy(() => import('./Era2026Page'));

export const era2026: EraModule = {
  theme: theme2026,
  component: Era2026Page,
};
