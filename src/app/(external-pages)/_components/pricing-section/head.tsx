import { DollarSignIcon, NetworkIcon } from 'lucide-react';
import { SectionDetails } from '../section/section-details';

export function PricingSectionHead() {
  const icon = <DollarSignIcon size={16} className="ml-1 mr-1" />;
  return (
    <>
      <SectionDetails
        sectionName="Pricing"
        heading="Quality without any compromise"
        description="CI/CD streamlines feature delivery, scalable infrastructure ensures global edge optimization and app monitoring capabilities for peak site performance."
        icon={icon}
      />
    </>
  );
}
