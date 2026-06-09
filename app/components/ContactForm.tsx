"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { IconArrow, IconCheck } from "./Icons";

type FormStatus = "idle" | "submitting" | "done" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error ?? "Une erreur est survenue. Réessayez plus tard.");
      }

      setStatus("done");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Une erreur est survenue. Réessayez plus tard.",
      );
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "done" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="pro-card flex min-h-[420px] flex-col items-center justify-center p-12 text-center"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, delay: 0.1 }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white"
          >
            <IconCheck className="h-8 w-8" />
          </motion.span>
          <h3 className="mt-6 font-display text-2xl text-foreground">Message envoyé</h3>
          <p className="mt-3 max-w-sm text-muted">
            Merci pour votre confiance. Un conseiller FLYROCKS vous recontacte sous 24 h.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: easeOut }}
          onSubmit={handleSubmit}
          className="pro-card p-8 lg:p-10"
        >
          <h2 className="font-display text-2xl text-foreground">Formulaire de contact</h2>
          <p className="mt-2 text-sm text-muted">
            Tous les champs marqués * sont obligatoires.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold">Prénom *</span>
              <input
                required
                name="firstname"
                className="input-pro"
                placeholder="Jean"
                disabled={status === "submitting"}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold">Nom *</span>
              <input
                required
                name="lastname"
                className="input-pro"
                placeholder="Dupont"
                disabled={status === "submitting"}
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-semibold">Email *</span>
            <input
              required
              type="email"
              name="email"
              className="input-pro"
              placeholder="jean.dupont@email.com"
              disabled={status === "submitting"}
            />
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-semibold">Téléphone *</span>
            <input
              required
              type="tel"
              name="phone"
              className="input-pro"
              placeholder="06 00 00 00 00"
              disabled={status === "submitting"}
            />
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-semibold">Type de prestation</span>
            <select name="service" className="input-pro" disabled={status === "submitting"}>
              <option>Débarras</option>
              <option>Déménagement</option>
              <option>Nettoyage d&apos;entrepôt</option>
              <option>Plusieurs services</option>
            </select>
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-semibold">Votre message</span>
            <textarea
              name="message"
              rows={4}
              className="input-pro resize-none"
              placeholder="Décrivez votre projet, surface, délais souhaités..."
              disabled={status === "submitting"}
            />
          </label>

          {status === "error" && errorMessage && (
            <p
              role="alert"
              className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {errorMessage}
            </p>
          )}

          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn btn-primary mt-8 w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Envoi en cours…" : "Envoyer ma demande"}
              {status !== "submitting" && <IconArrow className="h-4 w-4" />}
            </button>
          </motion.div>

          <p className="mt-4 text-center text-xs text-muted">
            Vos données sont traitées de manière confidentielle. Sans engagement.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
