import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  StackIcon,
} from '@radix-ui/react-icons';
import { FacebookIcon } from 'lucide-react';
import Image from 'next/image';
import XLogoLight from '@public/logos/x-logo-white.png';
import XLogoDark from '@public/logos/x-logo-white.png';
import { Button } from '@/components/ui/button';

export function SocialHandles() {
  return (
    <div className="flex gap-6 items-center opacity-75">
      <Button variant={'ghost'} className="p-0">
        <FacebookIcon className="w-5 h-5" />
      </Button>
      <Button variant={'ghost'} className="p-0">
        <InstagramLogoIcon className="w-5 h-5" />
      </Button>
      <Button variant={'ghost'} className="p-0">
        <Image src={XLogoLight} alt="xlogo" className="w-4 h-4 dark:hidden" />
        <Image
          src={XLogoDark}
          alt="xlogo"
          className="w-4 h-4 hidden dark:block"
        />
      </Button>
      <Button variant={'ghost'} className="p-0">
        <GitHubLogoIcon className="w-5 h-5" />
      </Button>
      <Button variant={'ghost'} className="p-0">
        <StackIcon className="w-5 h-5" />
      </Button>
    </div>
  );
}
