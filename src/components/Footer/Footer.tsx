import Image from 'next/image'
import React from 'react'
import { H3 } from '../ui/Typography/H3'
import { H4 } from '../ui/Typography/H4'
import { P } from '../ui/Typography/P'

const res = [
  {
    id:1,
    val: "NextBase"
  }
]


const follow = [
  {
    id:1,
    val: "Github"
  },
  {
    id:2,
    val: "Twitter"
  },
]


const legal = [
  {
    id:1,
    val: "Privacy Policy"
  },
  {
    id:2,
    val: "Terms & Conditions"
  },
  // {
  //   id:3,
  //   val: "Twitter"
  // },
]



const Footer = () => {
  return (
    <>
     {/* <div className="bg-foreground min-h-[200px] text-background">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h2>Bounty</h2>
          </div>
        </div>
      </div>
    </div> */}


       <div className=" min-h-[400px] bg-slate-100 dark:bg-[#1E293B] md:mt-32 mb-10">
         <div  className="container ">
             <div className="flex flex-row justify-between md:mt-44">
                 <div className='flex flex-col'> 
                <div className="flex flex-row text-center items-center gap-4  ">
                  <Image src={"/logos/acme-logo-dark.png"} alt='img' width={"30"} height={"20"} className=' mt-6 md:mt-8'/> 
                  <H3>Nextbase</H3>
                  </div>
                  <P className="mt-4">Acme Inc. 123 Acme Street, London, UK, SW1A 1AA</P>
                 </div>

                   <div className='grid grid-cols-2 md:grid-cols-3 mt-44 md:mt-0 -ml-72 md:-ml-0 mr-32 '>
              <div className="">
                <H4>RESOURCES</H4>
                {
                  res.map((item, idx) => (
                    <div key={idx}>
                      <P className='mt-4'>{item.val}</P>
                    </div>
                  ))
                }
              </div>

              <div className="ml-6 md:ml-0">
                <H4>FOLLOW US</H4>
                {
                  follow.map((item, idx) => (
                    <div key={idx}>
                      <P className='mt-4'>{item.val}</P>
                    </div>
                  ))
                }
              </div>

              <div>
                <H4>LEGAL</H4>
                {
                  legal.map((item, idx) => (
                    <div key={idx}>
                      <P className='mt-4'>{item.val}</P>
                    </div>
                  ))
                }
              </div>
                  

              </div>

             </div>
         </div>
       </div>
    </>
  )
}

export default Footer