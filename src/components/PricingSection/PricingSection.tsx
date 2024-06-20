import React from 'react';
import { ArrowRight, DollarSignIcon } from 'lucide-react';
import SectionTitle from '../_common/SectionTitle';
import SectionDescription from '../_common/SectionDescription';
import PricingCard from './PricingCard';
import { basicFeatures, premiumFeatures, standardFeatures } from './constants';
import PricingTabs from './PricingTabs';
import Link from 'next/link';

const PricingSection = () => {
  return (
    <section className="px-4 md:px-0 flex flex-col items-center py-24 ">
      <div className=" flex flex-col gap-12 container">
        <div className=" flex flex-col gap-4 container">
          <div>
            <div className="pb-4 flex md:justify-center justify-start">
              <Link
                className="flex gap-1 flex-row w-[119px] text-sm items-center bg-muted rounded-[80px] px-3 py-1 whitespace-nowrap  border border-[#E2E8F0]"
                href="/#"
              >
                <DollarSignIcon />
                <span>Pricing</span>
                <ArrowRight />
              </Link>
            </div>
            <SectionTitle value="Quality without any compromise" />
          </div>
          <div>
            <SectionDescription value="CI/CD streamlines feature delivery, scalable infrastructure ensures global edge optimization and app monitoring capabilities for peak site performance." />
          </div>
        </div>
        <div className=" flex flex-col gap-8">
          <div className=" flex justify-center ">
            <PricingTabs />
          </div>
          <div>
            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6">
              <PricingCard
                description="Best for Small projects"
                price={99}
                title="Basic"
                features={basicFeatures}
              />
              <PricingCard
                description="Best for Large projects"
                price={299}
                title="Standard"
                features={standardFeatures}
                badge="Most popular"
              />
              <PricingCard
                description="Best for organization"
                price={399}
                title="Premium"
                features={premiumFeatures}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
