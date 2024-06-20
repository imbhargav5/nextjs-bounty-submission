import { Button } from '../ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function FAQ() {
  return (
    <div className="flex justify-center py-24">
      <div className="max-w-[728px] text-center">
        <div>
          <Button className="mx-auto max-w-md !bg-[#F1F5F9] h-auto space-x-1 rounded-full py-2 px-3 text-black border border-[#E2E8F0] dark:text-neutral-400/50">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0249 7.17818L10.0249 7.17815C10.4162 6.83114 10.8153 6.47509 11.1057 6.03976C11.41 5.58343 11.5868 5.05607 11.5868 4.37331C11.5868 2.76894 10.0378 1.55332 8.5001 1.55332C6.96239 1.55332 5.41343 2.76894 5.41343 4.37331C5.41343 4.43591 5.36269 4.48665 5.3001 4.48665C5.23751 4.48665 5.18677 4.43591 5.18677 4.37331C5.18677 2.61302 6.8703 1.32666 8.5001 1.32666C10.1299 1.32666 11.8134 2.61301 11.8134 4.37331C11.8134 5.88145 10.9903 6.62516 10.1975 7.32802L10.1975 7.32803L10.1753 7.34772L10.1753 7.34774C9.78323 7.69544 9.38419 8.05024 9.09437 8.48158C8.79005 8.93452 8.61343 9.45686 8.61343 10.1333C8.61343 10.1959 8.5627 10.2466 8.5001 10.2466C8.4375 10.2466 8.38677 10.1959 8.38677 10.1333C8.38677 8.64449 9.20313 7.90657 9.99178 7.20752L9.99184 7.20747L10.0249 7.17818ZM8.93343 13.3146C8.93343 13.5539 8.73941 13.748 8.5001 13.748C8.2608 13.748 8.06677 13.5539 8.06677 13.3146C8.06677 13.0753 8.26076 12.8813 8.5001 12.8813C8.73944 12.8813 8.93343 13.0753 8.93343 13.3146Z"
                fill="#020817"
                stroke="#020817"
              />
            </svg>

            <span className="text-sm">FAQ</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_503_107)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.68951 3.35623C8.89779 3.14794 9.23548 3.14794 9.44375 3.35623L13.7105 7.6229C13.9187 7.83117 13.9187 8.16886 13.7105 8.37713L9.44375 12.6439C9.23548 12.8521 8.89779 12.8521 8.68951 12.6439C8.48123 12.4355 8.48123 12.0978 8.68951 11.8895L12.0457 8.53335H2.66663C2.37208 8.53335 2.1333 8.29456 2.1333 8.00001C2.1333 7.70547 2.37208 7.46668 2.66663 7.46668H12.0457L8.68951 4.11047C8.48123 3.90219 8.48123 3.56451 8.68951 3.35623Z"
                  fill="#0F172A"
                />
              </g>
              <defs>
                <clipPath id="clip0_503_107">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </div>
        <div className="my-4">
          <h1 className="text-4xl font-semibold">Frequently asked questions</h1>
        </div>
        <div>
          <p className="text-xl text-center font-normal text-[#64748B] max-w-[728px]">
            Get detailed answers to common inquiries. Enhance your understanding
            of our offerings and policies.
          </p>
        </div>
        <div className="mt-12 text-left">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
export default FAQ;
