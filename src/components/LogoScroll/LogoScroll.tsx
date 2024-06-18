import React from 'react'
import '../../styles/globals.css'
import Image from 'next/image'
import { P } from '../ui/Typography/P'
const LogoScroll = () => {
  return (
    <>
       <div className={` dark:bg-[#020817] text-gray-900 logos text-start md:text-center md:-mt-44 w-[1512px] h-[200px] py-6 bg-white  items-center gap-2.5  ` } >
             <P className="para md:text-center text-slate-950 text-2xl font-semibold  leading-loose text-start p-4 md:p-0 ml-8 md:ml-0 ">Trusted by 150+ companies</P>
           <div className="logoslide mb-20 mt-8 ">
            <Image src={"/logos/air.svg"} alt="img" width={"142"} height={9} className=''/>
            <Image src={"/logos/google.svg"} alt="img" width={"142"} height={9} className='text-gray-900' />
            <Image src={"/logos/microsoft.svg"} alt="img" width={"142"} height={9} className='text-gray-900' />
            <Image src={"/logos/spotify.svg"} alt="img" width={"142"} height={9} className='text-gray-900'/>
            <Image src={"/logos/mail.svg"} alt="img" width={"142"} height={9} className='logoCol'/>
            <Image src={"/logos/mashable.svg"} alt="img" width={"142"} height={9} className='logoCol' />
            <Image src={"/logos/google.svg"} alt="img" width={"142"} height={9} className='logoCol'/>
  
            
           </div>

           
       </div>
 
       
    </>
  )
}

export default LogoScroll