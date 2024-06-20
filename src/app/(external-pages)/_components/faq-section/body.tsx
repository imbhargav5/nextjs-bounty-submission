import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const items = [
  {
    question: 'Is it styled?',
    answer:
      "Yes. It comes with default styles that match the other components' aesthetic.",
  },
  {
    question: 'Is it accessible?',
    answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    question: 'Is it animated?',
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    question: 'Is it animated?',
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

export function FAQList() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-[728px] py-4">
      {items.map((item, i) => (
        <AccordionItem value={`item-${i + 1}`} key={i}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent className="text-sm pb-8 text-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
