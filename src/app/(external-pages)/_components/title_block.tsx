import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type TitleBlockProps = {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  section?: string;
  href?: string;
};

export default function TitleBlock({
  title,
  subtitle,
  icon,
  section,
  href = '#',
}: TitleBlockProps) {
  return (
    <div className="space-y-4 flex flex-col  md:items-center md:text-center flex-1">
      {section && (
        <Link href={href}>
          <div className="flex items-center  gap-2 py-1 px-3 w-fit rounded-full border border-border dark:border-none bg-secondary">
            {icon}
            <span className="text-md font-medium lg:text-base">{section}</span>
            <ArrowRight size={16} />
          </div>
        </Link>
      )}
      <h2 className="font-semibold text-2xl lg:text-4xl ">{title}</h2>
      <p className="text-slate-500 dark:text-slate-400 leading-loose lg:text-xl lg:leading-relaxed max-w-3xl">
        {subtitle}
      </p>
    </div>
  );
}
