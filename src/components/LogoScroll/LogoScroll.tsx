import React from 'react'
import '../../styles/globals.css'
import Image from 'next/image'
import { P } from '../ui/Typography/P'
const LogoScroll = () => {
  return (
    <>
       <div className={` dark:bg-[#020817] logos  ` } >
             <P className='para'>Trusted by 150+ companies</P>
           <div className="logoslide ">
            <Image src={"/logos/airbnb.png"} alt="img" width={"142"} height={9} />
            <Image src={"/logos/google.png"} alt="img" width={"142"} height={9} />
            <Image src={"/logos/microsoft.png"} alt="img" width={"142"} height={9} />
            <Image src={"/logos/spotify.png"} alt="img" width={"142"} height={9} />
            <Image src={"/logos/mail.png"} alt="img" width={"142"} height={9} />
            <Image src={"/logos/mashable.png"} alt="img" width={"142"} height={9} />
            <Image src={"/logos/google.png"} alt="img" width={"142"} height={9} />
 
           </div>

           
       </div>
 
       
    </>
  )
}

export default LogoScroll