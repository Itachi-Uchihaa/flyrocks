"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer, staggerItem, viewport } from "@/lib/motion";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul";
};

export function Stagger({ children, className = "", as = "div" }: StaggerProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.li variants={staggerItem} className={className}>
      {children}
    </motion.li>
  );
}

export function StaggerChild({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
