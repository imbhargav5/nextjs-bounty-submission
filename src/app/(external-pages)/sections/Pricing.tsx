import PricingDemo from '../components/pricing'
import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'

const Pricing = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 py-24">

            {/* animated-shimy-text button (magicui) */}
            <div className="z-10 flex items-center justify-center">
                <div
                    className={cn(
                        "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
                    )}
                >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span>$ Pricing</span>
                        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                </div>
            </div>

            <div className="heading text-4xl font-semibold">Quality without any compromise</div>

            <div className="paragraph text-xl text-gray-500 dark:text-gray-400 w-[900px] px-16">CI/CD streamlines feature delivery, scalable infrastructure ensures global edge optimization and app monitoring capabilities for peak site performance
            </div>

            <PricingDemo />
        </div>
    )
}

export default Pricing
