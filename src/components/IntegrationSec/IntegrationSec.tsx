import React from 'react';
import DummyInfo from '../DummyInfo/DummyInfo';
import { OrbitingCirclesDemo } from '../OrbitingCirclesDemo/OrbitingCirclesDemo';
import { Button } from '../ui/button';
import { ArrowRight, BoxesIcon, Sparkle } from 'lucide-react';

const IntegrationSec: React.FC = () => {
  return (
    <> 
      <div className="mb-44 flex flex-col justify-center text-center items-center">
      <Button color="primary" className='bg-[#E2E8F0] hover:bg-[#E2E8F0] text-black dark:bg-[#1E293B] dark:hover:bg-[#1E293B] dark:text-white gap-3 rounded-full'> <BoxesIcon/> <span>Integration</span> <ArrowRight/> </Button> 
      <DummyInfo 
        head="Master Integration Like Pros" 
        paragraph={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod`} 
        parag="tempor incididunt ut labore et dolore magna aliqua. Quis ipsum"
        
      />
      <OrbitingCirclesDemo/>
      </div>
     
    </>
  );
}

export default IntegrationSec;