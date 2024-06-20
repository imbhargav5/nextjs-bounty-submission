import React from 'react'
import DummyInfo from '../DummyInfo/DummyInfo'
import { AccordionFAQ } from '../AccordionFAQ/AccordionDemoFAQ'
import { QuestionMarkIcon } from '@radix-ui/react-icons'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

const FAQ = () => {
  return (
    <>
     <div className='flex flex-col justify-center text-center items-center'>
     <Button color="primary" className='bg-[#E2E8F0] hover:bg-[#E2E8F0] text-black dark:bg-[#1E293B] dark:hover:bg-[#1E293B] dark:text-white gap-3 rounded-full'> <QuestionMarkIcon /> <span>FAQ</span> <ArrowRight/> </Button>  
      <DummyInfo head={"Frequently asked questions"} paragraph={"Get detailed answers to common inquiries. Enhance your understanding of our"}  parag={"offerings and policies."}/>
      <AccordionFAQ />
     </div>
    </>
  )
}

export default FAQ