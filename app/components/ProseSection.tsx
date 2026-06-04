"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { staggerContainer, staggerItem, viewport } from "@/lib/motion";
import type { ContentSection } from "@/lib/content/types";

type ProseSectionProps = {
  sections: ContentSection[];
  className?: string;
};

export function ProseSection({ sections, className = "" }: ProseSectionProps) {
  return (
    <div className={`space-y-16 ${className}`}>
      {sections.map((section, i) => (
        <Reveal key={section.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
          <article id={section.id} className="prose-block scroll-mt-28">
            <h2 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
              {section.title}
            </h2>
            <motion.div
              className="mt-5 space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {section.paragraphs.map((p) => (
                <motion.p
                  key={p.slice(0, 48)}
                  variants={staggerItem}
                  className="text-[15px] leading-[1.75] text-muted"
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
