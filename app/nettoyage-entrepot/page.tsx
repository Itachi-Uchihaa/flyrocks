import { SiteLayout } from "../components/SiteLayout";
import { ServicePageTemplate } from "../components/ServicePageTemplate";
import { nettoyageData } from "@/lib/services-data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: nettoyageData.title,
  description: nettoyageData.metaDescription,
  path: "/nettoyage-entrepot",
  keywords: nettoyageData.metaKeywords,
});

export default function NettoyagePage() {
  return (
    <SiteLayout>
      <ServicePageTemplate data={nettoyageData} />
    </SiteLayout>
  );
}
