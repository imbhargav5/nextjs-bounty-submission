import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Chip from '../ui/Chip';
import { useState } from 'react';



const Basic =[{
    name: 'Basic',
    description: 'Best For small Projects.',
    monthlyPrice: 69,
    annualPrice: 99,
    link: 'https://github.com/ansub/syntaxUI',
    features: [
      ' Custom Domain Registration',
      ' Basic Website Hosting',
      ' Standard Security Features',
      ' Mobile-Responsive Design',
      '   Basic SEO Optimization',
      ' Content Management System (CMS)',
      '  Contact Form Integration',
      'Social Media Integration',
    ],
  }]

const Standard =[  {
    name: 'Standard',
    description: 'Bext for Large Projects',
    monthlyPrice: 299,
    annualPrice: 199,
    link: 'https://github.com/ansub/syntaxUI',
    features: [
      ' Everything in Basic Plan',
      'Advanced Security Features',
      'Enhanced SEO Optimization',
      'Blog Setup and Management',
      'E-commerce Integration',
      'Up to 10 Pages',
      'Custom Email Accounts',
      'Monthly Performance Reports',
      'Priority Email Support',
      'Bi-Weekly Backups',
      'Social Media Management Tools',
    ],
  }]

const Premium = [
    {
        name: 'Premium',
        description: 'Best for Organisation',
        monthlyPrice: 2499,
        annualPrice: 399,
        link: 'https://github.com/ansub/syntaxUI',
        features: [
          'Everything in Standard Plan',
          ' Custom Web Application Development',
          'Advanced E-commerce Features',
          ' Unlimited Pages',
          'Dedicated Account Manager',
          'Dedicated Account Manager',
          ' 24/7 Phone and Email Support',
          ' Weekly Backups',
          ' Advanced Analytics and Reporting',
          'End to End Integration test suite',
          'Custom API Integrations',
          ' Personalized SEO Strategy',
          'Transcend Framer template 7',
          'PowerSaas Framer template 7',
          'Personalized SEO Strategy',
          ' Premium CDN Services',
          'Ongoing Website Maintenance and Updates',
        ],
      },
  ]

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'M' | 'A'>('M');

  const Heading = () => (
    <div className="relative z-10 my-12 flex flex-col items-center justify-center gap-4 md:px-0 px-4 ">
      <div className="flex w-full flex-col items-start justify-center space-y-4 md:items-center md:mb-0 mb-7">
       <Chip/>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-200">
          Quality without any compromise
        </p>
        <p className="text-lg max-w-3xl text-gray-700 md:text-center dark:text-[#94A3B8]">
          Automated CI/CD streamlines feature delivery, scalable infrastructure
          ensures global edge optimization and app monitoring capabilities for
          peak site performance.
        </p>
      </div>
      <div className="flex items-center justify-center dark:bg-[#1E293B] bg-[#F1F5F9]  rounded-sm p-1 gap-3">
        <button
          onClick={() => setBillingCycle('M')}
          className={cn(
            ` rounded-sm px-9 py-[0.20rem] text-sm font-medium flex flex-col justify-center items-center `,
            billingCycle === 'M'
              ? 'relative bg-[#020817] text-white '
              : 'text-gray-700 hover:bg-red-100 dark:text-gray-300 dark:hover:text-black',
          )}
        >
          Monthly
          {billingCycle === 'M' && <BackgroundShift shiftKey="monthly" />}
        </button>
        <button
          onClick={() => setBillingCycle('A')}
          className={cn(
            `rounded-sm px-9 py-[0.20rem] text-sm font-medium flex flex-col justify-center items-center`,
            billingCycle === 'A'
              ? 'relative bg-black text-white '
              : 'text-gray-700 hover:bg-red-100 dark:text-gray-300 dark:hover:text-black',
          )}
        >
          Annual
          {billingCycle === 'A' && <BackgroundShift shiftKey="annual" />}
        </button>
      </div>
    </div>
  );

  const PricingCards = () => (
    <div className="  justify-center  flex w-full flex-col gap-8 lg:flex-row lg:gap-4 md:px-0 px-4 ">
      {Basic.map((plan, index) => (
        <>
        <div
          key={index}
          className=" rounded-xl border-[1px] h-fit p-4 md:w-80 w-full text-left dark:border-[#1E293B]"
        >
          <p className="mb-1 mt-0 text-xl font-medium dark:text-white">
            {plan.name}
          </p>
          <p className="my-0 mb-4 text-[#94A3B8]">{plan.description}</p>
          <div className="mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={billingCycle === 'M' ? 'monthly' : 'annual'}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="my-0 text-3xl font-bold text-gray-900 dark:text-gray-100"
              >
                <span>
                  ${billingCycle === 'M' ? plan.monthlyPrice : plan.annualPrice}
                </span>
              </motion.p>
            </AnimatePresence>
            <motion.button
              whileTap={{ scale: 0.985 }}
              onClick={() => {
                window.open(plan.link);
              }}
              className="mt-4 w-full rounded-lg bg-[#0F172A] dark:bg-white py-2 text-sm font-medium text-white dark:text-black     hover:bg-black/90"
            >
              Buy Now
            </motion.button>
          </div>
          <hr className='mb-10'/>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="mb-3 flex items-center gap-2">
              <svg
                width="14"
                height="14"
                className="border border-1 border-white rounded-xl hidden dark:block"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.81123 9.42673C5.90826 9.52557 6.04418 9.57616 6.18222 9.56486C6.32026 9.55366 6.44616 9.48161 6.52586 9.3683L9.4814 5.16834C9.6297 4.95757 9.57911 4.66646 9.36837 4.51814C9.15757 4.36981 8.86646 4.42044 8.71813 4.63122L5.81123 9.42673ZM5.81123 9.42673L4.33346 7.92159M5.81123 9.42673L4.33346 7.92159M4.33346 7.92159C4.15288 7.73769 4.15559 7.44222 4.3395 7.26166L4.33346 7.92159ZM4.69024 7.5713C4.69024 7.5713 4.69025 7.5713 4.69025 7.57131L4.69024 7.5713ZM4.69024 7.5713L4.99944 7.26771M4.69024 7.5713L4.66646 7.59464L4.66644 7.59466L4.64267 7.618L4.99944 7.26771M4.69024 7.5713L4.99944 7.26771M4.69024 7.5713L4.99944 7.26771M9.09977 4.89978L9.07249 4.88059L9.09977 4.89978Z"
                  fill="#F8FAFC"
                  stroke="#F8FAFC"
                />
              </svg>
              <svg className="border border-1 border-black rounded-xl block dark:hidden" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.81147 9.42673C5.9085 9.52557 6.04443 9.57616 6.18247 9.56486C6.32051 9.55366 6.4464 9.48161 6.52611 9.3683L9.48164 5.16834C9.62995 4.95757 9.57936 4.66646 9.36861 4.51814C9.15781 4.36981 8.8667 4.42044 8.71838 4.63122L5.81147 9.42673ZM5.81147 9.42673L4.3337 7.92159M5.81147 9.42673L4.3337 7.92159M4.3337 7.92159C4.15313 7.73769 4.15583 7.44222 4.33975 7.26166L4.3337 7.92159ZM4.69048 7.5713C4.69049 7.5713 4.69049 7.5713 4.69049 7.57131L4.69048 7.5713ZM4.69048 7.5713L4.99969 7.26771M4.69048 7.5713L4.6667 7.59464L4.66668 7.59466L4.64291 7.618L4.99969 7.26771M4.69048 7.5713L4.99969 7.26771M4.69048 7.5713L4.99969 7.26771M9.10001 4.89978L9.07274 4.88059L9.10001 4.89978Z" fill="#0F172A" stroke="#020817"/>
</svg>


              <span className="text-sm dark:text-white">{feature}</span>
            </div>
          ))}
        </div>
        
        </>
      ))}

       {Standard.map((plan, index) => (
        <>
        <div
          key={index}
          className=" rounded-xl border-[1px] h-fit bg-[#F1F5F9] dark:bg-[#1E293B] p-4 md:w-80 w-full text-left dark:border-[#1E293B]"
        >   
        <div className='flex flexz-row justify-between'>
          <p className="mb-1 mt-0 text-xl font-medium dark:text-white">
            {plan.name}
          </p>
          <span className='p-[2px] px-[0.7rem] h-fit  text-xs rounded-md bg-white text-black'>
            Most Popular
          </span>
          </div>
          <p className="my-0 mb-4 text-[#94A3B8]">{plan.description}</p>
          <div className="mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={billingCycle === 'M' ? 'monthly' : 'annual'}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="my-0 text-3xl font-bold text-gray-900 dark:text-gray-100"
              >
                <span>
                  ${billingCycle === 'M' ? plan.monthlyPrice : plan.annualPrice}
                </span>
              </motion.p>
            </AnimatePresence>
            <motion.button
              whileTap={{ scale: 0.985 }}
              onClick={() => {
                window.open(plan.link);
              }}
              className="mt-4 w-full rounded-lg bg-[#0F172A] dark:bg-white py-2 text-sm font-medium text-white dark:text-black     hover:bg-black/90"
              
            >
              Buy Now
            </motion.button>
          </div>
          <hr className='mb-10'/>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="mb-3 flex items-center gap-2">
                            <svg
                width="14"
                height="14"
                className="border border-1 border-white rounded-xl hidden dark:block"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.81123 9.42673C5.90826 9.52557 6.04418 9.57616 6.18222 9.56486C6.32026 9.55366 6.44616 9.48161 6.52586 9.3683L9.4814 5.16834C9.6297 4.95757 9.57911 4.66646 9.36837 4.51814C9.15757 4.36981 8.86646 4.42044 8.71813 4.63122L5.81123 9.42673ZM5.81123 9.42673L4.33346 7.92159M5.81123 9.42673L4.33346 7.92159M4.33346 7.92159C4.15288 7.73769 4.15559 7.44222 4.3395 7.26166L4.33346 7.92159ZM4.69024 7.5713C4.69024 7.5713 4.69025 7.5713 4.69025 7.57131L4.69024 7.5713ZM4.69024 7.5713L4.99944 7.26771M4.69024 7.5713L4.66646 7.59464L4.66644 7.59466L4.64267 7.618L4.99944 7.26771M4.69024 7.5713L4.99944 7.26771M4.69024 7.5713L4.99944 7.26771M9.09977 4.89978L9.07249 4.88059L9.09977 4.89978Z"
                  fill="#F8FAFC"
                  stroke="#F8FAFC"
                />
              </svg>
              <svg className="border border-1 border-black rounded-xl block dark:hidden" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.81147 9.42673C5.9085 9.52557 6.04443 9.57616 6.18247 9.56486C6.32051 9.55366 6.4464 9.48161 6.52611 9.3683L9.48164 5.16834C9.62995 4.95757 9.57936 4.66646 9.36861 4.51814C9.15781 4.36981 8.8667 4.42044 8.71838 4.63122L5.81147 9.42673ZM5.81147 9.42673L4.3337 7.92159M5.81147 9.42673L4.3337 7.92159M4.3337 7.92159C4.15313 7.73769 4.15583 7.44222 4.33975 7.26166L4.3337 7.92159ZM4.69048 7.5713C4.69049 7.5713 4.69049 7.5713 4.69049 7.57131L4.69048 7.5713ZM4.69048 7.5713L4.99969 7.26771M4.69048 7.5713L4.6667 7.59464L4.66668 7.59466L4.64291 7.618L4.99969 7.26771M4.69048 7.5713L4.99969 7.26771M4.69048 7.5713L4.99969 7.26771M9.10001 4.89978L9.07274 4.88059L9.10001 4.89978Z" fill="#0F172A" stroke="#020817"/>
</svg>

              <span className="text-sm dark:text-white">{feature}</span>
            </div>
          ))}
        </div>
        
        </>
      ))}

       {Premium.map((plan, index) => (
        <>
        <div
          key={index}
          className=" rounded-xl border-[1px] h-fit p-4 md:w-80 w-full text-left dark:border-[#1E293B]"
        >
          <p className="mb-1 mt-0 text-xl font-medium dark:text-white">
            {plan.name}
          </p>
          <p className="my-0 mb-4 text-[#94A3B8]">{plan.description}</p>
          <div className="mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={billingCycle === 'M' ? 'monthly' : 'annual'}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="my-0 text-3xl font-bold text-gray-900 dark:text-gray-100"
              >
                <span>
                  ${billingCycle === 'M' ? plan.monthlyPrice : plan.annualPrice}
                </span>
              </motion.p>
            </AnimatePresence>
            <motion.button
              whileTap={{ scale: 0.985 }}
              onClick={() => {
                window.open(plan.link);
              }}
              className="mt-4 w-full rounded-lg bg-[#0F172A] dark:bg-white py-2 text-sm font-medium text-white dark:text-black     hover:bg-black/90"
            >
              Buy Now
            </motion.button>
          </div>
          <hr className='mb-10'/>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="mb-3 flex items-center gap-2">
                           <svg
                width="14"
                height="14"
                className="border border-1 border-white rounded-xl hidden dark:block"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.81123 9.42673C5.90826 9.52557 6.04418 9.57616 6.18222 9.56486C6.32026 9.55366 6.44616 9.48161 6.52586 9.3683L9.4814 5.16834C9.6297 4.95757 9.57911 4.66646 9.36837 4.51814C9.15757 4.36981 8.86646 4.42044 8.71813 4.63122L5.81123 9.42673ZM5.81123 9.42673L4.33346 7.92159M5.81123 9.42673L4.33346 7.92159M4.33346 7.92159C4.15288 7.73769 4.15559 7.44222 4.3395 7.26166L4.33346 7.92159ZM4.69024 7.5713C4.69024 7.5713 4.69025 7.5713 4.69025 7.57131L4.69024 7.5713ZM4.69024 7.5713L4.99944 7.26771M4.69024 7.5713L4.66646 7.59464L4.66644 7.59466L4.64267 7.618L4.99944 7.26771M4.69024 7.5713L4.99944 7.26771M4.69024 7.5713L4.99944 7.26771M9.09977 4.89978L9.07249 4.88059L9.09977 4.89978Z"
                  fill="#F8FAFC"
                  stroke="#F8FAFC"
                />
              </svg>
              <svg className="border border-1 border-black rounded-xl block dark:hidden" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.81147 9.42673C5.9085 9.52557 6.04443 9.57616 6.18247 9.56486C6.32051 9.55366 6.4464 9.48161 6.52611 9.3683L9.48164 5.16834C9.62995 4.95757 9.57936 4.66646 9.36861 4.51814C9.15781 4.36981 8.8667 4.42044 8.71838 4.63122L5.81147 9.42673ZM5.81147 9.42673L4.3337 7.92159M5.81147 9.42673L4.3337 7.92159M4.3337 7.92159C4.15313 7.73769 4.15583 7.44222 4.33975 7.26166L4.3337 7.92159ZM4.69048 7.5713C4.69049 7.5713 4.69049 7.5713 4.69049 7.57131L4.69048 7.5713ZM4.69048 7.5713L4.99969 7.26771M4.69048 7.5713L4.6667 7.59464L4.66668 7.59466L4.64291 7.618L4.99969 7.26771M4.69048 7.5713L4.99969 7.26771M4.69048 7.5713L4.99969 7.26771M9.10001 4.89978L9.07274 4.88059L9.10001 4.89978Z" fill="#0F172A" stroke="#020817"/>
</svg>

              <span className="text-sm dark:text-white">{feature}</span>
            </div>
          ))}
        </div>
        
        </>
      ))}
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden  py-12 text-black lg:px-2 lg:py-12">
      <Heading />
      <PricingCards />
    </section>
  );
};

const BackgroundShift = ({ shiftKey }: { shiftKey: string }) => (
  <motion.span
    key={shiftKey}
    layoutId="bg-shift"
    className="absolute inset-0 -z-10 rounded-lg "
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
  />
);

export default function PricingPage() {
  return <Pricing />;
}
