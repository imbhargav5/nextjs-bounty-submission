import { SailboatIcon } from 'lucide-react';
import { SectionDetails } from '../section/section-details';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const icon = <SailboatIcon size={16} className="ml-1 mr-1" />;
  return (
    <section className="flex flex-col items-start sm:items-center gap-8 pb-11">
      <SectionDetails
        sectionName="Start your journey"
        heading="Ready to move with Ultimate?"
        description="Automated CI/CD streamlines feature delivery, scalable infrastructure ensures global edge optimization and app monitoring capabilities for peak site performance."
        icon={icon}
      />
      <Button
        className="w-[140px] h-11 py-2 px-4 hover:bg-tremor-primary hover:opacity-95 bg-tremor-primary text-primary-foreground dark:hover:opacity-95
       dark:bg-tremor-background-muted dark:text-tremor-primary gap-2"
      >
        Get Started
      </Button>
    </section>
  );
}
