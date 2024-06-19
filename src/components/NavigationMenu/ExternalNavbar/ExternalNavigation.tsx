import { ThemeToggle } from '@/components/ThemeToggle';
import { Suspense } from 'react';
import { LeftNav } from './LeftNav';
import { LoginCTAButton } from './LoginCTAButton';
import { MobileMenu } from './MobileMenu';
import { MobileMenuProvider } from './MobileMenuContext';

import MobileSidebar from '../MobileSidebar';

export function ExternalNavigation() {
  return (
    <MobileMenuProvider>
      <header className="sticky inset-x-0 w-full top-0 z-50 border-b backdrop-blur">
        <nav
          className="flex items-center w-full h-[54px] md:container justify-between px-6 md:px-8"
          aria-label="Global"
        >
          <MobileSidebar />

          <LeftNav />
          <div className="flex gap-5">
            <Suspense
              fallback={
                <div className="flex space-x-10 items-center lg:-mr-2"></div>
              }
            >
              <div className="flex space-x-10 items-center lg:-mr-2">
                <ThemeToggle />
                <div className="ml-6 hidden lg:block" suppressHydrationWarning>
                  <LoginCTAButton />
                </div>
              </div>
            </Suspense>
          </div>
        </nav>
        <MobileMenu />
      </header>
    </MobileMenuProvider>
  );
}
