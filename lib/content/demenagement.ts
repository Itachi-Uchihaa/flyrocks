import type { ServicePageData } from "./types";

const other = [
  { label: "Débarras", href: "/debarras" },
  { label: "Nettoyage d'entrepôts", href: "/nettoyage-entrepot" },
];

export const demenagementData: ServicePageData = {
  slug: "demenagement",
  badge: "Déménagement",
  title: "Déménagement professionnel : particuliers, bureaux & entrepôts",
  metaDescription:
    "Déménagement clé en main par FLYROCKS : emballage, manutention, transport assuré et installation. Particuliers et entreprises en France. Devis gratuit, équipes certifiées.",
  metaKeywords: [
    "déménagement professionnel",
    "déménageur entreprise",
    "déménagement bureau",
    "déménagement particulier",
    "déménagement entrepôt",
    "garde-meubles",
    "monte-meubles",
    "déménagement Île-de-France",
    "transfert locaux commerciaux",
    "emballage déménagement",
  ],
  heroDescription:
    "Un déménagement réussi repose sur l'anticipation : protection des biens, respect du planning, coordination des accès. FLYROCKS organise votre transfert de A à Z, en France, pour les particuliers comme pour les structures professionnelles.",
  image:
    "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1200&q=80",
  imageAlt:
    "Équipe FLYROCKS chargeant des cartons et mobilier pour un déménagement professionnel",
  intro:
    "Changer de domicile ou transférer un site d'activité génère du stress : délais serrés, objets fragiles, contraintes d'accès en centre-ville ou en zone industrielle. Notre service de déménagement s'appuie sur des équipes salariées formées, une flotte adaptée et des processus rodés pour sécuriser chaque étape.",
  introExtended:
    "De l'emballage de vos biens sensibles au déballage dans vos nouveaux locaux, en passant par le transport assuré et la manutention lourde, un chef de projet unique coordonne l'ensemble. Vous bénéficiez d'un devis détaillé, d'un inventaire sur demande et d'une communication claire avant, pendant et après le jour J.",
  benefits: [
    "Chef de projet dédié pour les déménagements entreprise et volumes importants",
    "Emballage professionnel, housses et cartons renforcés fournis",
    "Transport avec assurance tous risques adaptée à la valeur déclarée",
    "Monte-meubles et grue selon contraintes d'accès",
    "Démontage / remontage de mobilier et postes de travail",
    "Garde-meubles et stockage temporaire sur demande",
  ],
  situations: [
    {
      title: "Déménagement de maison ou appartement",
      description:
        "Transfert complet de votre mobilier et cartons, protection des sols et des parties communes, installation dans votre nouveau logement selon vos indications.",
    },
    {
      title: "Déménagement de bureaux & open space",
      description:
        "Planification hors heures ou week-end, étiquetage par poste, transfert de mobilier, armoires, matériel informatique et archives.",
    },
    {
      title: "Transfert d'entrepôt ou local commercial",
      description:
        "Manutention de rayonnages, stocks palettisés, équipements lourds. Coordination avec vos équipes logistiques.",
    },
    {
      title: "Déménagement longue distance",
      description:
        "Organisation nationale : groupage ou véhicule dédié selon volume et délais. Suivi du chargement à la livraison.",
    },
    {
      title: "Garde-meubles entre deux biens",
      description:
        "Stockage sécurisé de vos biens entre la sortie et l'entrée des lieux, pour éviter un double manutention inutile.",
    },
    {
      title: "Déménagement partiel ou quelques meubles",
      description:
        "Intervention ciblée : un piano, une armoire, du mobilier de bureau — sans obligation de formule complète.",
    },
  ],
  contentSections: [
    {
      id: "preparation-demenagement",
      title: "Comment bien préparer votre déménagement ?",
      paragraphs: [
        "Anticipez la date de transfert, les créneaux d'accès (ascenseur, stationnement camion, autorisation de voirie si nécessaire) et faites l'inventaire des objets fragiles ou de valeur. Signalez tout accès difficile : escaliers étroits, absence d'ascenseur, cour intérieure.",
        "FLYROCKS peut prendre en charge l'emballage intégral ou partiel. Plus la préparation est cadrée en amont, plus le jour J est fluide et respectueux de votre planning.",
      ],
    },
    {
      id: "demenagement-entreprise",
      title: "Déménagement d'entreprise : minimiser l'arrêt d'activité",
      paragraphs: [
        "Pour un transfert de bureaux ou de site logistique, nous établissons un phasage : archives en premier, postes utilisateurs, salles de réunion, cuisine d'entreprise. Les interventions peuvent être planifiées en soirée, nuit ou week-end pour limiter l'impact sur vos collaborateurs et votre production.",
        "Un interlocuteur unique chez FLYROCKS coordonne les équipes terrain et valide avec vous le planning de reprise d'activité dans les nouveaux locaux.",
      ],
    },
    {
      id: "assurance-demenagement",
      title: "Assurance et responsabilité lors du transport",
      paragraphs: [
        "Vos biens sont transportés avec une couverture adaptée à la nature et à la valeur des biens déclarés. Nous documentons l'état des lieux à l'entrée et à la sortie lorsque le projet l'exige, et applions des protocoles de calage et d'arrimage dans nos véhicules.",
        "En cas de question sur les objets de grande valeur (œuvres, équipements spécifiques), mentionnez-le lors du devis pour une solution sur mesure.",
      ],
    },
  ],
  zonesTitle: "Où intervenons-nous pour vos déménagements ?",
  zones: [
    "Paris & petite couronne",
    "Île-de-France complète",
    "Normandie & Hauts-de-France",
    "Grand Est & Bourgogne",
    "Centre & Pays de la Loire",
    "Déménagement longue distance France entière",
  ],
  zonesNote:
    "Basés en Île-de-France, nous réalisons des déménagements locaux quotidiens et des transferts nationaux sur devis. Indiquez les adresses de départ et d'arrivée pour une estimation précise.",
  process: [
    {
      title: "Audit & devis",
      desc: "Visite ou visio pour estimer le volume, les accès et établir un planning réaliste.",
    },
    {
      title: "Préparation",
      desc: "Fourniture cartons, emballage, étiquetage et protection des zones de passage.",
    },
    {
      title: "Chargement & transport",
      desc: "Manutention sécurisée, arrimage, livraison selon le créneau convenu.",
    },
    {
      title: "Installation",
      desc: "Déballage, remontage et mise en place selon votre plan d'implantation.",
    },
  ],
  faq: [
    {
      q: "Combien coûte un déménagement ?",
      a: "Le prix dépend du volume (m³), de la distance, des accès, des prestations (emballage, monte-meubles, garde-meubles). Nous établissons un devis forfaitaire après échange ou visite — gratuit et sans engagement.",
    },
    {
      q: "Combien de temps à l'avance réserver un déménageur ?",
      a: "En haute saison (été, fin de mois), réservez 3 à 4 semaines à l'avance. Hors pic, une intervention sous 48 h à 1 semaine peut être possible selon disponibilité.",
    },
    {
      q: "Fournissez-vous les cartons et le matériel d'emballage ?",
      a: "Oui, nous pouvons fournir cartons, papier bulle, housses et adhésifs professionnels, en option ou inclus dans le devis.",
    },
    {
      q: "Déménagez-vous les pianos et objets lourds ?",
      a: "Oui, avec équipe renforcée et matériel adapté (sangles, chariots, monte-meubles). Signalez ces objets dès la demande de devis.",
    },
    {
      q: "Proposez-vous le garde-meubles ?",
      a: "Oui, stockage sécurisé pour une durée définie, idéal entre deux logements ou en attente de livraison de clés.",
    },
    {
      q: "Intervenez-vous le week-end pour un déménagement de bureau ?",
      a: "Oui, nous planifions régulièrement des transferts professionnels hors heures ouvrées pour limiter l'impact sur l'activité.",
    },
    {
      q: "Qui assure mes biens pendant le transport ?",
      a: "Une assurance dédiée au transport de mobilier est incluse ou proposée selon le niveau de couverture souhaité. Les détails figurent sur votre devis.",
    },
    {
      q: "Puis-je déménager seulement une partie de mon mobilier ?",
      a: "Oui, nous réalisons des missions partielles : quelques meubles, un étage, un département d'entreprise.",
    },
  ],
  otherServices: other,
};
