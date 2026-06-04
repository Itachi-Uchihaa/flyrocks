"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { Stagger, StaggerChild } from "./Stagger";
import { IconArrow } from "./Icons";
import { transitionFast } from "@/lib/motion";

export function Services() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-pro">
        <Reveal>
          <SectionHeader
            eyebrow="Nos expertises"
            title="Des prestations complètes, exécutées avec précision"
            description="Chaque service est porté par des équipes dédiées, du diagnostic initial à la remise en état finale."
          />
        </Reveal>

        <Stagger className="mt-16 grid gap-8 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <StaggerChild key={service.slug}>
              <motion.div whileHover={{ y: -6 }} transition={transitionFast}>
                <Link
                  href={service.href}
                  className="pro-card group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <motion.div className="relative h-full w-full" whileHover={{ scale: 1.05 }}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/5 to-transparent" />
                    <motion.span
                      className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, type: "spring", stiffness: 260 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </motion.span>
                  </div>
                  <div className="flex flex-1 flex-col p-7 lg:p-8">
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {service.label}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                      En savoir plus
                      <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            </StaggerChild>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
