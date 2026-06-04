"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { easeOut, transitionFast } from "@/lib/motion";
import { NAV, SITE } from "@/lib/site";
import { IconClose, IconMenu, IconPhone } from "./Icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <div className="hidden border-b border-border bg-foreground text-white lg:block">
        <div className="container-pro flex h-9 items-center justify-between text-xs">
          <span className="text-white/60">
            Débarras · Déménagement · Nettoyage industriel — France entière
          </span>
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-brand-light"
          >
            <IconPhone className="h-3.5 w-3.5 text-brand" />
            {SITE.phone}
          </a>
        </div>
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: easeOut }}
        className={`sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "header-glass shadow-[var(--shadow-md)]" : "bg-surface border-b border-border"
        }`}
      >
        <div className="container-pro flex h-[4.25rem] items-center justify-between lg:h-[4.75rem]">
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-brand text-xs font-extrabold tracking-tight text-white shadow-[var(--shadow-brand)] transition-transform duration-300 group-hover:scale-[1.02]">
              FR
            </span>
            <div className="hidden leading-tight sm:block">
              <span className="block text-[15px] font-bold tracking-tight text-foreground">
                {SITE.shortName}
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                Multi Services
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className={`btn-ghost rounded-lg px-3 py-2 text-sm ${isActive("/") ? "font-semibold text-brand" : ""}`}
            >
              Accueil
            </Link>

            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`btn-ghost flex items-center gap-1 rounded-lg px-3 py-2 text-sm ${
                  NAV.services.some((s) => pathname === s.href)
                    ? "font-semibold text-brand"
                    : ""
                }`}
              >
                Services
                <svg
                  className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 4.5L6 7.5L9 4.5" strokeLinecap="round" />
                </svg>
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={transitionFast}
                    className="absolute left-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-border bg-surface p-2 shadow-[var(--shadow-lg)]"
                  >
                    {NAV.services.map((s, i) => (
                      <motion.div
                        key={s.href}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          href={s.href}
                          className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-brand-50 hover:text-brand"
                        >
                          {s.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV.main.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`btn-ghost rounded-lg px-3 py-2 text-sm ${isActive(link.href) ? "font-semibold text-brand" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="btn btn-primary text-sm">
                Devis gratuit
              </Link>
            </motion.div>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={transitionFast}
            className="fixed inset-0 top-[4.25rem] z-40 overflow-y-auto bg-surface lg:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06 } },
              }}
              className="container-pro flex flex-col gap-1 py-6"
            >
              <motion.div variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}>
                <Link href="/" className="block rounded-xl px-4 py-3.5 text-base font-semibold hover:bg-brand-50">
                  Accueil
                </Link>
              </motion.div>
              <p className="mt-4 px-4 text-[10px] font-bold uppercase tracking-widest text-brand">
                Services
              </p>
              {NAV.services.map((s) => (
                <motion.div
                  key={s.href}
                  variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
                >
                  <Link href={s.href} className="block rounded-xl px-4 py-3 text-base hover:bg-brand-50">
                    {s.label}
                  </Link>
                </motion.div>
              ))}
              {NAV.main.map((l) => (
                <motion.div
                  key={l.href}
                  variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
                >
                  <Link href={l.href} className="block rounded-xl px-4 py-3.5 text-base font-semibold hover:bg-brand-50">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
                href={SITE.phoneHref}
                className="mt-4 flex items-center gap-2 rounded-xl border border-border px-4 py-3 font-semibold"
              >
                <IconPhone className="h-4 w-4 text-brand" />
                {SITE.phone}
              </motion.a>
              <motion.div variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}>
                <Link href="/contact" className="btn btn-primary mt-3 block w-full py-4 text-center">
                  Devis gratuit
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
