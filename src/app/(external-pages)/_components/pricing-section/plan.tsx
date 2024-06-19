import { Button } from '@/components/ui/button';
import { CheckCircle2Icon } from 'lucide-react';

interface PlanProps {
  title: string;
  subtitle: string;
  price: number;
  features: string[];
  isMostPopular?: boolean;
  isEven: boolean;
}

export function Plan({ title, subtitle, price, features }: PlanProps) {
  return (
    <div className="w-full lg:w-1/3 bg-white dark:bg-darkTremor-background-muted p-6 rounded-lg shadow-lg">
      
      <h2 className="text-xl font-semibold text-gray-900 dark:text-darkTremor-content-strong mb-4">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-darkTremor-content-emphasis mb-6">
        {subtitle}
      </p>
      <p className="text-3xl font-bold text-gray-900 dark:text-darkTremor-content-strong mb-6">
        ${price}
      </p>
      <Button
        className="w-full h-9 py-2 px-4 hover:bg-tremor-primary hover:opacity-95 bg-tremor-primary text-primary-foreground dark:hover:opacity-95
       dark:bg-tremor-background-muted dark:text-tremor-primary"
      >
        Buy now
      </Button>
      <ul className="mt-4 space-y-2">
        {features.map((feature, i) => (
          <li
            key={i}
            className="flex items-center text-gray-700 dark:text-darkTremor-content-emphasis"
          >
            <div className="ml-2 flex items-center gap-2">
              <CheckCircle2Icon size={13} />
              {feature}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
