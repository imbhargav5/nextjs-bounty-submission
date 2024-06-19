import Airbnb from '../icons/Airbnb';
import Google from '../icons/Google';
import Microsoft from '../icons/Microsoft';
import Spotify from '../icons/Spotify';
import MailChimp from '../icons/MailChimp';
import Mashable from '../icons/Mashable';
import Marquee from '../magicui/marquee';

const companies: { name: string; icon: (() => React.JSX.Element) | null }[] = [
  {
    name: 'Google',
    icon: Google,
  },
  {
    name: 'Microsoft',
    icon: Microsoft,
  },
  {
    name: 'Spotify',
    icon: Spotify,
  },
  {
    name: 'airbnb',
    icon: Airbnb,
  },
  {
    name: 'MailChimp',
    icon: MailChimp,
  },
  {
    name: 'Mashable',
    icon: Mashable,
  },
];

const ScrollingCompanies = () => {
  return (
    <div className="relative flex  h-full w-full flex-col  items-center justify-center overflow-hidden rounded-lg  bg-background py-20 ">
      <Marquee
        childrenClassName="md:gap-[72px] md:pl-[72px] gap-6 pl-6"
        pauseOnHover
        className="[--duration:20s]"
      >
        {companies.map((company) => (
          <div
            key={company.name}
            className=" flex justify-center items-center "
          >
            {company.icon !== null && <company.icon />}
            {company.icon === null && <p>{company.name}</p>}
          </div>
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
    </div>
  );
};

export default ScrollingCompanies;
