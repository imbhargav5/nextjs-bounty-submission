'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import lightLogo from '@public/logos/acme-logo-dark.png';
import darkLogo from '@public/logos/acme-logo-light.png';
import { PanelLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { DocsNavigation } from './DocsNavigation';

export function DocsMobileNavigation() {
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
