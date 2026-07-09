export function playTravelSound(): void {
  // Placeholder for future sound effects integration
  if (typeof window !== 'undefined' && 'AudioContext' in window) {
    // Sound hook — ready for Web Audio API implementation
  }
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
