import React from 'react'
import DummyInfo from '../DummyInfo/DummyInfo'
import ShinyButton from '../magicui/shiny-button'
import { Button } from '../ui/button'
import { icons, CheckCircle, CheckCircleIcon, DollarSign, ArrowRight } from 'lucide-react'
import { H1 } from '../ui/Typography/H1'
import { P } from '../ui/Typography/P'
import { H4 } from '../ui/Typography/H4'
import PricingCard from './PricingCard'
import { H3 } from '../ui/Typography/H3'
import { Card, CardHeader, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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


const Card2 = [
  {
    id:1,
    desc: "Everything in Basic Plan",
    icons: <CheckCircle />
  },

  {
    id:2,
    desc: "Advanced Security Features",
    icons: <CheckCircle />
  },

  {
    id:3,
    desc: "Enhanced SEO Optimization",
    icons: <CheckCircle />
  },

  {
    id:4,
    desc: "Blog Setup and Management",
    icons: <CheckCircle />
  },
  {
    id:5,
    desc: "E-commerce Integration",
    icons: <CheckCircle />
  },
  {
    id:6,
    desc: "Up to 10 Pages",
    icons: <CheckCircle />
  },
  {
    id:7,
    desc: "Custom Email Accounts",
    icons: <CheckCircle />
  },
  {
    id:8,
    desc: "Monthly Performance Reports",
    icons: <CheckCircle />
  },
  {
    id:9,
    desc: "Priority Email Support",
    icons: <CheckCircle />
  },
  {
    id:10,
    desc: "Bi-Weekly Backups",
    icons: <CheckCircle />
  },
  {
    id:11,
    desc: "Social Media Management Tools",
    icons: <CheckCircle />
  },
]


const Card3 = [
  {
    id:1,
    desc: "Everything in Standard Plan",
    icons: <CheckCircle />
  },

  {
    id:2,
    desc: "Custom Web Application Development",
    icons: <CheckCircle />
  },

  {
    id:3,
    desc: "Advanced E-commerce Features",
    icons: <CheckCircle />
  },

  {
    id:4,
    desc: "Unlimited Pages",
    icons: <CheckCircle />
  },
  {
    id:5,
    desc: "Dedicated Account Manager",
    icons: <CheckCircle />
  },
  {
    id:6,
    desc: "24/7 Phone and Email Support",
    icons: <CheckCircle />
  },
  {
    id:7,
    desc: "Weekly Backups",
    icons: <CheckCircle />
  },
  {
    id:8,
    desc: "Advanced Analytics and Reporting",
    icons: <CheckCircle />
  },
  {
    id:9,
    desc: "End to End Integration test suite",
    icons: <CheckCircle />
  },
  {
    id:10,
    desc: "Custom API Integrations",
    icons: <CheckCircle />
  },
  {
    id:11,
    desc: "Personalized SEO Strategy",
    icons: <CheckCircle />
  },
  {
    id:12,
    desc: "Transcend Framer template",
    icons: <CheckCircle />
  },
  {
    id:13,
    desc: "PowerSaas Framer template",
    icons: <CheckCircle />
  },
  {
    id:14,
    desc: "Premium CDN Services",
    icons: <CheckCircle />
  },
  {
    id:15,
    desc: "Ongoing Website Maintenance and Updates",
    icons: <CheckCircle />
  },

]




const Pricing = () => {

  return (
    <>
    <div className=" flex flex-col justify-between items-center text-[#0F172A] dark:text-[#F8FAFC] text-start md:text-center mt-44 mb-44">
    <Button color="primary" className='bg-[#E2E8F0] hover:bg-[#E2E8F0] text-black dark:bg-[#1E293B] dark:hover:bg-[#1E293B] dark:text-white gap-3 rounded-full'> <DollarSign/> <span>Pricing</span> <ArrowRight/> </Button>  
      <DummyInfo  head={"Quality without any compromise"} paragraph={"CI/CD streamlines feature delivery, scalable infrastructure ensures global"} parag={"edge optimization and app monitoring capabilities for peak site performance."} />

      <div className="flex flex-row w-[332px] md:h-12 p-1 bg-slate-100 dark:bg-[#4b576d] rounded-md  justify-between gap-2  ">
        <Button className="w-1/2 bg-white hover:bg-slate-300 text-black dark:bg-[#020817] dark:text-white  ">Monthly</Button>
        <Button className="w-1/2 bg-slate-100 hover:bg-slate-300 text-black dark:bg-[#1E293B] dark:text-[#94A3B8]">Yearly</Button>
      </div>
      
    </div>
 
  {/* *Card Section */} 
 
<div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-8">
<Card className="w-full md:w-[350px]">
  <CardHeader>
    <h3 className="text-xl font-bold">Basic</h3>
    <p className="text-sm text-muted-foreground">Best for Small projects</p>
  </CardHeader>
  <CardContent>
    <div className="text-4xl font-bold">$99</div>
    <Button className="mt-4 w-full hover:bg-black  bg-[#000000] dark:bg-white dark:text-black text-white">Buy now</Button>
    <ul className="mt-4 space-y-2">
      {/* <li>Custom Domain Registration</li>
      <li>Basic Website Hosting</li>
      <li>Standard Security Features</li>
      <li>Mobile-Responsive Design</li>
      <li>Basic SEO Optimization</li>
      <li>Content Management System (CMS)</li>
      <li>Contact Form Integration</li>
      <li>Social Media Integration</li> */}

      {Card1.map((item, idx) => (
        <div key={idx} className='flex flex-row gap-4 mt-2'>
          <P>{item.icons}</P>
          <li>{item.desc}</li>
        </div>
      ))}
    </ul>
  </CardContent>
</Card>
<Card className="w-full md:w-[350px]">
  <CardHeader>
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-bold">Standard</h3>
      <Badge variant="secondary">Most popular</Badge>
    </div>
    <p className="text-sm text-muted-foreground">Best for Large projects</p>
  </CardHeader>
  <CardContent>
    <div className="text-4xl font-bold">$299</div>
    <Button className="mt-4 w-full hover:bg-black  bg-[#000000] dark:bg-white dark:text-black text-white">Buy now</Button>
    <ul className="mt-4 space-y-2">
    {Card2.map((item, idx) => (
        <div key={idx} className='flex flex-row gap-4 mt-2'>
          <P>{item.icons}</P>
          <li>{item.desc}</li>
        </div>
      ))}
    </ul>
  </CardContent>
</Card>
<Card className="w-full md:w-[350px]">
  <CardHeader>
    <h3 className="text-xl font-bold">Premium</h3>
    <p className="text-sm text-muted-foreground">Best for organization</p>
  </CardHeader>
  <CardContent>
    <div className="text-4xl font-bold">$399</div>
    <Button className="mt-4 w-full hover:bg-black  bg-[#000000] dark:bg-white dark:text-black text-white">Buy now</Button>
    <ul className="mt-4 space-y-2">
    {Card3.map((item, idx) => (
        <div key={idx} className='flex flex-row gap-4 mt-2'>
          <P>{item.icons}</P>
          <li>{item.desc}</li>
        </div>
      ))}
    </ul>
  </CardContent>
</Card>
</div>

    </>
  )
 }

export default Pricing




