import { SiteLayout } from "../components/SiteLayout";
import { ServicePageTemplate } from "../components/ServicePageTemplate";
import { debarrasData } from "@/lib/services-data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: debarrasData.title,
  description: debarrasData.metaDescription,
  path: "/debarras",
  keywords: debarrasData.metaKeywords,
});

export default function DebarrasPage() {
  return (
    <SiteLayout>
      <ServicePageTemplate data={debarrasData} />
    </SiteLayout>
  );
}
