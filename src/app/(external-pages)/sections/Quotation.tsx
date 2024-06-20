import React from 'react'
import Image from 'next/image'
import { BiSolidQuoteLeft } from "react-icons/bi";


const Quotation = () => {
    return (
        <div className="quote w-full bg-gray-100 dark:bg-gray-800  flex flex-col justify-center items-center gap-4 py-24">
            {/* <Image src="/images/quotes.png" alt="quote" width={50} height={50} /> */}
            <BiSolidQuoteLeft className="text-black dark:text-white font-black text-5xl" />
            <div className="quote text-3xl font-semibold w-[800px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nisi iusto odit beatae nemo expedita.</div>
            <div className="author flex gap-4 items-center">
                <Image src="/images/person.png" alt="person" width={30} height={30} className="rounded-full border-[1px] border-white" />
                <p className="nameofauthor text-gray-600 text-lg dark:text-gray-400">Mark Zuckerberg</p>
                <p className=" text-gray-600 dark:text-gray-400 text-lg">|</p>
                <p className="text-gray-400 text-md dark:font-light">CEO, Facebook</p>
            </div>
        </div>
    )
}

export default Quotation
