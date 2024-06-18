import { ArrowRight, LucideIcon } from 'lucide-react';
import React from 'react';

export default function LinkBadge({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center  gap-2 py-1 px-3 w-fit rounded-full border border-border dark:border-none bg-secondary">
      {icon}
      <span className="text-md font-medium lg:text-base">{text}</span>
      <ArrowRight size={16} />
    </div>
  );
}
