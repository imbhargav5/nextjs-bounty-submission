import Image from 'next/image';
import lightLogo from '@public/logos/acme-logo-light.png';
import darkLogo from '@public/logos/acme-logo-dark.png';
import Link from 'next/link';

type FooterItem = {
  title: string;
  items: {
    name: string;
    url: string;
  }[];
};

 const footerItems: FooterItem[] = [
  {
    title: 'Resources',
    items: [
      {
        name: 'NextBase',
        url: '#',
      },
    ],
  },
  {
    title: 'Follow Us',
    items: [
      {
        name: 'Github',
        url: '#',
      },
      {
        name: 'Twitter',
        url: '#',
      },
    ],
  },
  {
    title: 'Legal',
    items: [
      {
        name: 'Privacy Policy',
        url: '#',
      },
      {
        name: 'Terms & Conditions',
        url: '#',
      },
    ],
  },
];

 const footerSocialItems = [
  {
    name: 'Facebook',
    url: '#',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        className="fill-slate-500 dark:fill-slate-400"
        viewBox="0 0 512 512"
      >
        <path
          d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
          fillRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: '#',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        className="fill-slate-500 dark:fill-slate-400"
        viewBox="0 0 512 512"
      >
        <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
        <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    url: '#',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        className="fill-slate-500 dark:fill-slate-400"
        viewBox="0 0 512 512"
      >
        <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: '#',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        className="fill-slate-500 dark:fill-slate-400"
        viewBox="0 0 512 512"
      >
        <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
      </svg>
    ),
  },
  {
    name: 'Dribbble',
    url: '#',
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        className="fill-slate-500 dark:fill-slate-400"
        viewBox="0 0 512 512"
      >
        <path d="M256 32C132.33 32 32 132.33 32 256s100.33 224 224 224 224-100.22 224-224S379.67 32 256 32zm142.22 103.25a186.36 186.36 0 0144 108.38c-40.37-2.1-88.67-2.1-127.4 1.52-4.9-12.37-9.92-24.5-15.4-36.17 44.66-19.36 79.08-44.8 98.8-73.73zM256 69.33a185.81 185.81 0 01119.12 42.94c-20.3 25.66-52.15 48-91.82 64.86C261.6 137 236.63 102.47 210 75.28a187.51 187.51 0 0146-5.95zm-84.47 20.42c26.95 26.83 52.27 61 74.44 101C203.85 203.62 155.55 211 104 211c-9.8 0-19.36-.35-28.81-.94a186.78 186.78 0 0196.34-120.31zM69.68 247.13c10.62.47 21.35.7 32.2.59 58.8-.7 113.52-9.92 160.54-25q6.65 13.83 12.6 28.35a115.43 115.43 0 00-16.69 5c-64.28 27-114.91 70.51-142.33 123.13A186 186 0 0169.33 256c0-3 .12-5.95.35-8.87zM256 442.67a185.57 185.57 0 01-114.45-39.32c24.85-49.23 69.18-90 125.07-115.27 5.25-2.45 12.25-4.43 20.3-6.18q10 27.64 17.85 57.4A678 678 0 01322 430.42a185.06 185.06 0 01-66 12.25zm100.92-29.75a672.61 672.61 0 00-17.39-92.05c-4-15.17-8.51-29.87-13.41-44.22 36.63-3 80.5-2.57 115.38 0a186.5 186.5 0 01-84.58 136.27z" />
      </svg>
    ),
  },
];

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
          <div className="flex flex-col gap-8 lg:flex-row justify-between items-center py-16 pb-10 w-full">
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}