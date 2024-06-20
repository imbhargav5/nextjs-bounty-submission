import React from 'react';
import { DollarSignIcon } from 'lucide-react';
import SectionTitle from '../../_common/SectionTitle';
import SectionDescription from '../../_common/SectionDescription';
import PricingCard from './PricingCard';
import {
  basicFeatures,
  features,
  premiumFeatures,
  standardFeatures,
} from './constants';
import PricingTabs from './PricingTabs';
import SectionLink from '../../_common/SectionLink';

const PricingSection = () => {
  return (
    <section className="px-4 md:px-0 flex flex-col items-center py-24 ">
      <div className=" flex flex-col gap-12 md:container">
        <div className=" flex flex-col gap-4 md:container">
          <div>
            <div className="pb-4 flex md:justify-center justify-start">
              <SectionLink icon={DollarSignIcon} href="/">
                Pricing
              </SectionLink>
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
              {features.map((feature) => {
                return (
                  <PricingCard
                    key={feature.title}
                    title={feature.title}
                    description={feature.description}
                    price={feature.price}
                    features={feature.features}
                    badge={feature.badge}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
