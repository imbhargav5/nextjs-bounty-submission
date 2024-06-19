import Image from 'next/image';
import doubleQuote from '../../public/logos/double-quote.svg';
import quotedPersonImg from '../../public/quoted-person.png';

export function QuoteSection() {
  return (
    <div className="w-full flex flex-col items-center gap-3 px-4 py-12 md:py-24 dark:bg-muted">
      <Image src={doubleQuote} alt="double-quote" />
      <p className="sm:text-2xl md:text-3xl lg:text-4xl font-medium text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero.
      </p>
      <div className="flex justify-center items-center gap-3">
        <div className="border border-tremor-border rounded-full">
          <Image src={quotedPersonImg} alt="person" className="rounded-full" />
        </div>
        <div className="text-muted-foreground">
          <span className="mr-3">Mark Zuckerberg</span>
          {'|'}
          <span className="ml-3">CEO, Meta</span>
        </div>
      </div>
    </div>
  );
}
