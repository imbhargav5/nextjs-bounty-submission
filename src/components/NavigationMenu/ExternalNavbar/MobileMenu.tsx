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
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
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
              <span className=" font-bold sm:inline-block">Nextbase</span>
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
  );
}
