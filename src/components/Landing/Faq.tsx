import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Chip from '../ui/Chip';

export default function FAQ() {
  return (
    <div className="w-full min-h-100vh max-h-fit flex flex-col gap-6 mt-20 px-4 ">
      <div className=" w-full  h-fit flex flex-row md:justify-center">
       <Chip/>
      </div>
      <div className=" w-full  h-fit flex flex-row md:justify-center">
        <h1 className=" text-2xl font-medium">Discover Next-Level Features</h1>
      </div>
      <div className=" w-full  h-fit flex flex-row md:justify-center">
        <span className="text-[#94A3B8] leading-8 max-w-[38rem] md:text-center text-left w-fit md:text-lg text-xl font-light">
          Discover the ultimate insights into cutting-edge advancements. Our
          next-level features guide reveals the essentials for staying ahead.
        </span>
      </div>
      <section className="w-full h-[20rem] flex flex-row justify-center mt-6">
    <Accordion type="single" collapsible className="w-full max-w-3xl">
          <AccordionItem value="1">
            <AccordionTrigger>ddddddddd</AccordionTrigger>
            <AccordionContent>dddd</AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>ddddddddd</AccordionTrigger>
            <AccordionContent>dddd</AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger>ddddddddd</AccordionTrigger>
            <AccordionContent>dddd</AccordionContent>
          </AccordionItem>
          <AccordionItem value="4">
            <AccordionTrigger>ddddddddd</AccordionTrigger>
            <AccordionContent>dddd</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
