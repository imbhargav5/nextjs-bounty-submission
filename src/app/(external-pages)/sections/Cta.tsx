import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import AnimatedShinyText from "@/components/magicui/animated-shiny-text"
import { ArrowRightIcon } from "@radix-ui/react-icons"
const Cta = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4">

            {/* animated-shimy-text button (magicui) */}
            <div className="z-10 flex items-center justify-center">
                <div
                    className={cn(
                        "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                    )}
                >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span> Start your journey</span>
                        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                </div>
            </div>

            <div className="heading text-4xl font-semibold">Ready to move with Ultimate?</div>

            <div className="paragraph text-xl text-gray-500 dark:text-gray-400 w-[900px] px-16">Automated CI/CD streamlines feature delivery, scalable infrastructure ensures global edge optimization and app monitoring capabilities for peak site performance.
            </div>
            <Button className="bg-black px-8 hover:bg-black/80 dark:bg-white dark:text-black">
                Get Started
            </Button>
        </div>
    )
}

export default Cta
