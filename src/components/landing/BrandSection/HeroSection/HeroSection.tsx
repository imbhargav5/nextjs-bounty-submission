import React from 'react';
import { Button } from '../../../ui/button';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import SectionTitle from '../../../_common/SectionTitle';
import SectionDescription from '../../../_common/SectionDescription';
import SectionLink from '../../../_common/SectionLink';
import HeroImage from '@public/images/hero-image.png';

const HeroSection = () => {
  return (
    <section className=" md:container flex flex-col gap-16  px-4 md:pt-16 pt-[10px] pb-12 md:pb-24  ">
      <div
        id="text-div"
        className=" flex flex-col gap-8 items-center md:pt-12 pt-8 "
      >
        <div className=" flex flex-col md:items-center">
          <div className="pb-4 flex md:justify-center justify-start">
            <SectionLink icon={Sparkles} href="/">
              Introducing
            </SectionLink>
          </div>
          <SectionTitle hero value="Nextbase Ultimate Landing Page" />
        </div>

        <div>
          <SectionDescription value="Welcome to Nextbase Ultimate Landing Page: Your Gateway to Innovation. Discover the Future of Excellence and Elevate Your Experience." />
        </div>

        <div className="  max-w-md w-full flex md:flex-row flex-col  gap-3 pt-3">
          <Button
            variant="default"
            className="  py-2 px-4  w-full flex flex-grow md:flex-grow-0 gap-2"
          >
            Login
            <ArrowRight />
          </Button>
          <Button
            variant="secondary"
            size="default"
            className="  py-2 px-4  w-full flex flex-grow md:flex-grow-0 gap-2 "
          >
            Learn More
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div className=" ">
        <Image
          alt="hero-image"
          src={HeroImage}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: '100%',
            height: '514px',
            objectFit: 'cover',
            objectPosition: 'center',
            borderRadius: '8px',
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
