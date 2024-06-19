import { cn } from '@/utils/cn';
import { ArrowRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

interface SectionLinkProps {
  className?: string;
  label: string;
  href: string;
  icon: LucideIcon;
}
const SectionLink: FC<SectionLinkProps> = ({
  className,
  label,
  href,
  icon: Icon,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center bg-muted  py-1 px-3 gap-2 rounded-[80px] border border-[#E2E8F0]',
        className,
      )}
    >
      <Icon className=" text-sm" />
      {label}
      <ArrowRight />
    </Link>
  );
};

export default SectionLink;
