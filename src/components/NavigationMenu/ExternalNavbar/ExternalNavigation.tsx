import { ThemeToggle } from '@/components/ThemeToggle';
import { Suspense } from 'react';
import { LeftNav } from './LeftNav';
import { LoginCTAButton } from './LoginCTAButton';
import { MobileMenu } from './MobileMenu';
import { MobileMenuProvider } from './MobileMenuContext';
import { MobileMenuOpen } from './MobileMenuOpen';

export function ExternalNavigation() {
  return (


    <header className="dark:bg-[#020817] bg-white sticky inset-x-0 w-full top-0 z-50 border-b backdrop-blur-3xl ">
      <nav
        className="flex items-center w-full h-[54px] md:container justify-between px-6 md:px-0"
        aria-label="Global"
      >

        <LeftNav />
        <div className="flex md:gap-5 md:flex-row flex-row-reverse md:w-fit w-full justify-between">
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
          <MobileMenuOpen />
        </div>
      </nav>
  
    </header>


  );
}
