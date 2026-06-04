import { SiteLayout } from "../components/SiteLayout";
import { ServicePageTemplate } from "../components/ServicePageTemplate";
import { demenagementData } from "@/lib/services-data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: demenagementData.title,
  description: demenagementData.metaDescription,
  path: "/demenagement",
  keywords: demenagementData.metaKeywords,
});

export default function DemenagementPage() {
  return (
    <SiteLayout>
      <ServicePageTemplate data={demenagementData} />
    </SiteLayout>
  );
}
