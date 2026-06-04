"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { Stagger, StaggerChild } from "./Stagger";
import { transitionFast } from "@/lib/motion";

/** Images locales dans /public — pas de dépendance aux URLs externes */
const images = [
  {
    src: "/camion.jpg",
    alt: "Intervention de débarras et vidage professionnel FLYROCKS",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/calc.jpg",
    alt: "Déménagement professionnel — emballage et logistique",
    span: "",
  },
  {
    src: "/came.jpg",
    alt: "Nettoyage industriel et entretien d'entrepôt",
    span: "",
  },
  {
    src: "/tri.jpg",
    alt: "Flotte de véhicules FLYROCKS Multi Services",
    span: "lg:col-span-2",
  },
];

export function Gallery() {
  return (
    <section className="section-pad bg-background">
      <div className="container-pro">
        <Reveal>
          <SectionHeader
            eyebrow="Réalisations"
            title="Le terrain, au cœur de notre métier"
            description="Des interventions concrètes, menées par des équipes formées et équipées."
          />
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-2 lg:gap-5">
          {images.map((img) => (
            <StaggerChild key={img.src} className={img.span}>
              <motion.div
                className={`group relative overflow-hidden rounded-2xl bg-warm ${img.span.includes("row-span") ? "aspect-[4/5] lg:min-h-full" : "aspect-[4/3]"}`}
                whileHover={{ scale: 1.02 }}
                transition={transitionFast}
              >
                <motion.div className="relative h-full w-full" whileHover={{ scale: 1.06 }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-foreground/0"
                  whileHover={{ backgroundColor: "rgba(20,20,20,0.25)" }}
                />
              </motion.div>
            </StaggerChild>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
