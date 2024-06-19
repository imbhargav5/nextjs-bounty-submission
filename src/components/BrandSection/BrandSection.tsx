import React, { FC } from 'react';
import { H2 } from '../ui/Typography/H2';
import ScrollingCompanies from './ScrollingCompanies';

const BrandSection = ({}) => {
  return (
    <section className=" py-6 flex flex-col gap-8  ">
      <div className=" px-4 pb-6 mx-4">
        <div>
          <h2 className=" md:text-2xl textxl text-center text-muted-foreground font-[600]">
            Trusted by 150+ Companies
          </h2>
        </div>
        <div>
          <ScrollingCompanies />
        </div>
      </div>
    </section>
  );
};
export default BrandSection;
