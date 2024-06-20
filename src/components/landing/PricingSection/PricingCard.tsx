import { CheckCircle2 } from 'lucide-react';
import React, { FC } from 'react';
import { Button } from '../../ui/button';
import { Separator } from '../../ui/separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '../../ui/badge';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  features: string[];
  title: string;
  price: number;
  description: string;
  badge?: string;
}

// TODO : REMOVE HARDCODED VALUES

const PricingCard: FC<PricingCardProps> = ({
  features,
  title,
  price,
  description,
  badge,
}) => {
  return (
    <Card
      className={cn(
        'flex flex-col lg:w-[352px] relative h-fit',
        !!badge && 'bg-muted',
      )}
    >
      <CardHeader className="">
        <CardTitle className=" text-xl font-[600]">{title}</CardTitle>
        <CardDescription className=" flex flex-col gap-4">
          <span className=" text-base font-[400]">{description}</span>
          <span className=" text-foreground text-4xl font-[800]">{`$${price}`}</span>
          <Button className="">Buy Now</Button>
        </CardDescription>
        <div className=" py-4 my-6">
          <Separator />
        </div>
      </CardHeader>

      <CardContent className=" py-[10px] flex flex-col gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-row">
            <CheckCircle2 className=" pr-2" />
            {feature}
          </div>
        ))}
      </CardContent>

      {badge && (
        <Badge className=" absolute right-4 top-7 bg-foreground dark:text-background">
          Most Popular
        </Badge>
      )}
    </Card>
  );
};

export default PricingCard;
