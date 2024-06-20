import React from 'react'

const Chip = () => {
  return (
    <>
     <button className="flex flex-row justify-between py-2  px-6 rounded-3xl bg-[#F1F5F9] border dark:bg-[#1E293B] items-center gap-3 hover:bg-[#F1F5F9]/90 hover:dark:bg-[#162234] ">
          <svg
            className='hidden dark:block'
            width="18"
            height="18"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.33333 1V3.66667M11.6667 10.3333V13M1 2.33333H3.66667M10.3333 11.6667H13M7 1L5.72533 4.87533C5.6601 5.07367 5.5492 5.25392 5.40156 5.40156C5.25392 5.5492 5.07367 5.6601 4.87533 5.72533L1 7L4.87533 8.27467C5.07367 8.3399 5.25392 8.4508 5.40156 8.59844C5.5492 8.74608 5.6601 8.92633 5.72533 9.12467L7 13L8.27467 9.12467C8.3399 8.92633 8.4508 8.74608 8.59844 8.59844C8.74608 8.4508 8.92633 8.3399 9.12467 8.27467L13 7L9.12467 5.72533C8.92633 5.6601 8.74608 5.5492 8.59844 5.40156C8.4508 5.25392 8.3399 5.07367 8.27467 4.87533L7 1Z"
              stroke="#F8FAFC"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg className='block dark:hidden' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.33333 1V3.66667M11.6667 10.3333V13M1 2.33333H3.66667M10.3333 11.6667H13M7 1L5.72533 4.87533C5.6601 5.07367 5.5492 5.25392 5.40156 5.40156C5.25392 5.5492 5.07367 5.6601 4.87533 5.72533L1 7L4.87533 8.27467C5.07367 8.3399 5.25392 8.4508 5.40156 8.59844C5.5492 8.74608 5.6601 8.92633 5.72533 9.12467L7 13L8.27467 9.12467C8.3399 8.92633 8.4508 8.74608 8.59844 8.59844C8.74608 8.4508 8.92633 8.3399 9.12467 8.27467L13 7L9.12467 5.72533C8.92633 5.6601 8.74608 5.5492 8.59844 5.40156C8.4508 5.25392 8.3399 5.07367 8.27467 4.87533L7 1Z" stroke="#020817" stroke-linecap="round" stroke-linejoin="round" />
          </svg>


          <span>introducing</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4   "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
    </>
  )
}

export default Chip