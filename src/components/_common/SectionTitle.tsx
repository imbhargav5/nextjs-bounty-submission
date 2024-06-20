import React, { FC } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  className?: string;
  value: string;
  hero?: boolean;
}
const SectionTitle: FC<SectionTitleProps> = ({ className, value, hero }) => {
  return (
    <h1
      className={cn(
        'md:text-4xl  font-[600] md:text-center',
        className,
        hero ? 'text-4xl' : 'text-2xl',
      )}
    >
      {value}
    </h1>
  );
};

export default SectionTitle;
