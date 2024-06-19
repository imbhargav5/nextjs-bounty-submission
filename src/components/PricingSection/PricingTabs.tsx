import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PricingTabs = () => {
  return (
    <Tabs defaultValue="account" className="md:w-[400px] ">
      {/* TODO : CHANGE THE HARDCODED COLOR */}
      <TabsList className=" bg-[#F1F5F9]">
        <TabsTrigger className=" md:px-10 px-5" value="account">
          Monthly
        </TabsTrigger>
        <TabsTrigger className=" md:px-10 px-5" value="password">
          Yearly
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default PricingTabs;
