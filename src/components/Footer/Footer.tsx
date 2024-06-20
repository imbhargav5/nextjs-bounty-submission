import Image from 'next/image';
import lightLogo from '@public/logos/acme-logo-light.png';
import darkLogo from '@public/logos/acme-logo-dark.png';
import Link from 'next/link';
import { footerItems, footerSocialItems } from './footer-items';

export function Footer() {
  return (
    <footer className="bg-secondary/50 min-h-[200px]  text-foreground border-y-2 border-border">
      <div className="max-w-6xl mx-auto pt-28 px-8 lg:px-6 xl:px-0">
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row items-center gap-y-6 pb-28 ">
            <div className="flex flex-col w-full gap-8 lg:gap-4 ">
              <Link href="/">
                <div className="relative flex gap-2 items-center text-black dark:text-white ">
                  <Image
                    src={lightLogo}
                    alt="logo"
                    className="dark:block hidden h-8 w-8"
                  />
                  <Image
                    src={darkLogo}
                    alt="logo"
                    className="block dark:hidden h-8 w-8"
                  />
                  <span className=" font-medium text-2xl text-foreground sm:inline-block">
                    Nextbase
                  </span>
                </div>
              </Link>
              <p className="max-w-[350px] dark:font-light">
                Acme Inc. 123 Acme Street, London, UK, SW1A 1AA
              </p>
            </div>
            <div className="flex lg:justify-end  w-full items-start gap-10 lg:gap-20 flex-wrap">
              {footerItems.map((item) => (
                <div className="space-y-4 lg:space-y-6" key={item.title}>
                  <h3 className="font-semibold uppercase text-sm">
                    {item.title}
                  </h3>
                  <ul className="space-y-4 mt-5">
                    {item.items.map((link) => (
                      <li className="dark:font-light" key={link.name}>
                        <Link href={link.url}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-800"></div>
          <div className="flex flex-col gap-8 lg:flex-row justify-between items-center py-16 w-full">
            <p className="text-slate-500  w-full dark:text-slate-400 text-sm">
              © 2023
              <a
                href="https://usenextbase.com/"
                className="underline mx-2 decoration-slate-500 dark:decoration-slate-400 underline-offset-1 dec"
                target="_blank"
              >
                Arni Creative Private Limited.
              </a>
              All Rights Reserved
            </p>
            <div className="flex  lg:justify-end  gap-6 w-full">
              {footerSocialItems.map((item) => (
                <Link key={item.name} href={item.url}>
                  <item.icon />{' '}
                  {/* Using External Icon since brand icons are deprecated in Lucide Icons */}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
