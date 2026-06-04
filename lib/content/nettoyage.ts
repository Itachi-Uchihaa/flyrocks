import type { ServicePageData } from "./types";

const other = [
  { label: "Débarras", href: "/debarras" },
  { label: "Déménagement", href: "/demenagement" },
];

export const nettoyageData: ServicePageData = {
  slug: "nettoyage-entrepot",
  badge: "Nettoyage d'entrepôts",
  title: "Nettoyage d'entrepôts, zones logistiques & sites industriels",
  metaDescription:
    "Nettoyage professionnel d'entrepôts et surfaces industrielles : sols, quais, racks, désinfection. Intervention hors horaires, contrats récurrents. Devis FLYROCKS sous 2h.",
  metaKeywords: [
    "nettoyage entrepôt",
    "nettoyage industriel",
    "nettoyage logistique",
    "nettoyage quai de chargement",
    "dégraissage sol industriel",
    "nettoyage entrepôt frigorifique",
    "entretien entrepôt",
    "nettoyage après chantier",
    "hygiène entrepôt",
    "nettoyage Île-de-France",
  ],
  heroDescription:
    "Entrepôts, plateformes logistiques et ateliers exigent des protocoles rigoureux : sécurité, hygiène, respect des normes clients et audits. FLYROCKS déploie des équipes et du matériel professionnel adaptés à vos surfaces et à vos contraintes d'exploitation.",
  image:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
  imageAlt:
    "Nettoyage professionnel d'un entrepôt logistique par équipe FLYROCKS",
  intro:
    "La propreté d'un site logistique ou industriel impacte directement la sécurité des équipes, la durée de vie des équipements et l'image auprès de vos propres clients. Poussières, traces de pneus, résidus d'emballage, graisses sur les sols : autant de risques (glissade, contamination, non-conformité audit) qu'un entretien structuré permet de maîtriser.",
  introExtended:
    "FLYROCKS intervient sur les sols béton et résine, allées de circulation, quais de chargement, zones de picking, vestiaires, sanitaires et bureaux attenants. Nous adaptons la fréquence (ponctuelle, hebdomadaire, mensuelle) et les horaires (jour, nuit, week-end) pour ne pas perturber votre flux marchandises.",
  benefits: [
    "Audit gratuit des surfaces et des contraintes HSE de votre site",
    "Nettoyage mécanisé : autolaveuse, mono-brosse, haute pression",
    "Dégraissage industriel et traitement des zones à fort trafic",
    "Désinfection des points de contact et sanitaires",
    "Intervention hors plages d'activité (nuit, week-end)",
    "Rapport d'intervention et check-list qualité remis au client",
  ],
  situations: [
    {
      title: "Entrepôt logistique & e-commerce",
      description:
        "Entretien des allées, zones de préparation de commandes et quais. Réduction des poussières et débris pour un environnement de travail sûr.",
    },
    {
      title: "Plateforme frigorifique ou agroalimentaire",
      description:
        "Protocoles adaptés aux exigences d'hygiène sectorielles, produits compatibles avec vos contraintes réglementaires.",
    },
    {
      title: "Site de production & atelier",
      description:
        "Dégraissage des sols, nettoyage des zones machines accessibles, enlèvement des résidus de production.",
    },
    {
      title: "Nettoyage après déménagement ou débarras",
      description:
        "Remise en état complète d'un local vidé avant relocation, travaux ou reprise d'activité.",
    },
    {
      title: "Contrat d'entretien récurrent",
      description:
        "Planning personnalisé (hebdo, bi-mensuel, mensuel) avec équipes dédiées et indicateurs de suivi.",
    },
    {
      title: "Grand nettoyage annuel",
      description:
        "Opération de fond : racks, hauteur des allées selon accès, zones négligées au quotidien.",
    },
  ],
  contentSections: [
    {
      id: "protocoles-industriels",
      title: "Protocoles de nettoyage adaptés à l'industrie",
      paragraphs: [
        "Chaque site fait l'objet d'un cahier des charges : type de revêtement, zones à fort trafic chariots, présence de poussières alimentaires ou de particules, température ambiante. Nous sélectionnons les produits et le matériel (autolaveuse, brosse, aspirateur industriel, HP) en conséquence.",
        "Nos équipes sont briefées sur vos règles de sécurité : port des EPI, circulation dans les allées, consignation des zones en intervention.",
      ],
    },
    {
      id: "normes-hygiene",
      title: "Hygiène, sécurité et préparation aux audits",
      paragraphs: [
        "Un entrepôt propre facilite les audits clients, les contrôles internes et la prévention des accidents du travail. Nous documentons les prestations réalisées et pouvons aligner nos check-lists sur vos exigences qualité (ISO, IFS, BRC selon secteur — à préciser lors du devis).",
        "La désinfection des poignées, vestiaires, sanitaires et zones de pause complète l'entretien des sols pour une approche globale.",
      ],
    },
    {
      id: "contrat-entretien",
      title: "Pourquoi souscrire un contrat d'entretien régulier ?",
      paragraphs: [
        "L'entretien ponctuel traite l'urgence ; le contrat récurrent stabilise le niveau de propreté, lisse le budget et réduit les arrêts pour « grand nettoyage » coûteux. Vous bénéficiez d'équipes qui connaissent votre site et de créneaux réservés.",
        "FLYROCKS propose des formules évolutives : augmentation de fréquence en période de pic, renfort avant inventaire ou visite client.",
      ],
    },
  ],
  zonesTitle: "Intervention nettoyage entrepôt & industriel",
  zones: [
    "Île-de-France & Paris",
    "Normandie",
    "Hauts-de-France",
    "Grand Est",
    "Centre-Val de Loire",
    "Bourgogne-Franche-Comté",
    "Sites multi-régions sur contrat",
  ],
  zonesNote:
    "Nos équipes de nettoyage industriel couvrent principalement l'Île-de-France et les régions limitrophes. Pour les réseaux multi-sites, contactez-nous pour une proposition cadre.",
  process: [
    {
      title: "Audit terrain",
      desc: "Visite du site, mesure des surfaces, identification des contraintes et des priorités.",
    },
    {
      title: "Proposition & planning",
      desc: "Devis détaillé, fréquence, horaires et protocoles validés avec votre responsable site.",
    },
    {
      title: "Exécution",
      desc: "Équipe et matériel dédiés, respect des consignes HSE et du planning convenu.",
    },
    {
      title: "Contrôle qualité",
      desc: "Vérification finale, rapport d'intervention et ajustements si contrat récurrent.",
    },
  ],
  faq: [
    {
      q: "Quelles surfaces nettoyez-vous dans un entrepôt ?",
      a: "Sols béton, résine et carrelage, allées de circulation, quais, zones de stockage accessibles, sanitaires, vestiaires, bureaux attenants. Les racks en hauteur peuvent être traités selon accès et équipement.",
    },
    {
      q: "Pouvez-vous intervenir la nuit ou le week-end ?",
      a: "Oui, c'est même recommandé pour limiter l'interaction avec les flux logistiques. Nous adaptons les créneaux à votre activité.",
    },
    {
      q: "Utilisez-vous des produits compatibles agroalimentaire ?",
      a: "Oui, sur demande nous alignons les produits et protocoles sur les exigences de votre secteur. Précisez-le lors de l'audit.",
    },
    {
      q: "Quelle fréquence d'entretien pour un entrepôt de 5 000 m² ?",
      a: "Elle dépend du trafic, du type d'activité et de vos standards internes. Après audit, nous proposons un planning (ex. hebdomadaire allées + mensuel approfondi).",
    },
    {
      q: "Le devis de nettoyage d'entrepôt est-il gratuit ?",
      a: "Oui, l'audit et le devis sont gratuits et sans engagement. Réponse sous 2 heures ouvrées pour les demandes par formulaire ou téléphone.",
    },
    {
      q: "Proposez-vous le nettoyage après fin de bail ou déménagement ?",
      a: "Oui, remise en état complète d'un local vidé, en complément de nos prestations de débarras et déménagement.",
    },
    {
      q: "Fournissez-vous un rapport après intervention ?",
      a: "Oui, une check-list et un compte-rendu peuvent être remis, utiles pour vos audits et le suivi qualité interne.",
    },
    {
      q: "Gérez-vous les déchets et eaux usées du nettoyage ?",
      a: "Les résidus sont évacués conformément à la réglementation. Les eaux de lavage sont traitées selon le protocole validé (réseau, récupération selon site).",
    },
  ],
  otherServices: other,
};
