import { describe, it, expect, beforeEach } from 'vitest';
import { useChronoWebStore } from '@/store/chronowebStore';

describe('chronowebStore', () => {
  beforeEach(() => {
    useChronoWebStore.setState({
      destinationYear: 2026,
      lastVisitedYear: null,
      travelPhase: 'idle',
      isTraveling: false,
      soundEnabled: true,
    });
  });

  it('sets destination year when not traveling', () => {
    useChronoWebStore.getState().setDestinationYear(1995);
    expect(useChronoWebStore.getState().destinationYear).toBe(1995);
  });

  it('prevents year change while traveling', () => {
    useChronoWebStore.setState({ isTraveling: true, destinationYear: 2026 });
    useChronoWebStore.getState().setDestinationYear(1995);
    expect(useChronoWebStore.getState().destinationYear).toBe(2026);
  });

  it('starts travel sequence', () => {
    useChronoWebStore.getState().startTravel();
    const state = useChronoWebStore.getState();
    expect(state.isTraveling).toBe(true);
    expect(state.travelPhase).toBe('flicker');
  });

  it('completes travel and records last visited', () => {
    useChronoWebStore.setState({ destinationYear: 1995, isTraveling: true });
    useChronoWebStore.getState().completeTravel();
    const state = useChronoWebStore.getState();
    expect(state.isTraveling).toBe(false);
    expect(state.lastVisitedYear).toBe(1995);
    expect(state.travelPhase).toBe('complete');
  });

  it('toggles sound', () => {
    useChronoWebStore.getState().toggleSound();
    expect(useChronoWebStore.getState().soundEnabled).toBe(false);
  });
});
