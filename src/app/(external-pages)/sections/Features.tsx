import React from 'react'
import { CalendarIcon, FileTextIcon, InputIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Share2Icon } from "lucide-react";
import { AnimatedBeamMultipleOutputDemo }
    from "../components/animated-beam";
import Marquee from '@/components/magicui/marquee';
import { cn } from '@/lib/utils';
import AnimatedShinyText from '@/components/magicui/animated-shiny-text';
import { BentoGrid, BentoCard } from '@/components/magicui/bento-grid';
import { Calendar } from '@/components/ui/calendar';
import Globe from '@/components/magicui/globe';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";


const Features = () => {
    const files = [
        {
            name: "bitcoin.pdf",
            body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
        },
        {
            name: "finances.xlsx",
            body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
        },
        {
            name: "logo.svg",
            body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
        },
        {
            name: "keys.gpg",
            body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
        },
        {
            name: "seed.txt",
            body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
        },
    ];

    const features = [
        {
            Icon: FileTextIcon,
            name: "Save your files",
            description: "We automatically save your files as you type.",
            href: "/",
            cta: "Learn more",
            className: "col-span-6 rows-span-1 lg:col-span-3 lg:row-span-2",
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
            Icon: InputIcon,
            name: "Sit Amet Cosecturter",
            description: "Search through all your files in one place.",
            href: "/",
            cta: "Learn more",
            className: "col-span-6 row-span-1 lg:col-span-3 lg:row-span-2",
            background: (
                <AnimatedBeamMultipleOutputDemo />
            ),
        },
        {
            Icon: Share2Icon,
            name: "Integrations",
            description: "Supports 100+ integrations and counting.",
            href: "/",
            cta: "Learn more",
            className: "col-span-6 row-span-1 lg:col-span-2 lg:row-span-2",
            background: (
                <Marquee
                    pauseOnHover
                    className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
                >
                    {files.map((f, idx) => (
                        <figure
                            key={idx}
                            className={cn(
                                "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                                "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                            )}
                        >
                            <div className="flex flex-row items-center gap-2">
                                <div className="flex flex-col">
                                    <figcaption className="text-sm font-medium dark:text-white ">
                                        {f.name}
                                    </figcaption>
                                </div>
                            </div>
                            <div className="mt-2 text-xs">{f.body}</div>
                        </figure>
                    ))}
                </Marquee>
            ),
        },
        {
            Icon: CalendarIcon,
            name: "Calendar",
            description: "Use the calendar to filter your files by date.",
            className: "col-span-6 row-span-1 lg:col-span-2 lg:row-span-2",
            href: "/",
            cta: "Learn more",
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
            name: "Globe",
            description: "this has globe as background.",
            className: "col-span-6 row-span-1 lg:col-span-2 lg:row-span-2",
            href: "/",
            cta: "Learn more",
            background: (
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-40 md:pb-60 md:shadow-xl">
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                    </span>
                    <Globe className="top-40" />
                    <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
                </div>
            ),
        },
    ];



    return (
        <div className="features flex flex-col justify-center items-center gap-4">

            {/* animated-shimy-text button (magicui) */}
            <div className="z-10 flex items-center justify-center">
                <div
                    className={cn(
                        "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                    )}
                >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span>✨ Features</span>
                        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                </div>
            </div>

            <div className="heading text-4xl font-semibold">Discover Next-Level Features</div>

            <div className="paragraph text-xl text-gray-500 w-[900px] px-16">Discover the ultimate insights into cutting-edge advancements. Our next-level features guide reveals the essentials for staying ahead.</div>

            <BentoGrid >
                {features.map((feature, idx) => {
                    return (
                        <BentoCard {...feature} key={idx} />
                    )
                })}
            </BentoGrid>

        </div>
    )
}

export default Features
