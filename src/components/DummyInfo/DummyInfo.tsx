import React from 'react';
import ShinyButton from '../magicui/shiny-button';
import { H1 } from '../ui/Typography/H1';
import { P } from '../ui/Typography/P';

interface DummyInfoProps {
  head: string;
  paragraph: string;
  parag: string
}

const DummyInfo: React.FC<DummyInfoProps> = ({ head, paragraph, parag}) => {
  return (
    <div className="text-start md:text-center p-6 md:p-0">
      <ShinyButton text={"Integration"} />
      <H1 className='text-2xl md:text-4xl leading-10 mt-2 md:mt-4'>{head}</H1>
      <P className='text-left md:text-center para paraB md:text-xl font-normal leading-7 mt-2 md:mt-4'>{paragraph}</P>
      <P className='text-left md:text-center para paraB md:text-xl font-normal leading-7 mt-2 md:mt-4 mb-6'>{parag}</P>

    </div>
  );
}

export default DummyInfo;
