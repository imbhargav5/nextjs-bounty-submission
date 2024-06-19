import React from 'react';
import { IntegrationOrbitingCircles } from './IntegrationOrbitingCircles';
import { ArrowRight, Sparkles } from 'lucide-react';
import SectionTitle from '../_common/SectionTitle';
import SectionDescription from '../_common/SectionDescription';
import Link from 'next/link';

const IntegrationSection = () => {
  return (
    <section className=" flex flex-col items-center md:py-24 py-12 ">
      <div className=" md:mx-[204px] mx-4 flex flex-col gap-32">
        <div className=" flex flex-col gap-4">
          <div>
            <div className="pb-4 flex md:justify-center justify-start">
              <Link
                className="flex gap-1 flex-row w-[145px] text-sm items-center bg-muted rounded-[80px] px-3 py-1 whitespace-nowrap  border border-[#E2E8F0]"
                href="/#"
              >
                <Sparkles />
                <span>Integration</span>
                <ArrowRight />
              </Link>
            </div>
            <SectionTitle value="Master Integration Like Pros" />
          </div>

          <SectionDescription
            className=" text-wrap"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum"
          />
        </div>
        <div className="lg:flex hidden  justify-center  ">
          <IntegrationOrbitingCircles />
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
