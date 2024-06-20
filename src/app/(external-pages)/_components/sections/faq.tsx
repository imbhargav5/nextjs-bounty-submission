import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faq } from '../../_data/faq';
import Icons from '../icons';
import TitleBlock from '../title_block';

export default function FAQ() {
  return (
    <section className="py-16 px-6 flex flex-col justify-center items-center space-y-6 max-w-6xl mx-auto">
      <TitleBlock
        icon={<Icons.questionMark />}
        section="FAQ"
        title="Frequently Asked Questions"
        subtitle="Get detailed answers to common inquiries. Enhance your understanding of our offerings and policies."
      />
      {faq.map((item, i) => (
        <Accordion
          key={i}
          type="single"
          collapsible
          className="w-full max-w-3xl"
        >
          <AccordionItem value={`item-${i + 1}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </section>
  );
}
