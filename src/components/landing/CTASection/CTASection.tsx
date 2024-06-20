import React from 'react';
import { Sailboat } from 'lucide-react';
import { Button } from '../../ui/button';
import SectionTitle from '../../_common/SectionTitle';
import SectionDescription from '../../_common/SectionDescription';
import SectionLink from '../../_common/SectionLink';

const CTASection = () => {
  return (
    <section className="px-4 pt-12 pb-16 md:container">
      <div className=" flex flex-col md:items-center items-start gap-2">
        <div className="  flex flex-col gap-4">
          <div>
            <div className="pb-4 flex md:justify-center justify-start">
              <SectionLink icon={Sailboat} href="/">
                Start your journey
              </SectionLink>
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
