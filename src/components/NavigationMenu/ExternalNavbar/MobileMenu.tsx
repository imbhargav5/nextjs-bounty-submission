'use client';
import Link from 'next/link';
import { useContext } from 'react';
import { LoginCTAButton } from './LoginCTAButton';
import { MobileMenuContext } from './MobileMenuContext';
import { navbarLinks } from './constants';
import acmeLightLogo from '@public/logos/nextbase-light-logo.png';
import acmeDarkLogo from '@public/logos/nextbase-dark-logo.png';
import Image from 'next/image';
import {motion,AnimatePresence} from 'framer-motion';
export function MobileMenu() {
  const { setMobileMenuOpen, mobileMenuOpen } = useContext(MobileMenuContext);
  return (
    <>
    <AnimatePresence>
      {mobileMenuOpen && (
        <>
        <motion.div className='w-fit h-fit flex flex-col gap-5'>
          <div className='flex flex-col w-72 '>
            <div className='flex flex-row justify-end'>
              <svg onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen)
              }} width="27" height="27" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                <g filter="url(#filter0_dd_639_6474)">
                  <path d="M2 7C2 3.68629 4.68629 1 8 1H14C17.3137 1 20 3.68629 20 7V13C20 16.3137 17.3137 19 14 19H8C4.68629 19 2 16.3137 2 13V7Z" fill="#020817" />
                  <path d="M2.5 7C2.5 3.96243 4.96243 1.5 8 1.5H14C17.0376 1.5 19.5 3.96243 19.5 7V13C19.5 16.0376 17.0376 18.5 14 18.5H8C4.96243 18.5 2.5 16.0376 2.5 13V7Z" stroke="#1E293B" />
                  <path d="M15.213 5.9468L15.2131 5.94675C15.2573 5.90251 15.2573 5.83081 15.2131 5.78656L15.213 5.78648C15.1688 5.74228 15.0971 5.74228 15.0529 5.78648L15.0528 5.78652L11.3532 9.48617L10.9996 9.83972L10.646 9.48617L6.94642 5.78653C6.94641 5.78652 6.94641 5.78652 6.94641 5.78652C6.90213 5.74226 6.83037 5.74227 6.78612 5.78652C6.74187 5.83078 6.74187 5.90254 6.78612 5.94679L10.4858 9.64644L10.8393 10L10.4858 10.3535L6.78616 14.0531C6.78615 14.0532 6.78614 14.0532 6.78612 14.0532C6.74188 14.0975 6.74186 14.1691 6.78608 14.2135C6.78611 14.2135 6.78614 14.2135 6.78616 14.2135M15.213 5.9468L7.29996 14.567C7.06043 14.8065 6.67209 14.8065 6.43257 14.567L6.78616 14.2135M15.213 5.9468L11.5134 9.64644L11.1599 10L11.5134 10.3535L15.213 14.0532C15.2573 14.0975 15.2573 14.1692 15.213 14.2135C15.1688 14.2577 15.097 14.2577 15.0528 14.2135L11.3532 10.5138L10.9996 10.1603L10.646 10.5138L6.94646 14.2134M15.213 5.9468L6.94646 14.2134M6.78616 14.2135C6.83041 14.2577 6.90215 14.2577 6.94641 14.2135C6.94642 14.2135 6.94644 14.2135 6.94646 14.2134M6.78616 14.2135L6.94646 14.2134" fill="#F8FAFC" stroke="#F8FAFC" />
                </g>
                <defs>
                  <filter id="filter0_dd_639_6474" x="0" y="0" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_639_6474" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect2_dropShadow_639_6474" />
                    <feOffset />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.631373 0 0 0 0 0.631373 0 0 0 0 0.666667 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_639_6474" result="effect2_dropShadow_639_6474" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_639_6474" result="shape" />
                  </filter>
                </defs>
              </svg>

            </div>
            <div className='flex flex-row gap-1  justify-start items-center'>

              <Image
                src={acmeLightLogo}
                width={40}
                height={40}
                alt="logo"
                className="dark:hidden block h-8 w-8"
              />
              <Image
                src={acmeDarkLogo}
                width={40}
                height={40}
                alt="logo"
                className="hidden dark:block h-8 w-8"
              /><span className="font-semibold text-white text-lg">Nextbase</span></div>
          </div>

          <ul className="md:hidden w-full  flex flex-col items-start font-medium pb-2">

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



          </ul>
        </motion.div>
         
        </>
      )}
       </AnimatePresence>
    </>
  );
}
