import React from 'react';
import an from '@public/logos/LandingImg.png';
import AnimatedLogoCloud from '@/components/ui/AnimatedLogoCloud';
import ShineButton from '@/components/ui/shineButton';
import Image from 'next/image';
import Chip from '../ui/Chip';

const Main = () => {
  return (
    <div className="w-full min-h-100vh max-h-fit flex flex-col px-4 gap-6 ">
      <div className=" w-full  h-fit flex flex-row md:justify-center">
       <Chip/>
      </div>
      <div className=" w-full  h-fit flex flex-row md:justify-center">
        <h1 className=" text-4xl font-medium">
          Nextbase Ultimate Landing Page
        </h1>
      </div>
      <div className=" w-full  h-fit flex flex-row md:justify-center">
        <span className="text-[#94A3B8] leading-8 max-w-[48rem] md:text-center text-left w-fit font-light">
          Welcome to Nextbase Ultimate Landing Page: Your Gateway to Innovation.
          Discover the Future of Excellence and Elevate Your Experience.
        </span>
      </div>
      <div className="flex flex-col gap-3 md:justify-center md:flex-row">
        <ShineButton />
        <button className="w-full md:w-fit group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#F1F5F9] dark:bg-[#1E293B]  px-8 py-[10px] text-xs font-normal dark:text-white text-black transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[#F1F5F9]/90 hover:dark:shadow-white-500/30">
          <span className="text-sm">Learn more</span> &nbsp;&nbsp;&nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div className="relative h-full w-8 bg-white/20" />
          </div>
        </button>
      </div>
      <div className="w-full h-[520] justify-center flex flex-row">
        <Image
          src={an}
          alt="Landing Page Image NextBase / usenextbase.com"
          style={{ width: '1110px', height: '520px' }}
          className=" object-cover"
        />
      </div>
      <div className="w-full h-fit flex flex-col items-center mt-10  ">
        <span className="text-[#828388] font-[500] text-xl">
          Trusted by 150+ companies
        </span>
        <AnimatedLogoCloud />
      </div>
    </div>
  );
};

export default Main;
