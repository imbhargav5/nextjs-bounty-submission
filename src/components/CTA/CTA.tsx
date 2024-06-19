import React from 'react'
import DummyInfo from '../DummyInfo/DummyInfo'
import { LoginCTAButton } from '../NavigationMenu/ExternalNavbar/LoginCTAButton'
import { Button } from '../ui/button'
import { Mail } from 'lucide-react'

const CTA = () => {
  return (
    <> 
    <div className="md:mt-28 flex flex-col justify-center items-center text-center mb-10 md:mb-4">
      <DummyInfo  head={"Ready to move with Ultimate?"} paragraph={"Automated CI/CD streamlines feature delivery, scalable infrastructure ensures global edge"} parag={"optimization and app monitoring capabilities for peak site performance."}/>
      <Button className="bg-black hover:bg-black dark:bg-white dark:text-black" >Get Ready </Button>
    </div>
    </>
  )
}

export default CTA