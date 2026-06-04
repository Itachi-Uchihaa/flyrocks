import Image from "next/image";
import Link from "next/link";
import { SiteLayout } from "../components/SiteLayout";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { ProseSection } from "../components/ProseSection";
import { CtaBanner } from "../components/CtaBanner";
import { BreadcrumbJsonLd } from "../components/JsonLd";
import { createMetadata } from "@/lib/seo";
import { aboutMeta, aboutSections, aboutValues } from "@/lib/content/about";

export const metadata = createMetadata({
  title: aboutMeta.title,
  description: aboutMeta.description,
  path: "/a-propos",
  keywords: aboutMeta.keywords,
});

export default function AboutPage() {
  return (
    <SiteLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "À propos", url: "/a-propos" },
        ]}
      />

      <PageHero
        eyebrow="À propos"
        title="15 ans d'expertise au service de vos projets terrain"
        description="FLYROCKS Multi Services réunit débarras, déménagement et nettoyage industriel au sein d'une structure unique — pour vous offrir un interlocuteur fiable, réactif et exigeant sur la qualité."
        breadcrumbs={[{ label: "À propos" }]}
      />

      <section className="section-pad bg-background">
        <div className="container-pro">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="image-frame relative aspect-[4/5]">
                <Image
                  src="/entreprise.jpg"
                  alt="Équipe FLYROCKS en intervention de déménagement professionnel"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </Reveal>
            <Reveal delay={2}>
              <SectionHeader
                align="left"
                eyebrow="Qui sommes-nous ?"
                title="Une entreprise française au service des particuliers et des pros"
                description="Basés en Île-de-France, nous intervenons chaque jour sur des chantiers de débarras, de déménagement et de nettoyage d'entrepôts, avec des standards de sécurité et de transparence élevés."
              />
            </Reveal>
          </div>

          <div className="mx-auto mt-20 max-w-3xl">
            <ProseSection sections={aboutSections} />
          </div>

          <div className="mt-20">
            <Reveal>
              <SectionHeader
                eyebrow="Nos valeurs"
                title="Ce qui guide chaque intervention"
                align="center"
              />
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutValues.map((v, i) => (
              <Reveal key={v.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="pro-card p-8">
                  <h3 className="font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2}>
            <div className="mt-16 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-primary px-8 py-4">
                Demander un devis
              </Link>
              <Link href="/debarras" className="btn btn-secondary px-8 py-4">
                Nos services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
