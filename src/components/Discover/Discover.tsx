import { Calendar } from '@/components/ui/calendar';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';
import AnimatedBeamMultipleOutputDemo from '@/components/magicui/animated-beam-multiple-outputs';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import Globe from '@/components/magicui/globe';
import Marquee from '@/components/magicui/marquee';
import { CalendarIcon, FileTextIcon, InputIcon } from '@radix-ui/react-icons';
import { Share2Icon } from 'lucide-react';
import { Button } from '../ui/button';

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

const features = [
  {
    Icon: InputIcon,
    name: 'Save your files',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    href: '/',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-3',
    background: (
      <Command className="absolute right-10 top-10 w-[70%] origin-top translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>screenshot.png</CommandItem>
            <CommandItem>bitcoin.pdf</CommandItem>
            <CommandItem>finances.xlsx</CommandItem>
            <CommandItem>logo.svg</CommandItem>
            <CommandItem>keys.gpg</CommandItem>
            <CommandItem>seed.txt</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    ),
  },
  {
    Icon: Share2Icon,
    name: 'Sit Amet Consectetur',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: '/',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-3',
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: FileTextIcon,
    name: 'Adipiscing Elit Sed',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur.',
    href: '/',
    cta: 'Learn more',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              'relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4',
              'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
              'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
              'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none',
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: CalendarIcon,
    name: 'Eiusmod Tempor Incididunt',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt inculpa qofficia deserunt mollit anim id e',
    className: 'col-span-3 lg:col-span-2',
    href: '/',
    cta: 'Learn more',
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
  {
    Icon: CalendarIcon,
    name: 'Magna Aliqua Ut',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur.',
    className: 'col-span-3 lg:col-span-2',
    href: '/',
    cta: 'Learn more',
    background: (
      <>
        <Globe />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </>
    ),
  },
];

export default function Discover() {
  return (
    <div className="mx-52 pt-12 pb-24">
      <div className="flex flex-col items-center">
        <div>
          <Button className="mx-auto max-w-md !bg-[#F1F5F9] h-auto space-x-1 rounded-full py-2 px-3 text-black border border-[#E2E8F0] dark:text-neutral-400/50">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.33333 2V4.66667M12.6667 11.3333V14M2 3.33333H4.66667M11.3333 12.6667H14M8 2L6.72533 5.87533C6.6601 6.07367 6.5492 6.25392 6.40156 6.40156C6.25392 6.5492 6.07367 6.6601 5.87533 6.72533L2 8L5.87533 9.27467C6.07367 9.3399 6.25392 9.4508 6.40156 9.59844C6.5492 9.74608 6.6601 9.92633 6.72533 10.1247L8 14L9.27467 10.1247C9.3399 9.92633 9.4508 9.74608 9.59844 9.59844C9.74608 9.4508 9.92633 9.3399 10.1247 9.27467L14 8L10.1247 6.72533C9.92633 6.6601 9.74608 6.5492 9.59844 6.40156C9.4508 6.25392 9.3399 6.07367 9.27467 5.87533L8 2Z"
                stroke="#020817"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="text-sm">Features </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_503_107)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.68951 3.35623C8.89779 3.14794 9.23548 3.14794 9.44375 3.35623L13.7105 7.6229C13.9187 7.83117 13.9187 8.16886 13.7105 8.37713L9.44375 12.6439C9.23548 12.8521 8.89779 12.8521 8.68951 12.6439C8.48123 12.4355 8.48123 12.0978 8.68951 11.8895L12.0457 8.53335H2.66663C2.37208 8.53335 2.1333 8.29456 2.1333 8.00001C2.1333 7.70547 2.37208 7.46668 2.66663 7.46668H12.0457L8.68951 4.11047C8.48123 3.90219 8.48123 3.56451 8.68951 3.35623Z"
                  fill="#0F172A"
                />
              </g>
              <defs>
                <clipPath id="clip0_503_107">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </div>
        <div className="my-4">
          <h1 className="text-4xl font-semibold">
            Discover Next-Level Features{' '}
          </h1>
        </div>
        <div className="mb-8">
          <p className="text-xl text-center font-normal text-[#64748B] max-w-[728px]">
            Discover the ultimate insights into cutting-edge advancements. Our
            next-level features guide reveals the essentials for staying ahead.
          </p>
        </div>
      </div>
      <div className="max-w-full p-4">
        <BentoGrid className="auto-rows-[474px] grid-cols-6 gap-6">
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
