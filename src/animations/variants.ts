import type { Variants } from 'motion/react';

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export const glitchShake: Variants = {
  shake: {
    x: [0, -4, 4, -6, 6, -3, 3, 0],
    y: [0, 2, -2, 3, -3, 1, -1, 0],
    transition: { duration: 0.4, repeat: 2 },
  },
};

export const flicker: Variants = {
  flicker: {
    opacity: [1, 0.3, 1, 0.5, 1, 0.2, 1, 0.7, 1],
    transition: { duration: 0.6, repeat: 1 },
  },
};
