import { NetworkIcon } from 'lucide-react';
import { SectionDetails } from '../section/section-details';

export function IntegrationSectionHead() {
  const icon = <NetworkIcon size={16} className="ml-1 mr-1" />;
  return (
    <>
      <SectionDetails
        sectionName="Integration"
        heading="Master Integration Like Pros"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum"
        icon={icon}
      />
    </>
  );
}
