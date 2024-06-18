import { Footer } from '@/components/Footer/Footer';
import Hero from './hero';

export default function Page() {
  return (
    <div className="px-6">
      <Hero />
      <div>Logo Cloud</div>
      <div>Features</div>
      <div>Quotetion</div>
      <div>Integration</div>
      <div>Testimonials</div>
      <div>Pricing</div>
      <div>FAQ</div>
      <div>CTA</div>
      <Footer />
    </div>
  );
}
