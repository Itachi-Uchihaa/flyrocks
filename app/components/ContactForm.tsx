"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { IconArrow, IconCheck } from "./Icons";

export function ContactForm() {
  const [done, setDone] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {done ? (
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
            Merci pour votre confiance. Un conseiller FLYROCKS vous recontacte sous 2
            heures ouvrées.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: easeOut }}
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="pro-card p-8 lg:p-10"
        >
      <h2 className="font-display text-2xl text-foreground">Formulaire de contact</h2>
      <p className="mt-2 text-sm text-muted">
        Tous les champs marqués * sont obligatoires.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold">Prénom *</span>
          <input required name="firstname" className="input-pro" placeholder="Jean" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold">Nom *</span>
          <input required name="lastname" className="input-pro" placeholder="Dupont" />
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
        />
      </label>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-semibold">Type de prestation</span>
        <select name="service" className="input-pro">
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
        />
      </label>

          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <button type="submit" className="btn btn-primary mt-8 w-full py-4 text-base">
              Envoyer ma demande
              <IconArrow className="h-4 w-4" />
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
