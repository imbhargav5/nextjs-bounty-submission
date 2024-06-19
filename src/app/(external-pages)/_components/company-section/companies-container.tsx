import airbnb from '../../public/logos/airbnb.svg';
import google from '../../public/logos/google.svg';
import microsoft from '../../public/logos/microsoft.svg';
import mailchimp from '../../public/logos/mailchimp.svg';
import mashable from '../../public/logos/mashable.svg';
import spotify from '../../public/logos/spotify.svg';
import Image from 'next/image';

const logos = [
  {
    name: 'airbnb',
    url: airbnb,
  },
  {
    name: 'google',
    url: google,
  },
  {
    name: 'microsoft',
    url: microsoft,
  },
  {
    name: 'mailchimp',
    url: mailchimp,
  },
  {
    name: 'mashable',
    url: mashable,
  },
  {
    name: 'spotify',
    url: spotify,
  },
];

export function CompaniesContainer() {
  return (
    <div className="w-full">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative flex overflow-hidden px-10 gap-[72px]"
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
          }}
        >
          {Array(5)
            .fill(null)
            .map((index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-[72px]"
              >
                {logos.map((logo, key) => (
                  <Image
                    key={key}
                    src={logo.url}
                    className="brightness-0 dark:invert opacity-75"
                    alt={`${logo.name}`}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
