"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { homeFaq, homeSections } from "@/lib/content/home";
import { SERVICES } from "@/lib/site";
import { transitionFast } from "@/lib/motion";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { ProseSection } from "./ProseSection";
import { Stagger, StaggerChild } from "./Stagger";
import { FaqJsonLd } from "./JsonLd";

export function HomeSeoContent() {
  return (
    <>
      <FaqJsonLd items={homeFaq} />

      <section className="section-pad bg-surface">
        <div className="container-pro">
          <div className="mx-auto max-w-3xl">
            <ProseSection sections={homeSections} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-pro">
          <Reveal>
            <SectionHeader
              eyebrow="Nos prestations"
              title="Débarras, déménagement et nettoyage : le détail de chaque service"
              description="Accédez aux pages dédiées pour tout savoir sur nos méthodes, tarifs indicatifs, zones et FAQ."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <StaggerChild key={s.slug}>
                <motion.article
                  className="pro-card flex h-full flex-col p-8"
                  whileHover={{ y: -5 }}
                  transition={transitionFast}
                >
                  <h3 className="text-xl font-bold text-foreground">
                    <Link href={s.href} className="hover:text-brand">
                      {s.label}
                    </Link>
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {s.longDescription}
                  </p>
                  <Link
                    href={s.href}
                    className="mt-6 text-sm font-semibold text-brand hover:underline"
                  >
                    Lire le guide complet →
                  </Link>
                </motion.article>
              </StaggerChild>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-pro max-w-3xl">
          <Reveal>
            <SectionHeader align="left" eyebrow="FAQ" title="Questions fréquentes sur FLYROCKS" />
          </Reveal>
          <Stagger className="mt-10 space-y-3">
            {homeFaq.map((item) => (
              <StaggerChild key={item.q}>
                <motion.details
                  className="pro-card group p-6"
                  whileHover={{ x: 2 }}
                  transition={transitionFast}
                >
                  <summary className="cursor-pointer list-none font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="mr-2 inline-block text-brand transition-transform group-open:rotate-45">
                      +
                    </span>
                    {item.q}
                  </summary>
                  <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted">
                    {item.a}
                  </p>
                </motion.details>
              </StaggerChild>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
