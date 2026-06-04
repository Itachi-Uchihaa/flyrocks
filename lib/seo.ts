import type { Metadata } from "next";
import { SITE } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: PageMeta): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? title
      : `${title} | ${SITE.shortName}`;

  const uniqueKeywords = [
    ...new Set([
      "FLYROCKS Multi Services",
      "FLYROCKS",
      ...keywords,
    ]),
  ];

  return {
    title: fullTitle,
    description,
    keywords: uniqueKeywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}
