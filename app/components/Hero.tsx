"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";
import {
  easeOut,
  fadeLeft,
  fadeRight,
  fadeUp,
  float,
  staggerContainer,
  staggerItem,
  transition,
  viewport,
} from "@/lib/motion";
import { IconArrow, IconCheck, IconShield } from "./Icons";

const trustItems = [
  "Devis sous 2 heures",
  "Équipes certifiées & assurées",
  "Intervention sous 48h",
];

const stats = [
  { value: "2 400+", label: "Clients accompagnés" },
  { value: "15+", label: "Années d'expertise" },
  { value: "48h", label: "Délai d'intervention" },
  { value: "100%", label: "Devis transparents" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid pt-8 lg:pt-12">
      <motion.div
        className="pointer-events-none absolute right-0 top-0 h-[480px] w-[480px] -translate-y-1/4 translate-x-1/4 rounded-full bg-brand/8 blur-3xl"
        animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-pro relative pb-16 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="lg:col-span-6"
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
            transition={transition}
          >
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm shadow-[var(--shadow-sm)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: easeOut }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="font-medium text-muted">
                Particuliers &amp; professionnels — France
              </span>
            </motion.div>

            <motion.h1
              className="font-display mt-8 text-[2.5rem] leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: easeOut }}
            >
              L&apos;expertise terrain,{" "}
              <motion.span
                className="inline-block text-brand"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.6, ease: easeOut }}
              >
                sans compromis
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease: easeOut }}
            >
              {SITE.name} accompagne vos projets de débarras, déménagement et
              nettoyage d&apos;entrepôts avec rigueur, réactivité et un standard
              de qualité premium.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease: easeOut }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link href="/contact" className="btn btn-primary px-8 py-4 text-base">
                  Obtenir un devis gratuit
                  <IconArrow className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link href="/debarras" className="btn btn-secondary px-8 py-4 text-base">
                  Découvrir nos services
                </Link>
              </motion.div>
            </motion.div>

            <motion.ul
              className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              transition={{ delayChildren: 0.55, staggerChildren: 0.08 }}
            >
              {trustItems.map((item) => (
                <motion.li
                  key={item}
                  variants={staggerItem}
                  className="flex items-center gap-2.5 text-sm font-medium"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="relative lg:col-span-6"
            initial="hidden"
            animate="visible"
            variants={fadeRight}
            transition={{ ...transition, delay: 0.2 }}
          >
            <motion.div
              className="image-frame relative aspect-[4/5] lg:aspect-[5/6]"
              whileHover={{ scale: 1.01 }}
              transition={transition}
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=85"
                alt="Équipe professionnelle FLYROCKS"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm font-medium text-white/80">Équipes terrain</p>
                <p className="text-lg font-bold">+120 interventions / mois</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-5 -left-2 z-10 rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-lg)] sm:-left-6"
              variants={float}
              animate="animate"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand">
                  <IconShield className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-2xl font-bold leading-none text-brand">98,7%</p>
                  <p className="mt-1 text-xs font-medium text-muted">satisfaction client</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-2 top-8 z-10 hidden rounded-2xl border border-border bg-surface px-5 py-4 shadow-[var(--shadow-md)] sm:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: easeOut }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Délai moyen
              </p>
              <p className="mt-0.5 text-xl font-bold text-foreground">24–48h</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-12 sm:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <motion.p
                className="text-2xl font-bold tracking-tight text-brand lg:text-3xl"
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 1 }}
              >
                {stat.value}
              </motion.p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
