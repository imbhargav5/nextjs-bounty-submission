import { SparklesIcon } from 'lucide-react';
import { SectionDetails } from '../section/section-details';
import { QuestionMarkIcon } from '@radix-ui/react-icons';

export function FAQSectionHead() {
  const icon = <QuestionMarkIcon className="ml-1 mr-1" />;
  return (
    <SectionDetails
      sectionName="FAQ"
      heading="Frequently asked questions"
      description="Get detailed answers to common inquiries. Enhance your understanding of our offerings and policies."
      icon={icon}
    />
  );
}
