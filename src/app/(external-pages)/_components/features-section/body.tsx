import img1 from '../../public/Search image dark.png';
import img2 from '../../public/Share image dark.png';
import img3 from '../../public/Text image dark.png';
import img4 from '../../public/Calander image dark.png';
import img5 from '../../public/Globe image dark.png';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

const featureCardDetails = [
  {
    imageSrc: img1,
    imageAlt: 'search',
    header: 'Save your files',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    imageSrc: img2,
    imageAlt: 'share',
    header: 'Sit Amet Consectetur',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do.',
  },
  {
    imageSrc: img3,
    imageAlt: 'text',
    header: 'Adipiscing Elit Sed',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur',
  },
  {
    imageSrc: img4,
    imageAlt: 'calender',
    header: 'Eiusmod Tempor Incididunt',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do',
  },
  {
    imageSrc: img5,
    imageAlt: 'globe',
    header: 'Magna Aliqua Ut',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed doLorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export function FeaturesGrid() {
  return (
    <BentoGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {featureCardDetails.slice(0, 2).map((item, i) => (
        <BentoGridItem
          key={i}
          description={item.description}
          header={item.header}
          imgSrc={item.imageSrc}
          imgAlt={item.imageAlt}
          className="col-span-1 max-w-[540px]"
        />
      ))}
      <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {featureCardDetails.slice(2).map((item, i) => (
          <BentoGridItem
            key={i + 2}
            description={item.description}
            header={item.header}
            imgSrc={item.imageSrc}
            imgAlt={item.imageAlt}
            className="col-span-1 max-w-[540px] sm:max-w-[360px]"
          />
        ))}
      </div>
    </BentoGrid>
  );
}
