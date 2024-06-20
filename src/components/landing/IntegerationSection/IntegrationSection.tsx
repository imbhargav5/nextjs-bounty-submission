import React from 'react';
import { IntegrationOrbitingCircles } from './IntegrationOrbitingCircles';
import {  Network } from 'lucide-react';
import SectionTitle from '../../_common/SectionTitle';
import SectionDescription from '../../_common/SectionDescription';
import SectionLink from '../../_common/SectionLink';

const IntegrationSection = () => {
  return (
    <section className=" flex flex-col items-center md:py-24 py-12 ">
      <div className=" md:container mx-4 flex flex-col gap-32">
        <div className=" flex flex-col gap-4">
          <div>
            <div className="pb-4 flex md:justify-center justify-start">
              <SectionLink icon={Network} href='/'>Integration</SectionLink>
            </div>
            <SectionTitle value="Master Integration Like Pros" />
          </div>

          <SectionDescription
            className=" text-wrap"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum"
          />
        </div>
        <div className="flex  justify-center md:container overflow-hidden  ">
          <IntegrationOrbitingCircles />
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
