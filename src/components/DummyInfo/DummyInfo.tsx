import React from 'react';
import ShinyButton from '../magicui/shiny-button';
import { H1 } from '../ui/Typography/H1';
import { P } from '../ui/Typography/P';
import { Button } from '../ui/button';
import { ArrowRight, Sparkle } from 'lucide-react';

interface DummyInfoProps {
  head: string;
  paragraph: string;
  parag: string
}

const DummyInfo: React.FC<DummyInfoProps> = ({ head, paragraph, parag}) => {
  return (
    <div className="text-start md:text-center p-6 md:p-0">
        {/* <Button color="primary" className='bg-[#E2E8F0] hover:bg-[#E2E8F0] text-black dark:bg-[#1E293B] dark:hover:bg-[#1E293B] dark:text-white gap-3 rounded-full'> <Sparkle /> <span>Introducing</span> <ArrowRight/> </Button>  */}
      <H1 className='text-2xl md:text-4xl leading-10 mt-2 md:mt-4'>{head}</H1>
      <P className='text-left md:text-center para paraB md:text-xl font-normal leading-7 mt-2 md:mt-4'>{paragraph}</P>
      <P className='text-left md:text-center para paraB md:text-xl font-normal leading-7 mt-2 md:mt-4 mb-6'>{parag}</P>

    </div>
  );
}

export default DummyInfo;
