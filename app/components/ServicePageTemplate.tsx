"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ServicePageData } from "@/lib/content/types";
import { transition, transitionFast } from "@/lib/motion";
import { Reveal } from "./Reveal";
import { PageHero } from "./PageHero";
import { SectionHeader } from "./SectionHeader";
import { ProseSection } from "./ProseSection";
import { Stagger, StaggerChild } from "./Stagger";
import { CtaBanner } from "./CtaBanner";
import { FaqJsonLd, ServiceJsonLd, BreadcrumbJsonLd } from "./JsonLd";
import { IconCheck } from "./Icons";

export type { ServicePageData };

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const path =
    data.slug === "debarras"
      ? "/debarras"
      : data.slug === "demenagement"
        ? "/demenagement"
        : "/nettoyage-entrepot";

  return (
    <>
      <ServiceJsonLd
        name={data.title}
        description={data.metaDescription}
        url={path}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: data.badge, url: path },
        ]}
      />
      <FaqJsonLd items={data.faq} />

      <PageHero
        eyebrow={data.badge}
        title={data.title}
        description={data.heroDescription}
        breadcrumbs={[{ label: data.badge }]}
      />

      <section className="section-pad bg-background">
        <div className="container-pro">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal variant="left">
              <motion.div
                className="image-frame relative aspect-[4/3] lg:sticky lg:top-32"
                whileHover={{ scale: 1.02 }}
                transition={transition}
              >
                <Image
                  src={data.image}
                  alt={data.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </Reveal>
            <div>
              <Reveal>
                <SectionHeader
                  align="left"
                  eyebrow="Notre approche"
                  title={`${data.badge} FLYROCKS : méthode et garanties`}
                />
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-6 text-lg leading-relaxed text-muted">{data.intro}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  {data.introExtended}
                </p>
              </Reveal>
              <Stagger className="mt-10 space-y-3">
                {data.benefits.map((b) => (
                  <StaggerChild key={b}>
                    <motion.div
                      className="pro-card flex items-start gap-4 p-5"
                      whileHover={{ x: 4 }}
                      transition={transitionFast}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                        <IconCheck className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium leading-relaxed">{b}</span>
                    </motion.div>
                  </StaggerChild>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-pro">
          <Reveal>
            <SectionHeader
              eyebrow="Cas d'usage"
              title="Situations les plus fréquentes"
              description="Nous adaptons nos moyens et notre organisation à chaque contexte."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.situations.map((s) => (
              <StaggerChild key={s.title}>
                <motion.article
                  className="pro-card h-full p-7"
                  whileHover={{ y: -4 }}
                  transition={transitionFast}
                >
                  <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.description}</p>
                </motion.article>
              </StaggerChild>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-pro">
          <div className="mx-auto max-w-3xl">
            <ProseSection sections={data.contentSections} />
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-pro">
          <Reveal>
            <SectionHeader
              eyebrow="Processus"
              title="4 étapes pour un résultat maîtrisé"
              align="center"
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.process.map((step, i) => (
              <StaggerChild key={step.title}>
                <motion.div
                  className="pro-card h-full p-7"
                  whileHover={{ y: -4 }}
                  transition={transitionFast}
                >
                  <span className="font-display text-3xl text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
                </motion.div>
              </StaggerChild>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-pro">
          <Reveal>
            <SectionHeader
              align="left"
              eyebrow="Zone d'intervention"
              title={data.zonesTitle}
              description={data.zonesNote}
            />
          </Reveal>
          <Stagger className="mt-10 flex flex-wrap gap-3">
            {data.zones.map((zone) => (
              <StaggerChild key={zone}>
                <motion.span
                  className="inline-block rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground"
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,88,32,0.4)" }}
                  transition={transitionFast}
                >
                  {zone}
                </motion.span>
              </StaggerChild>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-pro max-w-3xl">
          <Reveal>
            <SectionHeader align="left" eyebrow="FAQ" title="Questions fréquentes" />
          </Reveal>
          <div className="mt-10 space-y-3">
            {data.faq.map((item, i) => (
              <Reveal key={item.q} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <details className="pro-card group p-6 open:border-brand/30">
                  <summary className="cursor-pointer list-none font-semibold text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="mr-2 inline-block text-brand transition-transform group-open:rotate-45">
                      +
                    </span>
                    {item.q}
                  </summary>
                  <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-pro">
          <div className="rounded-2xl border border-border bg-surface p-8 text-center lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Autres services FLYROCKS
            </p>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted">
              Découvrez également nos prestations complémentaires pour gérer l&apos;intégralité
              de votre projet avec un seul interlocuteur.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {data.otherServices.map((s) => (
                <Link key={s.href} href={s.href} className="btn btn-secondary text-sm">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Un projet de ${data.badge.toLowerCase()} ?`}
        description="Devis gratuit sous 24 h. Intervention planifiable sous 48 h selon disponibilité."
      />
    </>
  );
}
