import { HomeIcon } from '@radix-ui/react-icons'
import React from 'react'
import ShinyButton from "@/components/magicui/shiny-button";
import { Button } from '../ui/button';
import Image from 'next/image';
import { H1 } from '../ui/Typography/H1';
import { P } from '../ui/Typography/P';
import { LoginCTAButton } from '../NavigationMenu/ExternalNavbar/LoginCTAButton';
import CusButton from '../CusButton/CusButton';
 

const Home = () => {
  return ( 
    <>
    
    <div className='flex flex-col p-6 md:p-0 md:text-center justify-center items-center md:mt-32 mt-8'>
      <div>
          <ShinyButton text="Introducing" />
          <H1 className='leading-20 mt-2 mb-2'>Nextbase Ultimate Landing Page</H1>
          <P className='para dark:paraB'>Welcome to Nextbase Ultimate Landing Page: Your Gateway to Innovation. Discover the Future of <br /> Excellence and Elevate Your Experience.</P>
          <div className=' flex md:flex-row flex-col md:w-1/2 justify-center items-center text-center md:gap-10 gap-2 mt-2 md:ml-44 md:mt-6 '> <LoginCTAButton/> <CusButton/>  </div>
      </div>
    </div>

<div className="rounded-lg shadow md:mt-20 items-center text-center flex justify-center mb-44 "> <Image src={"/logos/home.png"} alt='img' className='w-[359px] h-[514px] md:w-[1104px] md:h-[514px]'  width={"359"} height={"514"}/> </div>
</>
  )
}

export default Home


