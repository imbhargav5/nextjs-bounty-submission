import Hero from './_components/sections/hero';
import LogoCloud from './_components/sections/logo-cloud';
import Quotetion from './_components/sections/quotetion';
import Integration from './_components/sections/integration';
import CTA from './_components/sections/cta';
import Testimonials from './_components/sections/testimonials';
import FAQ from './_components/sections/faq';
import Pricing from './_components/sections/pricing';
import Features from './_components/sections/features';

export default function Page() {
  return (
    <main>
      <Hero />
      <LogoCloud />
      <Features />
      <Quotetion />
      <Integration />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
