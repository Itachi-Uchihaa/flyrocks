export const SITE = {
  name: "FLYROCKS Multi Services",
  shortName: "FLYROCKS",
  url: "https://www.flyrocks.fr",
  phone: "+33 6 19 70 22 67",
  phoneHref: "tel:+33619702267",
  email: "patrickzola39@yahoo.fr",
  locale: "fr_FR",
} as const;

export const SERVICES = [
  {
    slug: "debarras",
    href: "/debarras",
    label: "Débarras",
    title: "Débarras professionnel",
    description:
      "Vidage et débarras de logements, caves, bureaux et locaux commerciaux. Tri, évacuation et remise en état.",
    longDescription:
      "Débarras de maison, appartement, cave, succession, bureaux et locaux commerciaux. Tri sélectif, évacuation vers filières agréées, nettoyage de fin de chantier. Devis gratuit sous 24 h, intervention sous 48 h.",
    image:
      "/VidageDebarras.jpg",
  },
  {
    slug: "demenagement",
    href: "/demenagement",
    label: "Déménagement",
    title: "Déménagement clé en main",
    description:
      "Déménagement pour particuliers et entreprises : emballage, transport, manutention et installation.",
    longDescription:
      "Déménagement pour particuliers et entreprises : emballage, transport assuré, monte-meubles, garde-meubles. Transfert bureaux, entrepôts et longue distance. Chef de projet dédié pour les volumes importants.",
    image:
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "nettoyage-entrepot",
    href: "/nettoyage-entrepot",
    label: "Nettoyage d'entrepôts",
    title: "Nettoyage industriel d'entrepôts",
    description:
      "Nettoyage approfondi d'entrepôts, zones logistiques et surfaces industrielles.",
    longDescription:
      "Nettoyage d'entrepôts, plateformes logistiques et ateliers : sols, quais, désinfection, contrats récurrents. Intervention de nuit ou week-end, rapport qualité, protocoles HSE.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const NAV = {
  services: SERVICES.map((s) => ({ href: s.href, label: s.label })),
  main: [
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ],
} as const;
