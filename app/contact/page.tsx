import { SiteLayout } from "../components/SiteLayout";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";
import { Reveal } from "../components/Reveal";
import { SectionHeader } from "../components/SectionHeader";
import { ProseSection } from "../components/ProseSection";
import { FaqJsonLd, BreadcrumbJsonLd } from "../components/JsonLd";
import { IconPhone } from "../components/Icons";
import { SITE } from "@/lib/site";
import { createMetadata } from "@/lib/seo";
import { contactMeta, contactIntro, contactFaq } from "@/lib/content/contact";

export const metadata = createMetadata({
  title: contactMeta.title,
  description: contactMeta.description,
  path: "/contact",
  keywords: contactMeta.keywords,
});

export default function ContactPage() {
  return (
    <SiteLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <FaqJsonLd items={contactFaq} />

      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet de débarras, déménagement ou nettoyage"
        description="Remplissez le formulaire ci-dessous ou contactez-nous par téléphone. Notre équipe commerciale vous répond sous 24 h avec un devis gratuit et sans engagement."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="section-pad bg-background">
        <div className="container-pro">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl text-foreground">Coordonnées</h2>
              <p className="mt-3 text-muted">
                Disponibles du lundi au samedi, de 7h à 20h, pour les particuliers et
                les professionnels sur toute la France (planning selon région).
              </p>

              <a
                href={SITE.phoneHref}
                className="pro-card mt-8 flex items-center gap-4 p-6 transition-colors hover:border-brand/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                  <IconPhone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Téléphone
                  </p>
                  <p className="text-lg font-bold text-foreground">{SITE.phone}</p>
                </div>
              </a>

              <div className="pro-card mt-4 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Email
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-1 block font-semibold text-brand hover:underline"
                >
                  {SITE.email}
                </a>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Devis gratuit et sans engagement
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Réponse sous 24 h
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Débarras, déménagement, nettoyage d&apos;entrepôts
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Intervention planifiable sous 48 h
                </li>
              </ul>
            </div>

            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-3xl">
            <ProseSection
              sections={[
                {
                  title: contactIntro.title,
                  paragraphs: contactIntro.paragraphs,
                },
              ]}
            />
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <Reveal>
              <SectionHeader align="left" eyebrow="FAQ contact" title="Avant de nous écrire" />
            </Reveal>
            <div className="mt-8 space-y-3">
              {contactFaq.map((item, i) => (
                <Reveal key={item.q} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <details className="pro-card p-6">
                    <summary className="cursor-pointer list-none font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                      <span className="mr-2 text-brand">+</span>
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
        </div>
      </section>
    </SiteLayout>
  );
}
