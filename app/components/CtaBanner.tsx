"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";
import { IconArrow } from "./Icons";
import { Reveal } from "./Reveal";
import { easeOut, transition } from "@/lib/motion";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

export function CtaBanner({
  title = "Obtenez votre devis personnalisé",
  description = "Réponse sous 2 heures ouvrées. Sans engagement, 100 % gratuit.",
}: CtaBannerProps) {
  return (
    <section className="section-pad">
      <div className="container-pro">
        <Reveal variant="scale">
          <motion.div
            className="cta-band relative px-8 py-14 text-center lg:px-16 lg:py-16 lg:text-left"
            whileHover={{ scale: 1.005 }}
            transition={transition}
          >
            <motion.div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl"
              animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
              <motion.div
                className="max-w-xl"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: easeOut }}
              >
                <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
                  {title}
                </h2>
                <p className="mt-3 text-base text-white/85 lg:text-lg">{description}</p>
              </motion.div>
              <motion.div
                className="flex flex-col gap-3 sm:flex-row sm:items-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.55, ease: easeOut }}
              >
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/contact"
                    className="btn inline-flex rounded-full bg-white px-8 py-4 text-brand shadow-lg"
                  >
                    Demander un devis
                    <IconArrow className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <a
                    href={SITE.phoneHref}
                    className="btn rounded-full border border-white/40 px-8 py-4 text-white hover:bg-white/10"
                  >
                    {SITE.phone}
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
