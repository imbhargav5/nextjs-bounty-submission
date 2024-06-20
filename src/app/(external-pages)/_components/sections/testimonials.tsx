import Image from 'next/image';
import { reviews } from '../../_data/reviews';
import Marquee from '@/components/magicui/marquee';
import TitleBlock from '../title_block';
import { cn } from '@/utils/cn';

export default function Testimonials() {
  const firstRow = reviews.slice(0, 3);
  const secondRow = reviews.slice(3, 6);

  return (
    <section className="bg-secondary py-24 px-6 ">
      <div className="max-w-6xl mx-auto space-y-8">
        <TitleBlock
          title="Don't  take our word for it"
          subtitle="Hear what our satisfied customers have to say about Nextbase"
        />
        <div className="relative flex h-full w-full flex-col  pt-10 items-center justify-center overflow-hidden ">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-secondary "></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-secondary "></div>
        </div>
      </div>
    </section>
  );
}

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        'border-border bg-background hover:bg-accent-foreground hover:text-background',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium ">{name}</figcaption>
          <p className="text-xs font-medium ">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
