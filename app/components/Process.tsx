"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { Stagger, StaggerChild } from "./Stagger";
import { transitionFast } from "@/lib/motion";

const steps = [
  {
    step: "01",
    title: "Prise de contact",
    desc: "Formulaire ou appel — réponse sous 2h.",
  },
  {
    step: "02",
    title: "Devis & planification",
    desc: "Proposition claire et sans engagement.",
  },
  {
    step: "03",
    title: "Intervention terrain",
    desc: "Équipe dédiée, matériel professionnel.",
  },
  {
    step: "04",
    title: "Contrôle qualité",
    desc: "Vérification finale et satisfaction garantie.",
  },
];

export function Process() {
  return (
    <section className="section-pad section-dark">
      <div className="container-pro">
        <Reveal variant="fade">
          <SectionHeader
            light
            eyebrow="Notre méthode"
            title="Un processus structuré, de A à Z"
            description="Chaque étape est documentée et suivie pour garantir transparence et sérénité."
          />
        </Reveal>

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <StaggerChild key={s.step}>
              <motion.div
                className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
                whileHover={{
                  y: -4,
                  borderColor: "rgba(255, 88, 32, 0.4)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
                transition={transitionFast}
              >
                <span className="font-display text-4xl text-brand">{s.step}</span>
                <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{s.desc}</p>
              </motion.div>
            </StaggerChild>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
