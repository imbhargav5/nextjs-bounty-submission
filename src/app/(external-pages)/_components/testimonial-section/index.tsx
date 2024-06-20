import { Testimonials } from './testimonials';

export function TestimonialSection() {
  return (
    <div className="w-full flex flex-col items-center gap-12 px-4 py-12 md:py-24 dark:bg-muted">
      <header className="flex flex-col pt-2 pb-8 gap-4">
        <h6 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center">
          Don&apos;t take our word for it
        </h6>
        <p className="text-muted-foreground md:text-xl text-center">
          Hear what our satisfied customers have to say about Nextbase
        </p>
      </header>
      <Testimonials />
    </div>
  );
}
