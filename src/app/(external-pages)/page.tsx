import Companies from "./sections/Companies";
import Cta from "./sections/Cta";
import Faq from "./sections/Faq";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Integration from "./sections/Integration";
import Pricing from "./sections/Pricing";
import Quotation from "./sections/Quotation";
import Testimonials from "./sections/Testimonials";

export default function Page() {
  return <div className="flex flex-col justify-center items-center gap-24 py-24">
    <Hero />
    <Companies />
    <Features />
    <Quotation />
    <Integration />
    <Testimonials />
    <Pricing />
    <Faq />
    <Cta />
  </div>;
}
