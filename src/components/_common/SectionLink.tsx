import { cn } from '@/utils/cn';
import { ArrowRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

interface SectionLinkProps {
  className?: string;
  children?: React.ReactNode;
  href: string;
  icon: LucideIcon;
}
const SectionLink: FC<SectionLinkProps> = ({
  className,
  children,
  href,
  icon: Icon,
}) => {
  return (
    <Link
      className="flex gap-1 flex-row w-fit text-sm items-center bg-muted rounded-[80px] px-3 py-1 whitespace-nowrap  border dark:border-background"
      href="/#"
    >
      <Icon />
      {children}
      <ArrowRight />
    </Link>
  );
};

export default SectionLink;
