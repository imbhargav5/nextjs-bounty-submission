import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { H3 } from '../ui/Typography/H3';
import { Separator } from '../ui/separator';

export function Footer() {
  return (
    <footer className="bg-tremor-background-muted min-h-[200px] text-background flex flex-col md:px-14 md:py-6 border border-border">
      <div className=" md:mx-[102px] px-8 pt-24">
        <div className="flex md:flex-row flex-col justify-between pb-24 md:mb-0 mb-8">
          <div className=" flex flex-col md:gap-4 gap-[34px] md:w-[360px]">
            {/* LOGO */}
            <div className=" flex flex-row items-center w-full">
              <Image
                className=" w-8 h-8 mr-3"
                src={'/logos/acme-logo-dark.png'}
                alt="footer-logo"
                width={32}
                height={32}
              />
              <h3 className=" font-[600] text-darkTremor-background-muted  text-2xl">
                Nextbase
              </h3>
            </div>
            <div className=" text-base text-darkTremor-background-muted">
              Acme Inc. 123 Acme Street, London, UK, SW1A 1AA
            </div>
          </div>
          <div className=" flex flex-row flex-wrap gap-8 py-6 md:py-0 ">
            <div className=" flex flex-col gap-6 w-[142px]">
              <h2 className=" text-foreground text-sm font-[600]">RESOURCES</h2>
              <ul className=" flex flex-col gap-4 font-[400] text-foreground">
                <li>
                  <Link href={'/'}>Nextbase</Link>
                </li>
              </ul>
            </div>
            <div className=" flex flex-col gap-6 w-[142px]">
              <h2 className="text-foreground text-sm font-[600]">FOLLOW US</h2>
              <ul className=" flex flex-col gap-4 font-[400] text-foreground">
                <li>
                  <Link href={'/'}>Github</Link>
                </li>
                <li>
                  <Link href={'/'}>Twitter</Link>
                </li>
              </ul>
            </div>
            <div className=" flex flex-col gap-6 w-[142px]">
              <h2 className="text-foreground text-sm font-[600]">LEGAL</h2>
              <ul className=" flex flex-col gap-4 font-[400] text-foreground">
                <li>
                  <Link href={'/'}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={'/'}>Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Separator id="seperator" className="" />
        <div className=" w-full md:h-[65px] h-[41px] mb-8 md:mb-0"></div>
        <div className="flex md:flex-row flex-col md:justify-between gap-4 md:gap-0 md:pb-0 pb-[76px] ">
          <p className=" text-muted-foreground text-sm flex md:flex-row flex-col">
            <span>
              © 2023{' '}
              <Link href={'/'} className=" underline">
                Arni Creative Private Limited.
              </Link>
            </span>
            <span>All Rights Reserved.</span>
          </p>

          <div className=" flex flex-row gap-5  md:justify-evenly  md:w-[196px] ">
            <FaFacebook className="  text-tremor-background-emphasis" />
            <FaInstagram className="  text-tremor-background-emphasis" />
            <FaTwitter className="  text-tremor-background-emphasis" />
            <FaGithub className="  text-tremor-background-emphasis" />
            <FaInstagram className="  text-tremor-background-emphasis" />
          </div>
        </div>
      </div>
    </footer>
  );
}
