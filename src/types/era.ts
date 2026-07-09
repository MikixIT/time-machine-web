import type { ComponentType, LazyExoticComponent } from 'react';

export type EraYear = 1995 | 2000 | 2005 | 2010 | 2015 | 2020 | 2026;

export const ERA_YEARS: readonly EraYear[] = [
  1995, 2000, 2005, 2010, 2015, 2020, 2026,
] as const;

export const PRESENT_YEAR = 2026;

export type TravelPhase =
  'idle' | 'flicker' | 'glitch' | 'loading' | 'arrival' | 'complete';

export interface EraMetadata {
  year: EraYear;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  isComplete: boolean;
}

export interface EraColors {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
  muted: string;
  border: string;
  link: string;
}

export interface EraTypography {
  fontFamily: string;
  headingFamily: string;
  baseSize: string;
  lineHeight: string;
  letterSpacing?: string;
}

export interface EraTheme {
  metadata: EraMetadata;
  colors: EraColors;
  typography: EraTypography;
  decorations: string[];
  cssVariables: Record<string, string>;
}

export interface EraModule {
  theme: EraTheme;
  component: LazyExoticComponent<ComponentType>;
}

export interface ChronoWebState {
  destinationYear: EraYear;
  lastVisitedYear: EraYear | null;
  travelPhase: TravelPhase;
  isTraveling: boolean;
  soundEnabled: boolean;
}

export interface ChronoWebActions {
  setDestinationYear: (year: EraYear) => void;
  startTravel: () => void;
  setTravelPhase: (phase: TravelPhase) => void;
  completeTravel: () => void;
  resetTravel: () => void;
  toggleSound: () => void;
}

export type ChronoWebStore = ChronoWebState & ChronoWebActions;
