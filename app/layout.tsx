import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import { SITE } from "@/lib/site";
import { OrganizationJsonLd } from "./components/JsonLd";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Débarras, Déménagement & Nettoyage`,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    "FLYROCKS Multi Services — débarras, déménagement et nettoyage d'entrepôts pour particuliers et professionnels. Devis gratuit sous 2h, intervention sous 48h.",
  openGraph: {
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${jakarta.variable} ${dmSerif.variable} scroll-smooth`}>
      <body className="min-h-screen overflow-x-hidden antialiased">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
