import React from 'react';
import { FeaturesBento } from './FeaturesBento';
import { Sparkles } from 'lucide-react';
import SectionTitle from '../_common/SectionTitle';
import SectionDescription from '../_common/SectionDescription';
import SectionLink from '../_common/SectionLink';

const FeatureSection = () => {
  return (
    <div className=" flex flex-col px-4 pt-12 pb-24">
      <div className=" container flex flex-col gap-12">
        <div className=" md:mx-[191px] flex flex-col gap-4">
          <div>
            <div className="pb-4 flex md:justify-center justify-start">
              <SectionLink icon={Sparkles} href="/">
                Start your journey
              </SectionLink>
            </div>
            <SectionTitle className="" value="Discover Next-Level Features" />
          </div>
          <div>
            <SectionDescription value="Discover the ultimate insights into cutting-edge advancements. Our next-level features guide reveals the essentials for staying ahead." />
          </div>
        </div>
        <div>
          <FeaturesBento />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
