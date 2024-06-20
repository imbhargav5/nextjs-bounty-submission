import BrandSection from '@/components/landing/BrandSection/BrandSection';
import CTASection from '@/components/landing/CTASection/CTASection';
import FAQSection from '@/components/landing/FAQSection/FAQSection';
import FeatureSection from '@/components/landing/FeatureSection/FeatureSection';
import HeroSection from '@/components/landing/BrandSection/HeroSection/HeroSection';
import IntegrationSection from '@/components/landing/IntegerationSection/IntegrationSection';
import PricingSection from '@/components/landing/PricingSection/PricingSection';
import QuotetionSection from '@/components/landing/QuotetionSection/QuotetionSection';
import TestimonialSection from '@/components/landing/TestimonialSection/TestimonialSection';

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
