import BrandSection from '@/components/BrandSection/BrandSection';
import CTASection from '@/components/CTASection/CTASection';
import FAQSection from '@/components/FAQSection/FAQSection';
import FeatureSection from '@/components/FeatureSection/FeatureSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import IntegrationSection from '@/components/IntegerationSection/IntegrationSection';
import PricingSection from '@/components/PricingSection/PricingSection';
import QuotetionSection from '@/components/QuotetionSection/QuotetionSection';
import TestimonialSection from '@/components/TestimonialSection/TestimonialSection';

export default function Page() {
  return (
    <div>
      <HeroSection />
      <BrandSection />
      <FeatureSection />
      <QuotetionSection />
      <IntegrationSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
