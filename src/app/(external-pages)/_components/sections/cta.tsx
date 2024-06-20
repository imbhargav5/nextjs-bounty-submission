import { Sailboat } from 'lucide-react';
import TitleBlock from '../title_block';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <div className="py-16 px-6 flex flex-col justify-center items-center space-y-6">
      <TitleBlock
        icon={<Sailboat size={16} />}
        section="Start you journey"
        title="Ready to move with ultimate?"
        subtitle="CI/CD streamlines feature delivery, scalable infrastructure ensures global edge optimization and app monitoring capabilities for peak site performance."
      />
      <Button className="px-6">Get Started</Button>
    </div>
  );
}
