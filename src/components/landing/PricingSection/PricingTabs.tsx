import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PricingTabs = () => {
  // TODO : REMOVE HARDCODED VALUES
  return (
    <Tabs defaultValue="account" className="md:w-[400px] ">
      <TabsList className=" bg-muted">
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
