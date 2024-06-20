import React from 'react'
import Image from 'next/image'
import MZ from "@public/logos/MZ.png"
const Quote = () => {
    return (
        <div className="w-full h-[50vh] flex flex-col gap-6 bg-[#F1F5F9] dark:bg-[#1E293B] mt-24 items-center  justify-center">
            <div className='w-full flex flex-row justify-center h-fit'>
                <svg className='dark:block hidden' width="44" height="32" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.5851 31.998V18.8617C25.5851 8.72372 32.217 1.85252 41.5524 0.00585938L43.321 3.82892C38.9982 5.45874 36.2199 10.2949 36.2199 14.2246H43.3299V31.998H25.5851ZM0.669922 31.998V18.8617C0.669922 8.72372 7.33199 1.85074 16.6674 0.00585938L18.4378 3.82892C14.1132 5.45874 11.3349 10.2949 11.3349 14.2246H18.4147V31.998H0.669922Z" fill="#F8FAFC" />
            </svg>
            <svg className='dark:hidden block' width="44" height="32" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.5851 31.998V18.8617C25.5851 8.72372 32.217 1.85252 41.5524 0.00585938L43.321 3.82892C38.9982 5.45874 36.2199 10.2949 36.2199 14.2246H43.3299V31.998H25.5851ZM0.669922 31.998V18.8617C0.669922 8.72372 7.33199 1.85074 16.6674 0.00585938L18.4378 3.82892C14.1132 5.45874 11.3349 10.2949 11.3349 14.2246H18.4147V31.998H0.669922Z" fill="#020817"/>
</svg>

            </div>
            <div className='w-full flex flex-row h-fit justify-center'>
                <span className='text-3xl md:w-[50rem] md:text-center text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer nec odio. Praesent libero.</span>
            </div>
            <div className='w-full h-fit flex flex-row justify-center gap-4 items-center '>
                <Image src={MZ} alt='nextbase image' /><span className='text-[#94A3B8]'>Mark Zuckerberg &nbsp;&nbsp;&nbsp;|</span>
                <span className='text-[#94A3B8] font-light text-sm'>CEO, Facebook</span>
                
            </div>
        </div>
    )
}

export default Quote