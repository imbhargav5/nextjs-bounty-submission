import { ArrowRightIcon } from 'lucide-react';

interface SectionDetailsProps {
  sectionName: string;
  heading: string;
  isIntroHeading?: boolean;
  description: string;
  icon: JSX.Element;
}

export function SectionDetails({
  sectionName,
  heading,
  isIntroHeading,
  description,
  icon,
}: SectionDetailsProps) {
  return (
    <div className="flex flex-col gap-4 sm:items-center max-w-[945px]">
      <div className="flex w-[148px] sm:w-auto items-center gap-1 bg-muted px-3 py-1 rounded-full border">
        {icon}
        <span className="text-sm">{sectionName}</span>
        <ArrowRightIcon size={16} className="ml-1" />
      </div>
      {isIntroHeading ? (
        <span
          className={`text-3xl sm:text-4xl lg:text-5xl dark:text-darkTremor-content-strong text-tremor-primary font-semibold text-start sm:text-center`}
        >
          {heading}
        </span>
      ) : (
        <span
          className={`text-2xl sm:text-3xl lg:text-4xl dark:text-darkTremor-content-strong text-tremor-primary font-semibold text-start sm:text-center`}
        >
          {heading}
        </span>
      )}
      <p className="sm:text-center text-sm md:text-lg lg:text-xl text-tremor-content-subtle">
        {description}
      </p>
    </div>
  );
}
