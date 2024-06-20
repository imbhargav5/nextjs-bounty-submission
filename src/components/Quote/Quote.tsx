import Image from 'next/image';
import Avatar from '@public/assets/AvatarImage.svg';

function Quote() {
  return (
    <div className="flex flex-col items-center bg-[#F1F5F9] py-24">
      <div>
        <svg
          width="44"
          height="48"
          viewBox="0 0 44 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5851 31.998V18.8617C25.5851 8.72372 32.217 1.85252 41.5524 0.00585938L43.321 3.82892C38.9982 5.45874 36.2199 10.2949 36.2199 14.2246H43.3299V31.998H25.5851ZM0.669922 31.998V18.8617C0.669922 8.72372 7.33199 1.85074 16.6674 0.00585938L18.4378 3.82892C14.1132 5.45874 11.3349 10.2949 11.3349 14.2246H18.4147V31.998H0.669922Z"
            fill="#020817"
          />
        </svg>
      </div>
      <div className="text-center mt-7 mb-6">
        <h1 className="text-4xl leading-[44px] font-medium md:max-w-[995px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero.
        </h1>
      </div>
      <div className="flex space-x-3 items-center text-center">
        <div className="z-10 flex -space-x-4 rtl:space-x-reverse">
          <Image
            className=" rounded-full border-2 border-white dark:border-gray-800"
            src={Avatar}
            width={30}
            height={30}
            alt="Avatar"
          />
        </div>
        <h4 className="text-[#64748B] text-base leading-7 font-medium">
          Mark Zuckerberg
        </h4>
        <span className="h-5 border-x border-[#7a7f88]"></span>
        <p className="text-[#64748B] text-sm font-light">CEO, Facebook</p>
      </div>
    </div>
  );
}
export default Quote;
