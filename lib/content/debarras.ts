import type { ServicePageData } from "./types";

const other = [
  { label: "Déménagement", href: "/demenagement" },
  { label: "Nettoyage d'entrepôts", href: "/nettoyage-entrepot" },
];

export const debarrasData: ServicePageData = {
  slug: "debarras",
  badge: "Débarras",
  title: "Débarras professionnel : maison, bureau, cave & succession",
  metaDescription:
    "FLYROCKS assure le débarras de logements, caves, greniers, bureaux et locaux commerciaux en France. Tri sélectif, évacuation légale, devis gratuit sous 2 h, intervention sous 48 h.",
  metaKeywords: [
    "débarras maison",
    "débarras appartement",
    "vider logement",
    "débarras succession",
    "débarras cave grenier",
    "débarras bureau",
    "entreprise débarras",
    "débarras après décès",
    "enlèvement encombrants",
    "débarras Île-de-France",
  ],
  heroDescription:
    "Que vous vidiez un logement entier, une cave encombrée ou des bureaux à réaménager, nos équipes prennent en charge le tri, l'évacuation et la remise en état — dans le respect des délais et de l'environnement.",
  image:
    "/flyrocksDebarras.jpg",
  imageAlt:
    "Équipe FLYROCKS réalisant un débarras professionnel de logement avec tri et évacuation",
  intro:
    "Le débarras est bien plus qu'un simple enlèvement de meubles : c'est une opération logistique qui demande méthode, respect des lieux et conformité réglementaire. Chez FLYROCKS Multi Services, chaque chantier débute par une évaluation précise du volume, des accès et de vos contraintes (délais, présence d'objets de valeur, coordination avec un notaire ou un propriétaire).",
  introExtended:
    "Nous intervenons aussi bien pour les particuliers — successions, déménagements partiels, logements non vidés — que pour les professionnels : commerces, bureaux, entrepôts légers ou locaux à rénover. Notre objectif : vous rendre un espace vide, propre et immédiatement exploitable, sans charge mentale ni mauvaise surprise sur la facture.",
  benefits: [
    "Devis gratuit et détaillé transmis sous 2 heures ouvrées",
    "Intervention planifiable sous 48 h en Île-de-France et sur l'ensemble du territoire",
    "Tri sélectif systématique : réemploi, don, recyclage, filières agréées",
    "Manutention et protection des parties communes (ascenseur, cage d'escalier)",
    "Nettoyage de fin de chantier inclus sur demande",
    "Attestation ou rapport d'intervention pour les dossiers de succession ou de location",
  ],
  situations: [
    {
      title: "Débarras après succession",
      description:
        "Accompagnement des familles et des notaires : inventaire simplifié, tri des biens à conserver, évacuation discrète et remise en état du bien pour mise en vente ou relocation.",
    },
    {
      title: "Vidage de logement locatif",
      description:
        "Libération rapide d'appartements ou de maisons non vidés, en lien avec votre agence immobilière. Remise en état pour état des lieux ou relocation.",
    },
    {
      title: "Caves, greniers & garages",
      description:
        "Accès parfois difficiles, volumes accumulés sur des années : nos équipes sont équipées pour évacuer en toute sécurité, y compris sans ascenseur.",
    },
    {
      title: "Bureaux & locaux commerciaux",
      description:
        "Débarras de mobilier, archives, équipements et enseignes. Intervention possible hors heures d'ouverture pour limiter l'impact sur votre activité.",
    },
    {
      title: "Syndics & copropriétés",
      description:
        "Enlèvement d'encombrants dans les parties communes, caves collectives ou locaux techniques, avec traçabilité des déchets.",
    },
    {
      title: "Débarras avant travaux ou vente",
      description:
        "Préparation d'un bien immobilier ou d'un local avant rénovation, mise en vente ou changement d'exploitation.",
    },
  ],
  contentSections: [
    {
      id: "pourquoi-debarras-pro",
      title: "Pourquoi faire appel à un professionnel du débarras ?",
      paragraphs: [
        "Vider seul un logement ou un local professionnel expose à des risques : blessures lors de la manutention, dégradation des parties communes, mauvaise classification des déchets ou coûts cachés en déchetterie. Un prestataire spécialisé structure l'opération, dimensionne les moyens (équipe, camion, bennes) et garantit une évacuation conforme.",
        "FLYROCKS vous évite également les allers-retours multiples : une intervention bien préparée permet de libérer des dizaines de m³ en une journée, avec un interlocuteur unique du devis à la remise des clés.",
      ],
    },
    {
      id: "methode-tri",
      title: "Notre méthode de tri et d'évacuation responsable",
      paragraphs: [
        "Dès notre arrivée sur site, nous séparons les flux : objets à conserver pour le client, dons possibles vers des associations partenaires, recyclage (métaux, bois, électroménager DEEE) et déchets non dangereux en centres agréés. Les produits dangereux ou spécifiques (peintures, solvants, amiante suspect) font l'objet d'une identification préalable et d'une filière dédiée.",
        "Cette organisation réduit l'impact environnemental de votre débarras et sécurise juridiquement votre démarche, notamment dans le cadre d'une succession ou d'une liquidation de stock.",
      ],
    },
    {
      id: "tarifs-debarras",
      title: "Comment est calculé le prix d'un débarras ?",
      paragraphs: [
        "Le tarif dépend principalement du volume à évacuer (en m³), de la nature des objets (mobilier lourd, déchets spéciaux), de l'accessibilité (étage sans ascenseur, parking éloigné) et des prestations annexes (nettoyage, démontage, intervention urgente). Notre devis est forfaitaire et détaillé ligne par ligne : vous savez ce que vous payez avant le début des travaux.",
        "Pour les successions ou les volumes importants, une visite préalable permet d'affiner le chiffrage. Contactez-nous : réponse sous 2 heures ouvrées, sans engagement.",
      ],
    },
  ],
  zonesTitle: "Zone d'intervention débarras",
  zones: [
    "Paris & petite couronne",
    "Île-de-France",
    "Normandie",
    "Hauts-de-France",
    "Grand Est",
    "Centre-Val de Loire",
    "Bourgogne-Franche-Comté",
    "National sur devis",
  ],
  zonesNote:
    "Nos équipes de débarras sont basées en Île-de-France et se déplacent régulièrement en province pour des chantiers programmés. Indiquez votre code postal lors de votre demande de devis pour une réponse adaptée.",
  process: [
    {
      title: "Prise de contact & estimation",
      desc: "Échange téléphonique ou visite pour estimer le volume, les accès et le calendrier souhaité.",
    },
    {
      title: "Devis forfaitaire",
      desc: "Proposition chiffrée transparente, validée avant toute intervention.",
    },
    {
      title: "Débarras & tri sur site",
      desc: "Équipe dédiée, protection des lieux, tri et chargement selon le planning convenu.",
    },
    {
      title: "Remise en état",
      desc: "Évacuation finale, nettoyage si prévu, remise d'un local vide et prêt à l'usage.",
    },
  ],
  faq: [
    {
      q: "Combien de temps dure un débarras de maison ?",
      a: "Pour un logement standard (T3–T4), comptez en général une à deux journées selon le volume et l'accessibilité. Les grandes surfaces ou locaux très encombrés peuvent nécessiter plusieurs jours : le délai est précisé dans votre devis.",
    },
    {
      q: "Intervenez-vous pour un débarras après décès ou succession ?",
      a: "Oui, c'est une demande fréquente. Nous travaillons avec discrétion, en coordination avec les héritiers ou le notaire, et pouvons séparer les objets à conserver de ceux à évacuer.",
    },
    {
      q: "Que faites-vous des meubles encore utilisables ?",
      a: "Lorsque c'est possible, nous orientons vers le don ou la récupération. Le reste part vers le recyclage ou les filières déchets agréées, jamais en dépôt sauvage.",
    },
    {
      q: "Faut-il être présent pendant le débarras ?",
      a: "Votre présence est recommandée au début pour valider les consignes et à la fin pour la réception. Pour les successions, une procuration ou un mandataire peut suffire si les consignes sont documentées.",
    },
    {
      q: "Le devis de débarras est-il gratuit ?",
      a: "Oui, 100 % gratuit et sans engagement. Nous vous répondons sous 2 heures ouvrées avec une fourchette ou un devis ferme selon les informations fournies.",
    },
    {
      q: "Gérez-vous les encombrants volumineux (armoires, électroménager) ?",
      a: "Oui, nos équipes sont équipées pour démonter, descendre et évacuer le mobilier lourd, y compris avec monte-meubles si nécessaire.",
    },
    {
      q: "Proposez-vous un nettoyage après débarras ?",
      a: "Oui, en option ou inclus selon le devis. Idéal avant état des lieux, visite ou mise en vente.",
    },
    {
      q: "Intervenez-vous en urgence sous 48 h ?",
      a: "Oui, selon disponibilité des équipes. Précisez l'urgence lors de votre appel pour prioriser la planification.",
    },
  ],
  otherServices: other,
};
