import { ThemeToggle } from '@/components/ThemeToggle';
import { Suspense } from 'react';
import { LeftNav } from './LeftNav';
import { LoginCTAButton } from './LoginCTAButton';
import { MobileMenu } from './MobileMenu';
import { MobileMenuProvider } from './MobileMenuContext';
import { MobileMenuOpen } from './MobileMenuOpen';
import nextBaseLightLogo from '@public/logos/nextbase-light-logo.png';
import nextBaseDarkLogo from '@public/logos/nextbase-dark-logo.png';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export function ExternalNavigation() {
  return (
    <MobileMenuProvider>
      <header className="sticky inset-x-0 w-full top-0 z-50 border-b backdrop-blur">
        <nav
          className="flex items-center h-[54px] justify-between mx-4"
          aria-label="Global"
        >
          <LeftNav />
          <Drawer direction="left">
            <DrawerTrigger>
              <Menu />
            </DrawerTrigger>
            <DrawerContent className="h-full max-w-[70%] rounded-none">
              <DrawerHeader className="">
                {/* <DrawerTitle className='flex flex-col'> */}
                <div className='flex items-center'>
                  <Image
                    src={nextBaseLightLogo}
                    width={16}
                    height={16}
                    alt="logo"
                    className="dark:hidden block h-6 w-6"
                  />
                  <Image
                    src={nextBaseDarkLogo}
                    width={16}
                    height={16}
                    alt="logo"
                    className="hidden dark:block h-6 w-6"
                  />
                  <h1 className='text-base/7 font-bold'>Nextbase</h1>
                </div>
                <DrawerClose className="absolute right-4 top-4">
                  <Button variant="outline" className="p-0 h-fit border-2 border-[#a1a1aa]">
                    <X
                      size={16}
                      strokeWidth={1.25}
                      className="dark:!text-white text-black"
                    />
                  </Button>
                </DrawerClose>
                </DrawerHeader>
              <div className="">
                <Button variant='ghost' className='w-full justify-start text-base/7 font-normal'>Docs</Button>
                <Button variant='ghost' className='w-full justify-start text-base/7 font-normal'>Blog</Button>
                <Button variant='ghost' className='w-full justify-start text-base/7 font-normal'>Changelog</Button>
                <Button variant='ghost' className='w-full justify-start text-base/7 font-normal'>Roadmap</Button>
              </div>
            </DrawerContent>
          </Drawer>
          <div className="flex gap-5">
            <Suspense
              fallback={
                <div className="flex space-x-10 items-center lg:-mr-2"></div>
              }
            >
              <div className="flex space-x-10 items-center">
                <ThemeToggle />
                <div className="ml-6 hidden lg:block" suppressHydrationWarning>
                  <LoginCTAButton />
                </div>
              </div>
            </Suspense>
            {/* <MobileMenuOpen /> */}
          </div>
        </nav>
        <MobileMenu />
      </header>
    </MobileMenuProvider>
  );
}
