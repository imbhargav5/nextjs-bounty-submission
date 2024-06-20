import React from 'react'
import { H1 } from '../ui/Typography/H1'
import { H2 } from '../ui/Typography/H2'
import Image from 'next/image'
import { P } from '../ui/Typography/P'

const Quotetion = () => {
  return (
    <>
     <div className=" bg-slate-100 dark:bg-[#1E293B] flex-col justify-start md:items-center mb-10 p-20">
      
      <H2 className="text-start md:text-center dark:text-slate-50 text-slate-950 text-xl md:text-4xl font-bold leading-8 flex flex-col"> <span className="text-9xl ">&quot;</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Integer nec odio. Praesent libero.</H2>

      <div className="flex flex-row justify-center text-center items-center mt-6 gap-4">
        <Image src={"/logos/image.png"} alt='img' width={32} height={32} className='rounded-full gap-2'/>
        <P className="text-center text-slate-500 text-sm md:text-base font-medium font-['Geist'] leading-7">Mark Zuckerberg</P>
        <div className="w-28 h-5 pl-3.5 border-l-2 border-slate-950/opacity-50 flex-col justify-start items-center md:justify-center inline-flex">
    <div className="text-center text-slate-500 text-sm font-light font-['Geist'] leading-tight">CEO, Facebook</div>
</div>
      </div>
     </div>
    </>
  )
}

export default Quotetion