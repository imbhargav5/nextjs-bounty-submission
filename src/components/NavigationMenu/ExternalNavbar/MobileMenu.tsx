'use client';
import Link from 'next/link';
import { useContext } from 'react';
import { LoginCTAButton } from './LoginCTAButton';
import { MobileMenuContext } from './MobileMenuContext';
import { navbarLinks } from './constants';

export function MobileMenu() {
  const { setMobileMenuOpen, mobileMenuOpen } = useContext(MobileMenuContext);
  return (
    <>
      {mobileMenuOpen && (
        <ul className="lg:hidden w-md shadow-2xl py-2 flex flex-col items-start font-medium pb-2">
          {navbarLinks.map(({ name, href }) => (
            <li
              key={name}
              className="px-4 py-2 rounded-lg text-gray-900 dark:text-gray-300"
            >
              <Link href={href} onClick={() => setMobileMenuOpen(false)}>
                {name}
              </Link>
            </li>
          ))}

          <hr className="w-full h-2" />
          <div className="flex w-full px-4">
            <LoginCTAButton />
          </div>
        </ul>
      )}
    </>
  );
}
