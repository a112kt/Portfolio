"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { easing } from "@/lib/motion";

export interface RevealProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}

/** Fades + slides content into view when it enters the viewport (once, by default). */
export function Reveal({ children, className, delay = 0, y = 26, once = true }: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, delay, ease: easing },
        },
      }}
      viewport={{ once, margin: "-70px" }}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer = (
  stagger = 0.08,
  delayChildren = 0.1
): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

export const staggerItem = (y = 24): Variants => ({
  hidden: { opacity: 0, y, transition: { duration: 0.55, ease: easing } },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easing } },
});
