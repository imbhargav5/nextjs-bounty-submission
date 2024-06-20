import Image from 'next/image';
import { logos } from '../../_data/logos';
import Marquee from '@/components/magicui/marquee';

export default function LogoCloud() {
  return (
    <section className="flex justify-center items-center text-center  max-w-6xl mx-auto overflow-hidden">
      <div className="space-y-2">
        <p className="text-gray-500 text-xl font-semibold">
          Trusted by 150+ Companies
        </p>
        <div className="w-full">
          <div className="mx-auto w-full px-4 md:px-8">
            <div
              className="group relative mt-6 flex gap-6 overflow-hidden p-2"
              style={{
                maskImage:
                  'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
              }}
            >
              <Marquee pauseOnHover>
                {logos.map((logo, key) => (
                  <a href={logo.website} key={key} target="_blank">
                    <Image
                      width={112}
                      height={40}
                      src={logo.url}
                      className=" px-2 invert-[50%] brightness-200 grayscale-[100%] dark:grayscale-0 dark:invert-[50%]  "
                      alt={`${logo.name}`}
                    />
                  </a>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
