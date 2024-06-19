import { cn } from '@/lib/utils';
import React, { FC } from 'react';

interface SectionDescriptionProps {
  className?: string;
  value: string;
}
const SectionDescription: FC<SectionDescriptionProps> = ({
  className,
  value,
}) => {
  return (
    <p className={cn("md:text-xl text-sm font-[400] text-muted-foreground md:text-center", className)}>
      {value}
    </p>
  );
};

export default SectionDescription;
