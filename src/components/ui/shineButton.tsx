const ShineButton = () => {
    return (
        <button className=" md:w-40 w-full group/button relative inline-flex items-center justify-center overflow-hidden rounded-md dark:bg-white bg-black px-8 py-[10px] text-xs font-normal dark:text-black text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-white-500/30">
            <span className="text-sm">Log in</span> &nbsp;&nbsp;&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4   ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>

            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20" />
            </div>
        </button>
    )
}

export default ShineButton