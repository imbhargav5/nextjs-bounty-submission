'use client';
import Link from 'next/link';
import { useContext } from 'react';
import { MobileMenuContext } from './MobileMenuContext';
import { navbarLinks } from './constants';
import darkLogo from '@public/logos/nextbase-dark-logo.png';
import lightLogo from '@public/logos/nextbase-light-logo.png';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import Image from 'next/image';

export function MobileMenu() {
  const { setMobileMenuOpen, mobileMenuOpen } = useContext(MobileMenuContext);
  return (
    <>
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent
          side="left"
          className="h-full w-64 px-6 pb-12 pt-5 bg-popover sm:px-6"
        >
          <div className="flex items-center">
            <Link href={'/'} className="font-bold text-xl">
              <div className="relative flex space-x-2 items-center text-foreground -ml-4 sm:-mt-2">
                <Image
                  src={lightLogo}
                  alt="logo"
                  className="dark:hidden block h-8 w-8"
                />
                <Image
                  src={darkLogo}
                  alt="logo"
                  className="hidden dark:block h-8 w-8"
                />
                <span className="text-base sm:text-xl font-bold sm:inline-block">Nextbase</span>
              </div>
            </Link>
          </div>
          <ul className="space-y-3 py-10 font-medium items-center">
            {navbarLinks.map(({ name, href }) => (
              <li key={name} className="text-base">
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
}
