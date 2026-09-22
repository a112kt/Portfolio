import type { Variants, Transition } from "framer-motion";

/** Signature cubic-bezier eased used consistently across the portfolio. */
export const easing = [0.22, 1, 0.36, 1] as const;

/** Standard shared transition used for the majority of entrances. */
export const transition = { duration: 0.6, ease: easing } satisfies Transition;

/** Scroll-triggered container that staggers its children into view. */
export const staggerContainer = (
  stagger = 0.08,
  delayChildren = 0.1
): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

/** Child of a stagger container — fades + lifts into place. */
export const staggerItem = (y = 24): Variants => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing },
  },
});
