import { cn } from '@/utils/cn';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-7xl mx-auto',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  description,
  header,
  imgSrc,
  imgAlt,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  imgSrc: StaticImport;
  imgAlt: string;
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl group/bento transition duration-200 shadow-md border dark:bg-tremor-primary dark:border bg-white grid grid-cols-1 gap-4 overflow-hidden',
        className,
      )}
    >
      <div className="w-full h-[298px]">
        <Image
          src={imgSrc}
          alt={imgAlt}
          className="w-full h-[298px] object-cover"
        />
      </div>
      <div className="mx-6 mb-6">
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="font-semibold text-foreground mb-2 mt-2 text-xl">
            {header}
          </div>
          <div className="text-muted-foreground leading-7">{description}</div>
        </div>
      </div>
    </div>
  );
};
