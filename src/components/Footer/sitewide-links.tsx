import { SitewideLinksCard } from '@/components/Footer/sitewide-links-card';

const cards = [
  {
    cardHeading: 'RESOURCES',
    sites: [
      {
        sitename: 'NextBase',
        url: '',
      },
    ],
  },
  {
    cardHeading: 'FOLLOW US',
    sites: [
      {
        sitename: 'Github',
        url: '',
      },
      {
        sitename: 'Twitter',
        url: '',
      },
    ],
  },
  {
    cardHeading: 'LEGAL',
    sites: [
      {
        sitename: 'Privacy Policy',
        url: '',
      },
      {
        sitename: 'Terms & Conditions',
        url: '',
      },
    ],
  },
];

export function SitewideLinks() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-8 py-6 lg:py-0">
      {cards.map((card, i) => (
        <SitewideLinksCard
          key={i}
          cardHeading={card.cardHeading}
          sites={card.sites}
        />
      ))}
    </section>
  );
}
