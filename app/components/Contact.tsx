"use client";

import { Reveal } from "./Reveal";
import { IconArrow, IconPhone } from "./Icons";
import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-foreground py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
                Contact
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Obtenez votre devis gratuit en quelques minutes
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Décrivez votre besoin — notre équipe vous recontacte sous 2 heures
                avec une proposition claire et sans engagement.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href="tel:+33100000000"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 transition-colors hover:bg-white/10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white">
                    <IconPhone className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm text-white/60">Appelez-nous directement</p>
                    <p className="text-lg font-bold text-white">01 00 00 00 00</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Disponible du lundi au samedi, 7h – 20h
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={2}>
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-[2rem] bg-white p-10 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft text-3xl text-accent">
                  ✓
                </span>
                <h3 className="mt-6 text-2xl font-bold text-foreground">Demande envoyée !</h3>
                <p className="mt-3 text-muted">
                  Merci pour votre confiance. Un conseiller FLYROCKS vous contactera très rapidement.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-[2rem] bg-white p-8 shadow-[var(--shadow-elevated)] lg:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-foreground">Prénom</span>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="Jean"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-foreground">Nom</span>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="Dupont"
                    />
                  </label>
                </div>
                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-semibold text-foreground">Email</span>
                  <input
                    required
                    type="email"
                    className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="jean.dupont@email.com"
                  />
                </label>
                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-semibold text-foreground">Téléphone</span>
                  <input
                    required
                    type="tel"
                    className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="06 00 00 00 00"
                  />
                </label>
                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-semibold text-foreground">Type de prestation</span>
                  <select className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20">
                    <option>Débarras</option>
                    <option>Déménagement</option>
                    <option>Nettoyage d'entrepôt</option>
                    <option>Autre / plusieurs services</option>
                  </select>
                </label>
                <label className="mt-5 block">
                  <span className="mb-2 block text-sm font-semibold text-foreground">Votre message</span>
                  <textarea
                    rows={4}
                    className="w-full resize-none rounded-xl border border-border bg-cream px-4 py-3 text-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="Décrivez votre projet..."
                  />
                </label>
                <button
                  type="submit"
                  className="btn-primary mt-6 flex w-full items-center justify-center gap-2 rounded-full py-4 text-base font-semibold"
                >
                  Envoyer ma demande
                  <IconArrow className="w-5 h-5" />
                </button>
                <p className="mt-4 text-center text-xs text-muted">
                  Vos données sont traitées de manière confidentielle. Sans engagement.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
