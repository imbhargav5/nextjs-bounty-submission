'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import lightLogo from '@public/logos/nextbase-dark-logo.png';
import darkLogo from '@public/logos/nextbase-light-logo.png';
import { PanelLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ComponentProps, useState } from 'react';
import { DocsNavigation } from './DocsNavigation';

function MenuIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M5 5l14 14M19 5l-14 14" />
    </svg>
  );
}

export function DocsMobileNavigation() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isDocs = pathname ? pathname.startsWith('/docs') : false;

  if (!isDocs) {
    return null;
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative md:hidden"
          aria-label="Open navigation"
        >
          <PanelLeft className="h-6 w-6 stroke-muted-foreground" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="min-h-full w-full max-w-xs bg-white px-6 pb-12 pt-5 dark:bg-gray-900 sm:px-6"
      >
        <div className="flex items-center">
          <Link href={'/'} className="font-bold text-xl">
            <div className="relative flex space-x-2 items-center text-black dark:text-white dark:-ml-4">
              <Image
                src={lightLogo}
                alt="logo"
                className="dark:hidden block h-10 w-10"
              />
              <Image
                src={darkLogo}
                alt="logo"
                className="hidden dark:block h-10 w-10"
              />
              <span className="hidden font-bold sm:inline-block">nextbase</span>
            </div>
          </Link>
        </div>
        <ScrollArea className="h-screen overflow-y-auto">
          <DocsNavigation setIsOpen={setIsOpen} className="mt-5 px-1 pb-40" />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
