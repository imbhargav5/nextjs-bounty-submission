import { Minus, Quote } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const QuotetionSection = () => {
  return (
    <section className=" flex flex-col items-center  px-4 pt-12 md:pt-24 pb-6 md:pb-12 bg-muted">
      <figure className=" md:container pb-12 flex flex-col gap-3">
        <div className=" flex items-center justify-center">
          <Quote className=" text-black rotate-180 h-12" fill="" />
        </div>
        <div className=" flex flex-col gap-6">
          <blockquote className=" font-[500] md:text-4xl text-xl text-center text-foreground md:px-16 text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero.
          </blockquote>
          <figcaption className=" flex items-center gap-4 justify-center ">
            <Image
              className=" rounded-full "
              src={'/images/testimonialUser.jpeg'}
              width={30}
              height={30}
              alt="quote-user"
            />
            <div className=" flex flex-row">
              <span className=" text-base text-muted-foreground font-[500]">
                Mark Zuckerburg
              </span>
              <Minus className=" rotate-90 text-muted-foreground" />
              <span className=" text-sm  font-[300] text-muted-foreground">
                CEO, Facebook
              </span>
            </div>
          </figcaption>
        </div>
      </figure>
    </section>
  );
};

export default QuotetionSection;
