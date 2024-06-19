
import { SparklesIcon } from 'lucide-react';
import { SectionDetails } from '../section/section-details';

export function FeaturesSectionHead() {
  const sparkle = <SparklesIcon size={16} className="ml-1 mr-1" />;
  return (
    <SectionDetails
      sectionName="Features"
      heading="Discover Next-Level Features"
      description="Discover the ultimate insights into cutting-edge advancements. Our next-level features guide reveals the essentials for staying ahead."
      icon={sparkle}
    />
  );
}
