import React, { FC } from 'react';
import SectionLink from '../_common/SectionLink';
import { ArrowRight, Sailboat } from 'lucide-react';
import { Button } from '../ui/button';
import SectionTitle from '../_common/SectionTitle';
import SectionDescription from '../_common/SectionDescription';
import Link from 'next/link';

const CTASection = ({}) => {
  return (
    <section className="px-4 pt-12 pb-16 md:px-[203px]">
      <div className=" flex flex-col md:items-center items-start gap-2">
        <div className=" md:mx-[188px] flex flex-col gap-4">
          <div>
            <div className="pb-4 flex md:justify-center justify-start">
              <Link
                className="flex gap-1 flex-row w-[192px] text-sm items-center bg-muted rounded-[80px] px-3 py-1 whitespace-nowrap  border border-[#E2E8F0]"
                href="/#"
              >
                <Sailboat />
                <span>Start your journey</span>
                <ArrowRight />
              </Link>
            </div>
            <div>
              <SectionTitle className="" value="Ready to move with Ultimate?" />
            </div>
          </div>
          <div>
            <SectionDescription value="Automated CI/CD streamlines feature delivery, scalable infrastructure ensures global edge optimization and app monitoring capabilities for peak site performance." />
          </div>
        </div>
        <div className=" pt-4 py-12 mx-auto">
          <Button className=" px-4 py-2 w-[140px] ">Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
