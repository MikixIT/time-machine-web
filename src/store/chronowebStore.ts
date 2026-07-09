import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ChronoWebStore, TravelPhase } from '@/types/era';
import { PRESENT_YEAR } from '@/types/era';

export const useChronoWebStore = create<ChronoWebStore>()(
  persist(
    (set, get) => ({
      destinationYear: PRESENT_YEAR,
      lastVisitedYear: null,
      travelPhase: 'idle',
      isTraveling: false,
      soundEnabled: true,

      setDestinationYear: (year) => {
        if (!get().isTraveling) {
          set({ destinationYear: year });
        }
      },

      startTravel: () => {
        if (get().isTraveling) return;
        set({ isTraveling: true, travelPhase: 'flicker' });
      },

      setTravelPhase: (phase: TravelPhase) => {
        set({ travelPhase: phase });
      },

      completeTravel: () => {
        const { destinationYear } = get();
        set({
          lastVisitedYear: destinationYear,
          isTraveling: false,
          travelPhase: 'complete',
        });
      },

      resetTravel: () => {
        set({ isTraveling: false, travelPhase: 'idle' });
      },

      toggleSound: () => {
        set((state) => ({ soundEnabled: !state.soundEnabled }));
      },
    }),
    {
      name: 'chronoweb-storage',
      partialize: (state) => ({
        destinationYear: state.destinationYear,
        lastVisitedYear: state.lastVisitedYear,
        soundEnabled: state.soundEnabled,
      }),
    },
  ),
);
