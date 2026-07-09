import { useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChronoWebStore } from '@/store/chronowebStore';
import { TRAVEL_PHASES } from '@/animations/travel';
import { playTravelSound } from '@/utils/accessibility';
import { useReducedMotion } from './useReducedMotion';

export function useTravelAnimation() {
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const {
    destinationYear,
    isTraveling,
    soundEnabled,
    startTravel,
    setTravelPhase,
    completeTravel,
    resetTravel,
  } = useChronoWebStore();

  const clearTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  const executeTravel = useCallback(() => {
    if (isTraveling) return;

    startTravel();

    if (soundEnabled) {
      playTravelSound();
    }

    if (reducedMotion) {
      const timeout = setTimeout(() => {
        completeTravel();
        navigate(`/era/${destinationYear}`);
      }, 300);
      timeoutsRef.current.push(timeout);
      return;
    }

    let elapsed = 0;
    for (const { phase, duration } of TRAVEL_PHASES) {
      const timeout = setTimeout(() => {
        setTravelPhase(phase);
      }, elapsed);
      timeoutsRef.current.push(timeout);
      elapsed += duration;
    }

    const completeTimeout = setTimeout(() => {
      completeTravel();
      navigate(`/era/${destinationYear}`);
    }, elapsed);
    timeoutsRef.current.push(completeTimeout);
  }, [
    isTraveling,
    startTravel,
    soundEnabled,
    reducedMotion,
    setTravelPhase,
    completeTravel,
    navigate,
    destinationYear,
  ]);

  useEffect(() => {
    return () => clearTimeouts();
  }, [clearTimeouts]);

  return {
    executeTravel,
    resetTravel,
    isTraveling,
    reducedMotion,
  };
}
