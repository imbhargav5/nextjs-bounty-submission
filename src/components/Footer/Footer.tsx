import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi2";


const navigation = {
  resources: [
    { name: 'Nextbase', href: '' },
  ],
  followus: [
    { name: 'Github', href: '/' },
    { name: 'Twitter', href: '/' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/' },
    { name: 'Terms & Conditions', href: '/' },
  ]
}


export function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="font-inter w-full  px-4 lg:px-48 pt-32  bg-gray-100 dark:bg-gray-900"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col justify-between lg:flex-row pb-32 lg:pb-0">
          <div className="space-y-4">
            <div className="company-logo-and-name flex gap-4 items-center">
              <Image
                priority={true}
                unoptimized={true}
                width={100}
                height={40}
                src="/logos/acme-logo-dark.png"
                alt="logo"
                className="h-7 w-auto"
              />
              <h1 className="text-2xl font-bold">Nextbase</h1>
            </div>
            <p className="text-md max-w-xs leading-6 text-black dark:text-gray-300">
              Acme Inc. 123 Acme Street, London, UK, SW1A 1AA
            </p>

          </div>
          {/* Navigations */}
          <div className="mt-16 grid grid-cols-2 gap-14 md:grid-cols-3 lg:mt-0 xl:col-span-3">
            <div className="md:mt-0">
              <h3 className="text-sm font-bold uppercase leading-6 text-gray-900  dark:text-gray-200">
                Resources
              </h3>
              <div className="mt-6 space-y-4">
                {navigation.resources.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium leading-6 text-black hover:text-gray-900 dark:text-white hover:dark:text-gray-200"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-sm font-bold uppercase leading-6 text-gray-900 dark:text-gray-200">
                  Follow us
                </h3>
                <div className="mt-6 space-y-4">
                  {navigation.followus.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 font-medium text-black hover:text-gray-900 dark:text-white hover:dark:text-gray-200"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-sm font-bold uppercase leading-6 text-gray-900 dark:text-gray-200">
                  Legal
                </h3>
                <div className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 font-medium text-black hover:text-gray-900 dark:text-white hover:dark:text-gray-200"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-between py-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 dark:border-gray-100/10">
          <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">
            &copy; 2024 <span className="underline">Arni Creative Private Limited</span>. All rights reserved.
          </p>
          <div className="flex gap-6">

            <p className="icons text-gray-500 dark:text-gray-400 hover:text-gray-700  dark:hover:text-gray-700 flex gap-4 text-lg">
              <FaFacebook />
            </p>
            <p className="icons text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-700 flex gap-4 text-lg">
              <IoLogoInstagram />
            </p>
            <p className="icons text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-700 flex gap-4 text-lg">
              <FaTwitter />
            </p>
            <p className="icons text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-700 flex gap-4 text-lg">
              <FaGithub />
            </p>
            <p className="icons text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-700 flex gap-4 text-lg">
              <HiOutlineGlobeAlt />
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
