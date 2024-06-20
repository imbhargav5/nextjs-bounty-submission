import { cn } from '@/lib/utils';
import Marquee from '@/components/magicui/marquee';
import Image from 'next/image';

const reviews = [
  {
    name: 'User name',
    username: '@Ro_han',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat.',
    img: '/assets/Avatar.svg',
  },
  {
    name: 'User name',
    username: '@Ro_han',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat.',
    img: '/assets/Avatar.svg',
  },
  {
    name: 'User name',
    username: '@Ro_han',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat.',
    img: '/assets/Avatar.svg',
  },
  {
    name: 'User name',
    username: '@Ro_han',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat.',
    img: '/assets/Avatar.svg',
  },
  {
    name: 'User name',
    username: '@Ro_han',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat.',
    img: '/assets/Avatar.svg',
  },
  {
    name: 'User name',
    username: '@Ro_han',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea consequat.',
    img: '/assets/Avatar.svg',
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
        'relative w-64 cursor-pointer overflow-hidden rounded-xl  p-4',
        // light styles
        'bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt="profile-picture"
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="flex gap-x-2 items-center text-sm font-medium dark:text-white">
            {name}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00001 7.9999L7.33334 9.33324L10 6.66657M2.56667 5.74657C2.46937 5.30825 2.48431 4.85246 2.61011 4.42146C2.73591 3.99046 2.9685 3.5982 3.28632 3.28105C3.60413 2.9639 3.99688 2.73213 4.42814 2.60723C4.85941 2.48233 5.31523 2.46835 5.75334 2.56657C5.99448 2.18944 6.32668 1.87907 6.71931 1.66409C7.11194 1.44911 7.55237 1.33643 8.00001 1.33643C8.44764 1.33643 8.88807 1.44911 9.28071 1.66409C9.67334 1.87907 10.0055 2.18944 10.2467 2.56657C10.6855 2.46792 11.1421 2.48184 11.574 2.60704C12.006 2.73225 12.3992 2.96466 12.7172 3.28267C13.0352 3.60068 13.2677 3.99395 13.3929 4.4259C13.5181 4.85786 13.532 5.31446 13.4333 5.75324C13.8105 5.99437 14.1208 6.32657 14.3358 6.7192C14.5508 7.11183 14.6635 7.55227 14.6635 7.9999C14.6635 8.44754 14.5508 8.88797 14.3358 9.2806C14.1208 9.67323 13.8105 10.0054 13.4333 10.2466C13.5316 10.6847 13.5176 11.1405 13.3927 11.5718C13.2678 12.003 13.036 12.3958 12.7189 12.7136C12.4017 13.0314 12.0094 13.264 11.5784 13.3898C11.1474 13.5156 10.6917 13.5305 10.2533 13.4332C10.0125 13.8118 9.68006 14.1235 9.28676 14.3394C8.89346 14.5554 8.45202 14.6686 8.00334 14.6686C7.55466 14.6686 7.11322 14.5554 6.71992 14.3394C6.32662 14.1235 5.99417 13.8118 5.75334 13.4332C5.31523 13.5315 4.85941 13.5175 4.42814 13.3926C3.99688 13.2677 3.60413 13.0359 3.28632 12.7188C2.9685 12.4016 2.73591 12.0093 2.61011 11.5783C2.48431 11.1473 2.46937 10.6916 2.56667 10.2532C2.18664 10.0127 1.87362 9.68002 1.65671 9.28605C1.4398 8.89207 1.32605 8.44964 1.32605 7.9999C1.32605 7.55016 1.4398 7.10773 1.65671 6.71376C1.87362 6.31979 2.18664 5.98707 2.56667 5.74657Z"
                stroke="#020817"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Reviews = () => {
  return (
    <div className="flex flex-col items-center bg-[#F1F5F9] py-24">
      <div className="my-2">
        <h1 className="text-4xl font-semibold">Don't take our word for it</h1>
      </div>
      <div>
        <p className="text-xl text-center font-normal text-[#64748B] max-w-[728px]">
          Hear what our satisfied customers have to say about Nextbase{' '}
        </p>
      </div>
      <div className="!bg-[#F1F5F9] mx-10 relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background pt-20">
        <div className="!bg-[#F1F5F9] mx-10 relative flex h-full max-w-[80%] flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
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
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#F1F5F9]  dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#F1F5F9] dark:from-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
