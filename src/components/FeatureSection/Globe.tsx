import Globe from '@/components/magicui/globe';
import { cn } from '@/lib/utils';
import React from 'react';

interface GlobalProps {
  className?: string;
}

const GlobeGrid: React.FC<GlobalProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl',
        className,
      )}
    >
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Globe
      </span>
      <Globe className="" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
};

export default GlobeGrid;
