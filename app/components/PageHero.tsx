"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { IconArrow } from "./Icons";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="page-hero overflow-hidden pt-28 pb-14 lg:pt-36 lg:pb-20">
      <div className="page-hero-accent" />
      <motion.div
        className="container-pro relative"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            aria-label="Fil d'Ariane"
            variants={staggerItem}
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted"
          >
            <Link href="/" className="transition-colors hover:text-brand">
              Accueil
            </Link>
            {breadcrumbs.map((b) => (
              <span key={b.label} className="flex items-center gap-2">
                <span className="text-border-strong">/</span>
                {b.href ? (
                  <Link href={b.href} className="transition-colors hover:text-brand">
                    {b.label}
                  </Link>
                ) : (
                  <span className="font-medium text-foreground">{b.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {eyebrow && (
          <motion.span variants={staggerItem} className="eyebrow">
            {eyebrow}
          </motion.span>
        )}

        <motion.h1
          variants={staggerItem}
          className="font-display mt-5 max-w-3xl text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="mt-5 max-w-2xl text-lg leading-relaxed text-muted"
        >
          {description}
        </motion.p>

        <motion.div variants={staggerItem} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Link href="/contact" className="btn btn-primary mt-10 inline-flex px-8 py-4 text-base">
            Demander un devis
            <IconArrow className="h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
