import React from 'react'
import DummyInfo from '../DummyInfo/DummyInfo'
import ShinyButton from '../magicui/shiny-button'
import { Button } from '../ui/button'
import { icons, CheckCircle, CheckCircleIcon } from 'lucide-react'
import { H1 } from '../ui/Typography/H1'
import { P } from '../ui/Typography/P'
import { H4 } from '../ui/Typography/H4'


const Card1 = [
  {
    id:1,
    desc: "Custom Domain Registration",
    icons: <CheckCircle />
  },

  {
    id:2,
    desc: "Basic Website Hosting",
    icons: <CheckCircle />
  },

  {
    id:3,
    desc: "Standard Security Features",
    icons: <CheckCircle />
  },

  {
    id:4,
    desc: "Mobile-Responsive Design",
    icons: <CheckCircle />
  },
  {
    id:5,
    desc: "Basic SEO Optimization",
    icons: <CheckCircle />
  },
  {
    id:6,
    desc: "Content Management System (CMS)",
    icons: <CheckCircle />
  },
  {
    id:7,
    desc: "Contact Form Integration",
    icons: <CheckCircle />
  },
  {
    id:8,
    desc: "Social Media Integration",
    icons: <CheckCircle />
  },

]

const Pricing = () => {

  return (
    <>
    <div className=" flex flex-col justify-between items-center text-[#0F172A] dark:text-[#F8FAFC] text-start md:text-center mt-44 mb-44">
      
      <DummyInfo  head={"Quality without any compromise"} paragraph={"CI/CD streamlines feature delivery, scalable infrastructure ensures global"} parag={"edge optimization and app monitoring capabilities for peak site performance."} />

      <div className="flex flex-row w-[332px] md:h-12 p-1 bg-slate-100 dark:bg-[#4b576d] rounded-md  justify-between gap-2  ">
        <Button className="w-1/2 bg-white hover:bg-slate-300 text-black dark:bg-[#020817] dark:text-white  ">Monthly</Button>
        <Button className="w-1/2 bg-slate-100 hover:bg-slate-300 text-black dark:bg-[#1E293B] dark:text-[#94A3B8]">Yearly</Button>
      </div>
      
    </div>
 
 {/**Card Section */}
     <div className='allthreecard  w-[1104px] h-[872px] flex-col justify-center items-center gap-8 inline-flex'>
         
         <div>1</div>
         <div>2</div>
         <div>3</div>
     </div>


    </>
  )
}

export default Pricing










const UpperCard = ({plan, about, price}) => {
  return (
    <>
     <H4>{plan}</H4>
     <P>{about}</P>
     <H1>$99</H1>
     <Button>{price}</Button>
    </>
  )
}




// <H4>Basic</H4>
// <P>Best for Small Projects</P>
// <H1>$99</H1>
// <Button>Buy Now</Button>