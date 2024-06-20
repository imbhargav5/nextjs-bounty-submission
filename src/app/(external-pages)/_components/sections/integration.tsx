import { GitForkIcon } from 'lucide-react';
import TitleBlock from '../title_block';
import OrbitingCircles from '@/components/magicui/orbiting-circles';
import Icons from '../icons';
import darkLogo from '@public/logos/nextbase-dark-logo.png';
import lightLogo from '@public/logos/nextbase-light-logo.png';
import Image from 'next/image';

export default function Integration() {
  return (
    <section className="py-16 max-w-6xl flex flex-col justify-center items-center  mx-auto space-y-10 overflow-hidden">
      <div className="px-6">
        <TitleBlock
          icon={<GitForkIcon size={16} />}
          title="Master Integration like pros"
          section="Integration"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum"
        />
      </div>

      <div className="relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden ">
        <span className="pointer-events-none">
          <Image
            src={lightLogo}
            width={80}
            height={80}
            alt="logo"
            className="dark:hidden block "
          />
          <Image
            src={darkLogo}
            width={80}
            height={80}
            alt="logo"
            className="hidden dark:block  "
          />
        </span>

        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={80}
        >
          <Icons.whatsapp />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={80}
        >
          <Icons.notion />
        </OrbitingCircles>

        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          reverse
        >
          <Icons.googleDrive />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          delay={20}
          reverse
        >
          <Icons.gitHub />
        </OrbitingCircles>
      </div>
    </section>
  );
}
