import { cn } from '@/lib/utils';
import Marquee from '@/components/magicui/marquee';
import { BadgeCheck } from 'lucide-react';

const reviews = [
  {
    name: 'User name',
    username: '@Ro_han',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat.',
    img: '/images/testimonialUser.jpeg',
  },
  {
    name: 'User name',
    username: '@Ro_han',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat.',
    img: '/images/testimonialUser.jpeg',
  },
  {
    name: 'User name',
    username: '@Ro_han',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat.',
    img: '/images/testimonialUser.jpeg',
  },
  {
    name: 'User name',
    username: '@Ro_han',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat.',
    img: '/images/testimonialUser.jpeg',
  },
  {
    name: 'User name',
    username: '@Ro_han',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat.',
    img: '/images/testimonialUser.jpeg',
  },
  {
    name: 'User name',
    username: '@Ro_han',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat.',
    img: '/images/testimonialUser.jpeg',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

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
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 bg-background',
        // light styles
        'border-gray-950/[.1]  hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1]  dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white flex gap-2">
            {name}
            <BadgeCheck className=" text-sm" width={16} height={16} />
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export const ScrollingTestimonials = () => {
  return (
    <div className="relative flex h-full w-full flex-col gap-6 items-center justify-center overflow-hidden rounded-lg   bg-muted py-20 ">
      <Marquee pauseOnHover className="[--duration:20s] ">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] ">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-muted "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-muted "></div>
    </div>
  );
};
