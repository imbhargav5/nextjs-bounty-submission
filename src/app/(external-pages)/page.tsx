import { CompanySection } from './_components/company-section';
import { FeaturesGrid } from './_components/features-section/body';
import { FeaturesSectionHead } from './_components/features-section/head';
import { HeroSectionHead } from './_components/hero-section/head';
import { HeroImage } from './_components/hero-section/body';
import { Section } from './_components/section/section';
import { QuoteSection } from './_components/quote-section.tsx';
import { IntegrationSectionHead } from './_components/integration-section/head';
import { Orbits } from './_components/integration-section/body';
import { TestimonialSection } from './_components/testimonial-section';
import { PricingSectionHead } from './_components/pricing-section/head';
import { Pricing } from './_components/pricing-section/body';
export default function Page() {
  return (
    <main className="w-full h-full">
      <Section
        sectionHead={<HeroSectionHead />}
        body={<HeroImage />}
        classes="px-8 pt-[10px] pb-12 gap-12 md:pt-16 md:pb-24 md:gap-16"
      />
      <CompanySection />
      <Section
        sectionHead={<FeaturesSectionHead />}
        body={<FeaturesGrid />}
        classes="pt-12 pb-24 gap-12"
      />
      <QuoteSection />
      <Section
        sectionHead={<IntegrationSectionHead />}
        body={<Orbits />}
        classes="py-12 md:py-24 gap-8"
      />
      <TestimonialSection />
      <Section
        sectionHead={<PricingSectionHead />}
        body={<Pricing />}
        classes="py-12 md:py-24 gap-8"
      />
    </main>
  );
}
