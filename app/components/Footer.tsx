import Link from "next/link";
import { SERVICES, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="section-dark border-t border-white/10">
      <div className="container-pro py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-xs font-extrabold text-white">
                FR
              </span>
              <div>
                <span className="block font-bold text-white">{SITE.shortName}</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  Multi Services
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Débarras, déménagement et nettoyage d&apos;entrepôts pour particuliers
              et entreprises. Excellence opérationnelle, partout en France.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href={SITE.phoneHref}
                className="font-semibold text-white transition-colors hover:text-brand-light"
              >
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="text-white/55 transition-colors hover:text-brand-light"
              >
                {SITE.email}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-light">
                Services
              </h3>
              <ul className="mt-4 space-y-2.5">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={s.href}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-light">
                Entreprise
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link href="/a-propos" className="text-sm text-white/55 hover:text-white">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-white/55 hover:text-white">
                    Contact & devis
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-light">
                Horaires
              </h3>
              <p className="mt-4 text-sm text-white/55">
                Lun – Sam
                <br />
                7h – 20h
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="#" className="hover:text-white">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-white">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
