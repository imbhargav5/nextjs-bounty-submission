import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight } from 'lucide-react';
import { QuestionMarkIcon } from '@radix-ui/react-icons';
import SectionTitle from '../_common/SectionTitle';
import SectionDescription from '../_common/SectionDescription';
import Link from 'next/link';

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
    <section className="  flex flex-col items-center container px-4 py-24  ">
      <div className=" flex flex-col gap-12">
        <div className=" flex flex-col gap-4">
          <div>
            <div className="pb-4 flex md:justify-center justify-start">
              <Link
                className="flex gap-1 flex-row w-[192px] text-sm items-center bg-muted rounded-[80px] px-3 py-1 whitespace-nowrap  border dark:border-background"
                href="/#"
              >
                <QuestionMarkIcon />
                <span>Start your journey</span>
                <ArrowRight />
              </Link>
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
