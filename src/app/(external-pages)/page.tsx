import FeatureCard from '@/components/FeatureCard/FeatureCard'
import Home from '@/components/Home/Home'
import IntegrationSec from '@/components/IntegrationSec/IntegrationSec'
import LogoScroll from '@/components/LogoScroll/LogoScroll'
import Quotetion from '@/components/Quotetion/Quotetion'
import Testinomial from '@/components/Testinomial/Testinomial'
import React from 'react'

const page = () => {
  return (
    <> 
    <div>
      <Home />
      <LogoScroll />
      <FeatureCard />
      <Quotetion />
      <IntegrationSec />
      <Testinomial />
    </div>
    </>
  )
}

export default page