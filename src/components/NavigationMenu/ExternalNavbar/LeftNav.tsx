'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { cn } from '@/utils/cn';
import nextBaseLightLogo from '@public/logos/nextbase-light-logo.png';
import nextBaseDarkLogo from '@public/logos/nextbase-dark-logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DocsMobileNavigation } from './DocsMobileNavigation';
import { navbarLinks } from './constants';
const versions = [
  { label: 'Landing page 1', url: '/' },
  { label: 'Landing page 2', url: '/version2' },
];

export function VersionSwitcher({
  selectedVersion,
  setSelectedVersion,
}: {
  selectedVersion: string;
  setSelectedVersion: (versionUrl: string) => void;
}) {
  const router = useRouter();

  const handleSelect = (versionUrl) => {
    setSelectedVersion(versionUrl);
    router.refresh();
    router.push(versionUrl);
  };

  return (
    <>
      <Select onValueChange={handleSelect}>
        <SelectTrigger className="mt-0.5 sm:w-[96px] md:w-[200px]">
          {versions.find((version) => version.url === selectedVersion)?.label ||
            'Select Landing Page'}
        </SelectTrigger>

        <SelectContent className="sm:w-[80px] md:w-[200px]">
          {versions.map((version) => (
            <SelectItem key={version.url} value={version.url}>
              {version.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}

export function LeftNav() {
  const pathname = usePathname();
  const initialVersion =
    versions.find((version) => version.url === pathname)?.url ||
    versions[0].url;
  const [selectedVersion, setSelectedVersion] = useState(initialVersion);
  const isALandingPage = pathname
    ? pathname.startsWith('/version') || pathname === '/'
    : false;
  const isBlogPage = pathname?.startsWith('/blog');
  const isDocsPage = pathname?.startsWith('/docs');

  useEffect(() => {
    const newSelectedVersion =
      versions.find((version) => version.url === pathname)?.url ||
      versions[0].url;
    setSelectedVersion(newSelectedVersion);
  }, [pathname]);
  return (
    <>
      <DocsMobileNavigation />
      <div className=" space-x-8 hidden md:flex">
        <Link href="/" className={cn('font-bold text-xl ')}>
          <div className="relative flex space-x-2 h-10 md:w-fit items-center justify-center text-black dark:text-white dark:-ml-4 -ml-2">
            <Image
              src={nextBaseLightLogo}
              width={40}
              height={40}
              alt="logo"
              className="dark:hidden block h-8 w-8"
            />
            <Image
              src={nextBaseDarkLogo}
              width={40}
              height={40}
              alt="logo"
              className="hidden dark:block h-8 w-8"
            />
            {isBlogPage && <span className="font-bold">Nextbase Blog</span>}
            {isDocsPage && <span className="font-bold">Nextbase Docs</span>}
            {!isBlogPage && !isDocsPage && (
              <span className="font-bold">Nextbase</span>
            )}
          </div>
        </Link>
      </div>
      {isALandingPage ? (
        <ul className="hidden -ml-24 lg:flex gap-8 font-medium items-center">
          {navbarLinks.map(({ name, href }) => (
            <li
              key={name}
              className="text-gray-500 dark:text-gray-300 font-normal text-sm hover:text-gray-800 dark:hover:text-gray-500"
            >
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="hidden lg:flex gap-8 font-medium items-center">
          {navbarLinks.map(({ name, href }) => (
            <li
              key={name}
              className="text-gray-500 dark:text-gray-300 font-normal text-sm hover:text-gray-800 dark:hover:text-gray-500"
            >
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
