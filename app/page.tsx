import { SiteLayout } from "./components/SiteLayout";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { Gallery } from "./components/Gallery";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { HomeSeoContent } from "./components/HomeSeoContent";
import { CtaBanner } from "./components/CtaBanner";
import { createMetadata } from "@/lib/seo";
import { homeMeta } from "@/lib/content/home";

export const metadata = createMetadata({
  title: homeMeta.title,
  description: homeMeta.description,
  path: "/",
  keywords: homeMeta.keywords,
});

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Gallery />
      <Testimonials />
      <HomeSeoContent />
      
      <CtaBanner />
    </SiteLayout>
  );
}
