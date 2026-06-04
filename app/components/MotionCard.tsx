"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { transitionFast } from "@/lib/motion";

type MotionCardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "a";
  href?: string;
};

export function MotionCard({
  children,
  className = "pro-card",
  as = "div",
}: MotionCardProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      whileHover={{ y: -4, transition: transitionFast }}
      whileTap={{ scale: 0.995 }}
    >
      {children}
    </Component>
  );
}
