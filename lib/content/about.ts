import type { ContentSection } from "./types";

export const aboutMeta = {
  title: "À propos de FLYROCKS — Expertise débarras, déménagement & nettoyage",
  description:
    "Découvrez FLYROCKS Multi Services : entreprise française, 15 ans d'expérience, équipes certifiées en débarras, déménagement et nettoyage d'entrepôts. Valeurs, méthode et zone d'intervention.",
  keywords: [
    "à propos FLYROCKS",
    "entreprise débarras",
    "société déménagement",
    "nettoyage industriel France",
    "équipes professionnelles",
  ],
};

export const aboutSections: ContentSection[] = [
  {
    id: "histoire",
    title: "Notre histoire et notre métier",
    paragraphs: [
      "FLYROCKS Multi Services est née d'un constat terrain : les particuliers comme les entreprises ont besoin d'un prestataire fiable, capable d'enchaîner débarras, déménagement et remise en propreté sans multiplier les interlocuteurs. Depuis plus de 15 ans, nous avons structuré nos équipes, notre flotte et nos processus pour répondre à cette exigence avec un niveau de service constant.",
      "Aujourd'hui, nous accompagnons chaque mois des centaines de clients — successions, déménagements familiaux, transferts de bureaux, entretien d'entrepôts logistiques — avec la même attention portée aux délais, au détail et à la communication.",
    ],
  },
  {
    id: "equipes",
    title: "Des équipes salariées et une flotte moderne",
    paragraphs: [
      "Nos collaborateurs sont salariés et formés en continu à la manutention, à la conduite d'engins de nettoyage industriel et aux règles de sécurité sur site. Nous investissons dans une flotte de véhicules récents et un parc de matériel professionnel (autolaveuses, monte-meubles, bennes, équipements de protection).",
      "Cette organisation interne nous permet de maîtriser la qualité de service, contrairement à une sous-traitance opaque où le client ne sait pas qui interviendra réellement.",
    ],
  },
  {
    id: "environnement",
    title: "Respect de l'environnement et traçabilité",
    paragraphs: [
      "Le débarras et l'activité logistique génèrent des flux de déchets importants. FLYROCKS applique un tri systématique et des filières agréées pour le recyclage et l'évacuation. Lorsque c'est possible, nous favorisons le réemploi et le don plutôt que la destruction.",
      "Pour les entreprises soumises à des audits ou des reporting RSE, nous pouvons documenter les volumes orientés vers le recyclage et les filières utilisées.",
    ],
  },
  {
    id: "relation-client",
    title: "Une relation client transparente",
    paragraphs: [
      "Chaque projet démarre par un devis clair, sans frais cachés. Un interlocuteur unique suit votre dossier du premier appel à la clôture du chantier. En cas d'imprévu (volume supérieur, accès bloqué), nous vous consultons avant toute adaptation tarifaire.",
      "Notre objectif : que vous recommandiez FLYROCKS pour la qualité du travail réalisé et la sérénité du parcours, pas seulement pour le prix.",
    ],
  },
];

export const aboutValues = [
  {
    title: "Exigence opérationnelle",
    desc: "Protocoles stricts, contrôle qualité systématique, briefings sécurité avant chaque intervention.",
  },
  {
    title: "Transparence tarifaire",
    desc: "Devis détaillés, forfaits compris, validation avant travaux supplémentaires.",
  },
  {
    title: "Réactivité terrain",
    desc: "Réponse commerciale sous 2 h, planification sous 48 h selon disponibilité.",
  },
  {
    title: "Responsabilité environnementale",
    desc: "Tri, recyclage et filières agréées sur tous nos débarras et chantiers.",
  },
  {
    title: "Sécurité des personnes et des biens",
    desc: "EPI, assurance RC Pro, protocoles de manutention et d'arrimage.",
  },
  {
    title: "Proximité & disponibilité",
    desc: "Lun–Sam 7h–20h, un numéro direct et un formulaire en ligne pour vos urgences.",
  },
];
