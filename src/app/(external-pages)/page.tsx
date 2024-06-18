import FeatureCard from '@/components/FeatureCard/FeatureCard'
import Home from '@/components/Home/Home'
import LogoScroll from '@/components/LogoScroll/LogoScroll'
import React from 'react'

const page = () => {
  return (
    <> 
    <div>
      <Home />
      <LogoScroll />
      <FeatureCard />
    </div>
    </>
  )
}

export default page