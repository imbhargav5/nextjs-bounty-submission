'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from './docslinks';

type NavigationProps = {
  className?: string;
  setIsOpen?: (isOpen: boolean) => void;
};

export function DocsNavigation({ className, setIsOpen }: NavigationProps) {
  const pathname = usePathname();
  const handleClick = () => {
    setTimeout(() => {
      setIsOpen?.(false);
    }, 500);
  };

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title} onClick={handleClick}>
            <h2 className="font-display font-bold text-xs  text-neutral-800 tracking-wider dark:text-neutral-500 uppercase">
              {section.title}
            </h2>
            <ul role="list" className="mt-2 space-y-2 lg:mt-2 lg:space-y-2.5">
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={clsx(
                      'block w-full',
                      link.href === pathname
                        ? 'font-semibold text-primary dark:text-white dark:underline before:bg-neutral-500 dark:before:bg-neutral-400'
                        : 'text-neutral-600 before:hidden before:bg-neutral-300 hover:text-neutral-600 hover:before:block dark:text-neutral-300 dark:before:bg-neutral-700 dark:hover:text-neutral-300',
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
