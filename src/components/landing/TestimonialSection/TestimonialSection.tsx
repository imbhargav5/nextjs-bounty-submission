import React from 'react';
import SectionTitle from '../../_common/SectionTitle';
import SectionDescription from '../../_common/SectionDescription';
import { ScrollingTestimonials } from './ScrolllingTestimonials';

const TestimonialSection = () => {
  return (
    <section className=" px-4 flex flex-col items-center bg-muted md:py-24  py-12">
      <div className=" flex flex-col gap-12">
        <div className=" pt-2 pb-8 flex flex-col gap-4">
          <SectionTitle value="Don't take our word for it" />
          <SectionDescription value="Hear what our satisfied customers have to say about Nextbase" />
        </div>
        <div className=" xl:max-w-[1432px] lg:max-w-[1000px] md:max-w-[500px] max-w-[300px] overflow-hidden">
          <ScrollingTestimonials />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
