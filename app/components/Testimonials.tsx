"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { Stagger, StaggerChild } from "./Stagger";
import { IconStar } from "./Icons";
import { transitionFast } from "@/lib/motion";

const reviews = [
  {
    name: "Marie L.",
    role: "Particulier — Débarras",
    text: "Intervention en 24h, équipe professionnelle et discrète. Le logement était impeccable. Je recommande sans réserve.",
  },
  {
    name: "Thomas B.",
    role: "Directeur logistique",
    text: "Nettoyage complet d'un entrepôt de 2 000 m² en un week-end. Planning respecté, résultat au-delà de nos attentes.",
  },
  {
    name: "Sophie R.",
    role: "Gérante — Déménagement",
    text: "Communication claire, devis transparent, zéro mauvaise surprise. Un partenaire de confiance pour nos transferts.",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-pro">
        <Reveal>
          <SectionHeader
            eyebrow="Témoignages"
            title="La confiance de nos clients"
            description="Particuliers et professionnels nous choisissent pour notre rigueur et notre réactivité."
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <StaggerChild key={r.name}>
              <motion.blockquote
                className="pro-card flex h-full flex-col p-8"
                whileHover={{ y: -6 }}
                transition={transitionFast}
              >
                <div className="flex gap-0.5 text-brand">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.05 }}
                    >
                      <IconStar className="h-4 w-4" />
                    </motion.span>
                  ))}
                </div>
                <p className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground">
                  {`« ${r.text} »`}
                </p>
                <footer className="mt-8 border-t border-border pt-6">
                  <cite className="not-italic">
                    <p className="font-bold text-foreground">{r.name}</p>
                    <p className="mt-0.5 text-sm text-muted">{r.role}</p>
                  </cite>
                </footer>
              </motion.blockquote>
            </StaggerChild>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
