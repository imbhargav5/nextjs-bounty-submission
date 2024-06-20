import Image from 'next/image';
import LightLogo from '@public/logos/nextbase-dark-logo.png';
import DarkLogo from '@public/logos/nextbase-light-logo.png';
import { SitewideLinks } from './sitewide-links';
import Link from 'next/link';
import { SocialHandles } from './socials';

export function Footer() {
  return (
    <div className="bg-muted px-14 py-24 md:py-7">
      <div className="grid grid-cols-1 px-0 md:pt-24 max-w-[1195px]">
        <div className="flex flex-col md:justify-between lg:flex-row pb-36 md:pb-0">
          <div className="flex flex-col gap-4 ">
            <div className="flex gap-2 ">
              <Image
                src={DarkLogo}
                width={40}
                height={40}
                alt="logo"
                className="dark:hidden block h-8 w-8"
              />
              <Image
                src={LightLogo}
                width={40}
                height={40}
                alt="logo"
                className="hidden dark:block h-8 w-8"
              />
              <span className="font-bold text-xl">Nextbase</span>
            </div>
            <div className="text-foreground max-w-[330px] text-base">
              Acme Inc. 123 Acme Street, London, UK, SW1A 1AA
            </div>
          </div>
          <SitewideLinks />
        </div>
        <hr className="border border-tremor-background-emphasis mt-3" />

        <div className="flex flex-col md:flex-row md:justify-between gap-4 pt-8">
          <p className="text-muted-foreground">
            © 2023{' '}
            <Link
              className="underline underline-offset-2"
              href={'https://usenextbase.com/'}
              target="_blank"
            >
              Arni Creative Private Limited.
            </Link>{' '}
            All Rights Reserved.
          </p>
          <div>
            <SocialHandles />
          </div>
        </div>
      </div>
    </div>
  );
}
