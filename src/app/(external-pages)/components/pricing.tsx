"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useState } from 'react'

const pricingPlans = [
    {
        name: 'Basic',
        description: 'Best for small projects.',
        monthlyPrice: 69,
        annualPrice: 49,
        link: 'https://github.com/ansub/syntaxUI',
        features: [
            'SEO Strategy & Topic Recommendations',
            'Competitor Analysis to stand out',
            'Built-in Keyword Research',
            'Target latest Google trends',
            'SEO optimized blogs and socials',
            'Technical SEO analysis and Reports',
            'Target 100+ regions and languages',
        ],
    },
    {
        name: 'Standard',
        description:
            'Best for large projects.',
        monthlyPrice: 299,
        annualPrice: 199,
        link: 'https://github.com/ansub/syntaxUI',
        features: [
            'Everything in Basic plan',
            'Get 25 premium blogs',
            'Index upto 1000 pages',
            'Premium support',
            'Local SEO',
            'SEO Agent',
        ],
    },
    {
        name: 'Premium',
        description:
            'Best for organisations.',
        monthlyPrice: 2499,
        annualPrice: 1666,
        link: 'https://github.com/ansub/syntaxUI',
        features: [
            'Everything in Professional plan',
            'Get Unlimited premium blogs',
            'Add your own AI Model key',
            'Premium support & training sessions',
        ],
    },
]


const PricingDemo = () => {

    const [billingCycle, setBillingCycle] = useState<'M' | 'A'>('M')




    const PricingCards = () => (
        <div className="relative z-10 mx-auto flex w-full flex-col gap-8 lg:flex-row lg:gap-4  justify-center items-center">
            {pricingPlans.map((plan, index) => (
                <div
                    key={index}
                    className="rounded-xl border-[1px] border-gray-300 p-6 text-left dark:border-gray-600 w-[350px] hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    {plan.name == "Standard" ? (
                        <div className="mb-1 mt-0 flex justify-between items-center">
                            <p className=" text-lg font-bold text-black dark:text-white">
                                {plan.name}
                            </p>
                            <p className="text-xs font-bold bg-black rounded  text-white dark:text-black dark:bg-white p-2 flex items-center h-auto">
                                Most popular
                            </p>
                        </div>

                    ) : (

                        <p className="mb-1 mt-0 text-lg font-bold text-black dark:text-white">
                            {plan.name}
                        </p>
                    )}
                    <p className="my-0 mb-6 text-md text-gray-600 dark:text-gray-400">{plan.description}</p>
                    <div className="mb-8 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={billingCycle === 'M' ? 'monthly' : 'annual'}
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 100 }}
                                className="my-0 text-3xl font-semibold text-gray-900 dark:text-gray-100"
                            >
                                <span className="font-black dark:text-white">
                                    ${billingCycle === 'M' ? plan.monthlyPrice : plan.annualPrice}
                                </span>

                            </motion.p>
                        </AnimatePresence>
                        <motion.button
                            whileTap={{ scale: 0.985 }}
                            onClick={() => {
                                window.open(plan.link)
                            }}
                            className="mt-8 w-full rounded-lg bg-black dark:bg-white y-2 text-sm font-medium text-white dark:text-black hover:bg-black/90 py-2"
                        >
                            Buy now
                        </motion.button>
                    </div>
                    {plan.features.map((feature, idx) => (
                        <div key={idx} className="mb-3 flex items-center gap-2">
                            <Check className="text-black dark:text-white" size={18} />
                            <span className="text-sm text-gray-600 dark:text-white">{feature}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )







    return (
        <>
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="account" className="w-[200px]" onClick={() => setBillingCycle('M')}>Monthly</TabsTrigger>
                    <TabsTrigger value="password" className="w-[200px]" onClick={() => setBillingCycle('A')}>Yearly</TabsTrigger>
                </TabsList>
                {/* <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent> */}
            </Tabs>

            <section className="relative w-full overflow-hidden  py-12 text-black lg:px-2 lg:py-12">
                <PricingCards />
            </section>
        </>

    )
}

export default PricingDemo




// export default function PricingPage() {
//     return <Pricing />
// }
