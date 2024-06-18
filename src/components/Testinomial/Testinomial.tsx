import React from 'react'
import { H1 } from '../ui/Typography/H1'
import { P } from '../ui/Typography/P'
import MarqueeCard from '../MarqueeCard/MarqueeCard'

const Testinomial = () => {
  return (
    <>
     <div className=" bg-[#F1F5F9] dark:bg-[#1E293B] flex flex-col justify-between items-center text-[#0F172A] dark:text-[#F8FAFC] text-start md:text-center  mb-44">
       <div className="mt-2 md:mt-24 p-6 md:p-0">
        <H1 className=" text-2xl md:text-4xl font-semibold  leading-10">Don't take our word for it</H1>
        <P className="para paraB  md:text-xl font-normal  leading-7">Hear what our satisfied customers have to say about Nextbase</P>
        
       </div>
       <div>
        <MarqueeCard/>
       </div>
     </div>
    </>
  )
}

export default Testinomial