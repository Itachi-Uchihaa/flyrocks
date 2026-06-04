export type ContentSection = {
  id?: string;
  title: string;
  paragraphs: string[];
};

export type Situation = {
  title: string;
  description: string;
};

export type ServicePageData = {
  slug: string;
  title: string;
  metaDescription: string;
  metaKeywords: string[];
  badge: string;
  heroDescription: string;
  image: string;
  imageAlt: string;
  intro: string;
  introExtended: string;
  benefits: string[];
  situations: Situation[];
  contentSections: ContentSection[];
  zonesTitle: string;
  zones: string[];
  zonesNote: string;
  process: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
  otherServices: { label: string; href: string }[];
};
