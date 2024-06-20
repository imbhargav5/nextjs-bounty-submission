import { Button } from '../ui/button';
import Image from 'next/image';
import HeroImage from '@public/assets/hero-image.jpg';

function Hero() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-28">
        <Button className="mx-auto max-w-md !bg-[#F1F5F9] h-auto space-x-1 rounded-full py-2 px-3 text-black border border-[#E2E8F0] dark:text-neutral-400/50">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33333 2V4.66667M12.6667 11.3333V14M2 3.33333H4.66667M11.3333 12.6667H14M8 2L6.72533 5.87533C6.6601 6.07367 6.5492 6.25392 6.40156 6.40156C6.25392 6.5492 6.07367 6.6601 5.87533 6.72533L2 8L5.87533 9.27467C6.07367 9.3399 6.25392 9.4508 6.40156 9.59844C6.5492 9.74608 6.6601 9.92633 6.72533 10.1247L8 14L9.27467 10.1247C9.3399 9.92633 9.4508 9.74608 9.59844 9.59844C9.74608 9.4508 9.92633 9.3399 10.1247 9.27467L14 8L10.1247 6.72533C9.92633 6.6601 9.74608 6.5492 9.59844 6.40156C9.4508 6.25392 9.3399 6.07367 9.27467 5.87533L8 2Z"
              stroke="#020817"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="text-sm">Introducing </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_503_107)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.68951 3.35623C8.89779 3.14794 9.23548 3.14794 9.44375 3.35623L13.7105 7.6229C13.9187 7.83117 13.9187 8.16886 13.7105 8.37713L9.44375 12.6439C9.23548 12.8521 8.89779 12.8521 8.68951 12.6439C8.48123 12.4355 8.48123 12.0978 8.68951 11.8895L12.0457 8.53335H2.66663C2.37208 8.53335 2.1333 8.29456 2.1333 8.00001C2.1333 7.70547 2.37208 7.46668 2.66663 7.46668H12.0457L8.68951 4.11047C8.48123 3.90219 8.48123 3.56451 8.68951 3.35623Z"
                fill="#0F172A"
              />
            </g>
            <defs>
              <clipPath id="clip0_503_107">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Button>
      </div>
      <div className="mt-4">
        <h1 className="text-5xl leading-9 font-semibold">
          Nextbase Ultimate Landing Page
        </h1>
      </div>
      <div className="text-center max-w-[945px] mt-6">
        <p className="text-xl font-normal text-[#64748B] ">
          Welcome to Nextbase Ultimate Landing Page: Your Gateway to Innovation.
          Discover the Future of Excellence and Elevate Your Experience.
        </p>
      </div>
      <div className="space-x-3 mt-9">
        <Button className="!bg-black text-white w-[200px] space-x-2">
          <span className="text-sm">Log in</span>{' '}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33337 7.99998H12.6667M12.6667 7.99998L8.00004 3.33331M12.6667 7.99998L8.00004 12.6666"
              stroke="#F8FAFC"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>
        <Button className="!bg-[#F1F5F9] text-black w-[200px] space-x-2">
          <span className="text-sm">Learn more</span>{' '}
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.41092 3.70886L7.41094 3.70884C7.42435 3.69627 7.44544 3.69693 7.45805 3.71037C7.45805 3.71037 7.45805 3.71037 7.45805 3.71037L11.458 7.97704L11.8228 7.63507L11.458 7.97704C11.47 7.98984 11.47 8.0098 11.458 8.02263C11.458 8.02264 11.458 8.02264 11.458 8.02264L7.45805 12.2893L7.45802 12.2893C7.44543 12.3027 7.42439 12.3034 7.41097 12.2908L7.41096 12.2908C7.39744 12.2781 7.39688 12.2571 7.40936 12.2438L7.40941 12.2437L11.0674 8.3418L11.388 7.99983L11.0674 7.65786L7.40941 3.75597L7.40941 3.75596C7.39681 3.74253 7.3975 3.72144 7.41092 3.70886Z"
              fill="#020817"
              stroke="#0F172A"
            />
          </svg>
        </Button>
      </div>
      <div className="mt-16 mb-24">
        <Image src={HeroImage} width={1104} height={514} alt="hero-image" />
      </div>
    </div>
  );
}
export default Hero;
