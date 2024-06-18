import React from 'react';
import DummyInfo from '../DummyInfo/DummyInfo';
import { OrbitingCirclesDemo } from '../OrbitingCirclesDemo/OrbitingCirclesDemo';

const IntegrationSec: React.FC = () => {
  return (
    <> 
      <div className="mb-44 flex flex-col justify-center text-center items-center">
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