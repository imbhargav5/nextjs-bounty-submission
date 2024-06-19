import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className=" md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side={'left'} className="px-4 pt-1 w-64">
        <SheetHeader>
          <SheetTitle className=" flex flex-row pt-3 pb-1">
            <Image
              alt="menu-logo"
              src={'/logos/nextbase-light-logo.png'}
              width={24}
              height={24}
            />
            Nextbase
          </SheetTitle>
          <SheetDescription className=" px-2">
            <ul className=" flex flex-col  items-start">
              <li>
                <Link
                  href="/"
                  className=" pt-1 px-2 leading-7 text-base  font-[400] text-darkTremor-brand-faint"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" pt-1 px-2 leading-7 text-base  font-[400] text-darkTremor-brand-faint"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" pt-1 px-2 leading-7 text-base  font-[400] text-darkTremor-brand-faint"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className=" pt-1 px-2 leading-7 text-base  font-[400] text-darkTremor-brand-faint"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
