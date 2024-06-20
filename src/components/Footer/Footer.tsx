import Image from 'next/image';
import LightLogo from '@public/logos/nextbase-dark-logo.png';
import DarkLogo from '@public/logos/nextbase-light-logo.png';
import { SitewideLinks } from './sitewide-links';

export function Footer() {
  return (
    <div className="bg-muted px-14 py-6">
      <div className="container pt-24 max-w-[1195px]">
        <div className="flex flex-col md:justify-between lg:flex-row">
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
        <hr className="border border-muted mt-3" />
        <div></div>
      </div>
    </div>
  );
}
