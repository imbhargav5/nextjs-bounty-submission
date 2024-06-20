
import React from 'react'
import ShinyButton from '../magicui/shiny-button'
import { H1 } from '../ui/Typography/H1'
import { P } from '../ui/Typography/P'
import { Card, CardContent } from '../ui/card'
import { BentoDemo } from '../BentoDemo/BentoDemo'
import { Button } from '../ui/button'
import { ArrowRight, Sparkle } from 'lucide-react'

const FeatureCard = () => {
  return (
    <div className='flex flex-col mt-20'>
      <div className="text-start md:text-center p-6 md:p-0">
      <Button color="primary" className='bg-[#E2E8F0] hover:bg-[#E2E8F0] text-black dark:bg-[#1E293B] dark:hover:bg-[#1E293B] dark:text-white gap-3 rounded-full'> <Sparkle /> <span>Features</span> <ArrowRight/> </Button> 
        <H1 className='text-2xl  md:text-4xl leading-10 mt-2 md:mt-4'>Discover Next-Level Features</H1>
        <P className='para paraB md:text-xl font-normal leading-7 mt-2 md:mt-4'>Discover the ultimate insights into cutting-edge advancements. Our next-level <br /> features guide reveals the essentials for staying ahead.</P>
      </div>

      <div className='flex flex-col md:flex-row justify-start md:justify-center items-center text-start md:text-center p-6  md:p-44'>
        <BentoDemo />
      </div>
      <div>3</div>
    </div>
  )
}

export default FeatureCard