import { Button } from '@/components/ui/button';
import { CheckCircle2Icon } from 'lucide-react';

interface PlanProps {
  title: string;
  subtitle: string;
  price: number;
  features: string[];
  isMostPopular?: boolean;
  isOdd: boolean;
}

export function Plan({
  title,
  subtitle,
  price,
  features,
  isMostPopular,
  isOdd,
}: PlanProps) {
  return (
    <div
      className={`flex flex-col w-full border dark:border-[#1E293B] dark:border-muted gap-7 ${isOdd ? 'dark:bg-muted' : 'dark:bg-background'} p-5 rounded-lg`}
    >
      <div className="flex flex-col gap-4 dark:border-[#1E293B]">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-darkTremor-content-strong">
            {title}
          </h2>
          {isMostPopular && (
            <span className="text-sm font-semibold bg-darkTremor-content-strong text-primary-foreground dark:text-tremor-primary rounded-md py-[2px] px-[10px]">
              Most popular
            </span>
          )}
        </div>
        <p className="text-gray-700 dark:text-darkTremor-content-emphasis -mt-3">
          {subtitle}
        </p>
        <p className="text-3xl font-bold text-gray-900 dark:text-darkTremor-content-strong">
          ${price}
        </p>
        <Button
          className="w-full h-9 py-2 px-4 hover:bg-tremor-primary hover:opacity-95 bg-tremor-primary text-primary-foreground dark:hover:opacity-95
       dark:bg-tremor-background-muted dark:text-tremor-primary"
        >
          Buy now
        </Button>
      </div>
      <hr className='border border-muted mt-3' />
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
