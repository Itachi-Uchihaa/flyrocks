import Link from "next/link";
import { Reveal } from "./Reveal";

export function Stats() {
  return (
    <section className="section-brand py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <Reveal>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Besoin d&apos;une intervention rapide ?
            </h2>
            <p className="mt-2 text-white/85 max-w-md">
              Devis gratuit sous 2 heures. Équipes disponibles 7j/7.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <Link href="/contact" className="btn-white inline-flex rounded-full px-8 py-4 text-base">
              Demander un devis →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
