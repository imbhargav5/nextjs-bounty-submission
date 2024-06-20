import React from 'react';
import TitleBlock from '../title_block';
import { CheckCircle2Icon, DollarSign } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { pricing } from '../../_data/pricing';

const Pricing = () => {
  return (
    <section className="py-16 max-w-6xl flex flex-col justify-center items-center  mx-auto space-y-10 overflow-hidden px-6">
      <TitleBlock
        icon={<DollarSign size={16} />}
        title="Quality without any compromise"
        section="Pricing"
        subtitle="CI/CD streamlines feature delivery, scalable infrastructure ensures global edge optimization and app monitoring capabilities for peak site performance."
      />

      <Tabs
        defaultValue="monthly"
        className="flex justify-center w-full  items-center flex-col"
      >
        <TabsList className="mb-6 max-w-80 w-full">
          <TabsTrigger className="w-full" value="monthly">
            Monthly
          </TabsTrigger>
          <TabsTrigger className="w-full" value="annual">
            Annual
          </TabsTrigger>
        </TabsList>
        <TabsContent value="monthly" className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full ">
            {pricing.map((item, i) => (
              <PricingCard key={i} {...item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="annual" className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full ">
            {pricing.map((item, i) => (
              <PricingCard key={i} {...item} price={item.annualPrice} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

const PricingCard = ({
  title,
  price,
  features,
  description,
  isHighlighted = false,
}: {
  title: string;
  price: string;
  features: string[];
  description: string;
  isHighlighted?: boolean;
}) => {
  return (
    <Card
      className={cn(`${isHighlighted ? 'bg-secondary' : ''} ,
     h-fit
    `)}
    >
      <CardHeader className="space-y-1 p-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardDescription className="text-base">
              {description}
            </CardDescription>
          </div>
          {isHighlighted && <Badge>Most Popular</Badge>}
        </div>
        <h3 className="text-4xl font-bold py-3 tracking-tighter">${price}</h3>
        <Button>Get Started</Button>
      </CardHeader>

      <CardContent className="p-4">
        <div className="h-[1px] bg-slate-200 dark:bg-slate-500 w-full "></div>
        <ul className="space-y-3 pt-10">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <CheckCircle2Icon size={16} />
              <span className="ml-2 text-sm font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Pricing;
