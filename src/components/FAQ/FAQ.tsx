import React from 'react'
import DummyInfo from '../DummyInfo/DummyInfo'
import { AccordionFAQ } from '../AccordionFAQ/AccordionDemoFAQ'

const FAQ = () => {
  return (
    <>
     <div className='flex flex-col justify-center text-center items-center'>
      <DummyInfo head={"Frequently asked questions"} paragraph={"Get detailed answers to common inquiries. Enhance your understanding of our"}  parag={"offerings and policies."}/>
      <AccordionFAQ />
     </div>
    </>
  )
}

export default FAQ