import { ButtonsContainer } from './buttons-container';
import { SectionDetails } from '../section/section-details';
import { SparklesIcon } from 'lucide-react';

export function HeroSectionHead() {
  const sparkle = <SparklesIcon size={16} className="ml-1 mr-1" />;
  return (
    <div className="flex flex-col items-center gap-6 pt-8 md:pt-12">
      <SectionDetails
        sectionName="Introducing"
        heading="Nextbase Ultimate Landing Page"
        isIntroHeading
        description="Welcome to Nextbase Ultimate Landing Page: Your Gateway to Innovation. Discover the Future of Excellence and Elevate Your Experience."
        icon={sparkle}
      />
      <ButtonsContainer />
    </div>
  );
}
