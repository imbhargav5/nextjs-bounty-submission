import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { AnimatedSubscribeButton } from '@/components/magicui/animated-subscribe-button'
import { CheckIcon, ChevronRightIcon } from "lucide-react";


const Hero = () => {
    return (
        <div className="hero flex flex-col gap-4 justify-center px-4 lg:px-0 items-start lg:items-center overflow-x-hidden">


            {/* animated-shimy-text button (magicui) */}

            <div className="z-10 flex items-center justify-center">
                <div
                    className={cn(
                        "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                    )}
                >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span>✨ Introducing</span>
                        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                </div>
            </div>

            <div className="heading text-2xl lg:text-5xl font-semibold">Nextbase Ultimate Landing Page</div>

            <div className="paragraph text-xl text-gray-500 w-[900px] lg:text-center">Welcome to Nextbase Ultimate Landing Page: Your Gateway to Innovation. Discover the Future of Excellence and Elevate Your Experience</div>

            <div className="hero-buttons flex gap-4 my-4">

                <AnimatedSubscribeButton
                    buttonColor="#000000"
                    buttonTextColor="#ffffff"
                    subscribeStatus={false}
                    initialText={
                        <span className="group inline-flex items-center">
                            Log in{" "}
                            <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    }
                    changeText={
                        <span className="group inline-flex items-center">
                            <CheckIcon className="mr-2 h-4 w-4" />
                            Log in{" "}
                        </span>
                    }
                />

                <AnimatedSubscribeButton
                    buttonTextColor="#000000"
                    buttonColor="#ffffff"
                    subscribeStatus={false}
                    initialText={
                        <span className="group inline-flex items-center">
                            Learn More{" "}
                            <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    }
                    changeText={
                        <span className="group inline-flex items-center">
                            <CheckIcon className="mr-2 h-4 w-4 font-md" />
                            Learn More{" "}
                        </span>
                    }
                />

            </div>

            <Image src="/images/hero.png" alt="hero-image" width={1100} height={1100} />
        </div>
    )
}

export default Hero
