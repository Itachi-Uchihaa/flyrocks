"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, revealDelay, transition, viewport } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  variant?: "up" | "left" | "right" | "scale" | "fade";
};

const variantMap: Record<NonNullable<RevealProps["variant"]>, Variants> = {
  up: fadeUp,
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  left: { hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 28 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
};

export function Reveal({
  children,
  className = "",
  delay,
  variant = "up",
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variantMap[variant]}
      transition={{ ...transition, delay: revealDelay(delay) }}
    >
      {children}
    </motion.div>
  );
}
