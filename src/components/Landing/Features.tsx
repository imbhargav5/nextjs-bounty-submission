import React from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { AnimatedBeamMultipleOutputDemo } from '../ui/animated-beam-multiple-outputs';
import Marquee from '../ui/marquee';
import { cn } from '@/lib/utils';
import { Calendar } from '../ui/calendar';
import Globe from '../ui/globe';
import Chip from '../ui/Chip';

const files = [
  {
    name: 'bitcoin.pdf',
    body: 'Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.',
  },
  {
    name: 'finances.xlsx',
    body: 'A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.',
  },
  {
    name: 'logo.svg',
    body: 'Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.',
  },
  {
    name: 'keys.gpg',
    body: 'GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.',
  },
  {
    name: 'seed.txt',
    body: 'A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.',
  },
];

const Features = () => {
  return (
    <div className="w-full min-h-100vh max-h-fit flex flex-col gap-6 mt-20 px-4 ">
      <div className=" w-full  h-fit flex flex-row md:justify-center">
        <Chip/>
      </div>
      <div className=" w-full  h-fit flex flex-row md:justify-center">
        <h1 className=" text-2xl font-medium">Discover Next-Level Features</h1>
      </div>
      <div className=" w-full  h-fit flex flex-row md:justify-center">
        <span className="text-[#94A3B8] leading-8 max-w-[38rem] md:text-center text-left w-fit md:text-lg text-xl font-light">
          Discover the ultimate insights into cutting-edge advancements. Our
          next-level features guide reveals the essentials for staying ahead.
        </span>
      </div>
      <div className="w-full  h-fit flex flex-row md:justify-center ">
        <div className="md:w-[1080px] w-full h-fit mt-7 flex flex-col gap-7">
          <div className="w-full flex md:flex-row flex-col gap-7">
            <div className="md:w-3/6 w-full h-[30rem]   rounded-lg border border-[#1E293B]">
              <div className="w-full h-[60%] dark:bg-black  rounded-t-lg flex flex-row justify-end items-end ">
                <Command className=" border transition-all duration-300 w-[90%] ease-out [mask-image:linear-gradient(to_top,transparent_15%,#000_100%)] ">
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>screenshot.png</CommandItem>
                      <CommandItem>bitcoin.pdf</CommandItem>
                      <CommandItem>finances.xlsx</CommandItem>
                      <CommandItem>logo.svg</CommandItem>
                      <CommandItem>keys.gpg</CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
              <div className="w-full h-[40%] p-5 mt-4 flex flex-col gap-3">
                <h2 className="text-lg">Save your files</h2>
                <span className="text-[#94A3B8] text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>
            </div>
            <div className="md:w-3/6 w-full   rounded-lg border border-[#1E293B]">
              <div className="w-full h-[60%]  dark:bg-black  rounded-t-lg flex flex-row justify-start ">
                <AnimatedBeamMultipleOutputDemo className="[mask-image:linear-gradient(to_top,transparent_3%,#000_100%)] mt-4 " />
              </div>
              <div className="w-full h-[40%] p-5 mt-4 flex flex-col gap-3">
                <h2 className="text-lg">Save your files</h2>
                <span className="text-[#94A3B8] text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col  gap-7">
            <div className="md:w-2/6 w-full h-[28rem]   rounded-lg border border-[#1E293B]">
              <div className="w-full h-[60%] dark:bg-black rounded-t-lg py-10">
                <Marquee
                  pauseOnHover
                  className=" [--duration:20s] w-full [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] "
                >
                  {files.map((f, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        'relative w-52 cursor-pointer overflow-hidden rounded-xl border p-4',
                        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
                        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
                        'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none',
                      )}
                    >
                      <div className="flex flex-row items-center gap-2">
                        <div className="flex flex-col">
                          <figcaption className="text-xl font-medium dark:text-white ">
                            {f.name}
                          </figcaption>
                        </div>
                      </div>
                      <blockquote className="mt-2 text-base">
                        {f.body}
                      </blockquote>
                    </div>
                  ))}
                </Marquee>
              </div>
              <div className="w-full h-[40%] p-5  flex flex-col gap-3">
                <h2 className="text-lg">Save your files</h2>
                <span className="text-[#94A3B8] text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>
            </div>
            <div className="md:w-2/6 w-full h-[28rem]   rounded-lg border border-[#1E293B]">
              <div className="w-full h-[60%] dark:bg-black rounded-t-xl flex flex-row justify-end py-12">
                <Calendar
                  mode="single"
                  selected={new Date(2022, 4, 11, 0, 0, 0)}
                  className=" border rounded-lg  transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_2%,#000_100%)] group-hover:scale-105"
                />
              </div>
              <div className="w-full h-[40%] p-5  flex flex-col gap-3">
                <h2 className="text-lg">Save your files</h2>
                <span className="text-[#94A3B8] text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>
            </div>
            <div className="md:w-2/6 w-full md:h-[28rem] h-[35rem]   rounded-lg border border-[#1E293B]">
              <div className="w-full h-[60%] dark:bg-black flex flex-row justify-end items-end overflow-y-hidden">
                <Globe className='flex flex-col-reverse items-center justify-end  '/>
              </div>
              <div className="w-full h-[40%] p-5  flex flex-col gap-3">
                <h2 className="text-lg">Save your files</h2>
                <span className="text-[#94A3B8] text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
