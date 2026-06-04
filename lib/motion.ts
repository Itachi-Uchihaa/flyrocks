import type { Variants, Transition } from "framer-motion";

export const easeOut = [0.16, 1, 0.3, 1] as const;

export const transition: Transition = {
  duration: 0.65,
  ease: easeOut,
};

export const transitionFast: Transition = {
  duration: 0.4,
  ease: easeOut,
};

export const viewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -60px 0px",
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const float: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export const pulseSoft: Variants = {
  animate: {
    scale: [1, 1.02, 1],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export function revealDelay(step?: 1 | 2 | 3 | 4): number {
  if (!step) return 0;
  return step * 0.12;
}
