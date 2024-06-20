import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { QuestionMarkIcon } from '@radix-ui/react-icons';
import SectionTitle from '../../_common/SectionTitle';
import SectionDescription from '../../_common/SectionDescription';
import SectionLink from '../../_common/SectionLink';

const FAQs = [
  {
    question: 'Is it styled?',
    answer:
      'Yes. It comes with default styles that matches the other components aesthetic.',
  },
  {
    question: 'Is it accessible?',
    answer: 'Yes. It is built with responsive design in mind.',
  },
  {
    question: 'Is it animated?',
    answer: 'Yes. It is built with customization in mind.',
  },
  {
    question: 'Is it animated?',
    answer: 'Yes. It is built with customization in mind.',
  },
];

const FAQSection = () => {
  return (
    <section className="  flex flex-col items-center md:container px-4 py-24  ">
      <div className=" flex flex-col gap-12">
        <div className=" flex flex-col gap-4">
          <div>
            <div className="pb-4 flex md:justify-center justify-start">
              <SectionLink icon={QuestionMarkIcon} href="/">
                FAQ
              </SectionLink>
            </div>
            <SectionTitle value="FAQs" />
          </div>
          <div>
            <SectionDescription value="Get detailed answers to common inquiries. Enhance your understanding of our offerings and policies." />
          </div>
        </div>
        <div>
          <Accordion type="single" collapsible className=" w-full">
            {FAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
