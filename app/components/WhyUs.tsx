"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { Stagger, StaggerChild } from "./Stagger";
import { IconCheck, IconClock, IconShield } from "./Icons";
import { transition, transitionFast } from "@/lib/motion";

const pillars = [
  {
    icon: IconClock,
    title: "Réactivité opérationnelle",
    desc: "Devis sous 2h, planification sous 48h. Une organisation pensée pour vos urgences.",
  },
  {
    icon: IconShield,
    title: "Sécurité & conformité",
    desc: "Équipes assurées, protocoles HSE et traçabilité complète de chaque intervention.",
  },
  {
    icon: IconCheck,
    title: "Qualité contrôlée",
    desc: "Contrôle systématique en fin de chantier. 98,7 % de satisfaction client.",
  },
];

export function WhyUs() {
  return (
    <section className="section-pad bg-background">
      <div className="container-pro">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="left">
            <motion.div
              className="image-frame relative aspect-[4/5] max-lg:mx-auto max-lg:max-w-md"
              whileHover={{ scale: 1.02 }}
              transition={transition}
            >
              <Image
                src="/flotte.png"
                alt="Camion et flotte logistique FLYROCKS pour débarras et déménagement"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </Reveal>

          <div>
            <Reveal variant="right">
              <SectionHeader
                align="left"
                eyebrow="Pourquoi FLYROCKS"
                title="Un partenaire fiable pour vos opérations terrain"
                description="Nous réunissons logistique, manutention et propreté industrielle au sein d'une même structure — pour vous éviter la multiplication des prestataires."
              />
            </Reveal>

            <Stagger className="mt-10 space-y-4">
              {pillars.map((p) => (
                <StaggerChild key={p.title}>
                  <motion.div
                    className="pro-card flex gap-5 p-6"
                    whileHover={{ x: 4 }}
                    transition={transitionFast}
                  >
                    <motion.span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-white"
                      whileHover={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <p.icon className="h-5 w-5" />
                    </motion.span>
                    <div>
                      <h3 className="font-bold text-foreground">{p.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.desc}</p>
                    </div>
                  </motion.div>
                </StaggerChild>
              ))}
            </Stagger>

            <Reveal delay={3}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Link href="/a-propos" className="btn btn-secondary mt-8">
                  En savoir plus sur l&apos;entreprise
                </Link>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
