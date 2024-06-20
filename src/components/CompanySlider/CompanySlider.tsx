import Image from 'next/image';
import Marquee from '../magicui/marquee';

function CompanySlider() {
  const logos = [
    '/assets/Airbnb.svg',
    '/assets/Google.svg',
    '/assets/Microsoft.svg',
    '/assets/Spotify.svg',
    '/assets/Mailchimp.svg',
    '/assets/Mashable.svg',
  ];
  return (
    <div>
      <div className="text-center">
        <h3 className="texts-[#020817] text-[#6f747f] font-semibold text-2xl">
          Trusted by 150+ companies
        </h3>
      </div>
      <div>
        <div className='relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border-none shadow-none bg-background py-20 before:absolute before:w-[250px] before:h-full before:content-[""] before:z-[2] before:top-0 before:left-0 before:bg-gradient-to-r before:from-white before:to-transparent  after:absolute after:w-[250px] after:h-full after:content-[""] after:z-[2] after:top-0 after:right-0 after:bg-gradient-to-l after:from-white after:to-transparent'>
          <Marquee pauseOnHover className="!shadow-none">
            {logos.map((logo) => (
              <>
                <Image
                  src={logo}
                  width={200}
                  height={200}
                  alt="mic"
                  className="ml-[72px] opacity-65"
                />
              </>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
export default CompanySlider;
