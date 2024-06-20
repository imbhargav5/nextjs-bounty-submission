 import Chip from "../ui/Chip";
 export default function Journey() {
    return (
      <div className="w-full min-h-100vh max-h-fit flex flex-col gap-6 mt-20 px-4 mb-14">
        <div className=" w-full  h-fit flex flex-row md:justify-center">
         <Chip/>
        </div>
        <div className=" w-full  h-fit flex flex-row md:justify-center">
          <h1 className=" text-2xl font-medium">Discover Next-Level Features</h1>
        </div>
        <div className=" w-full  h-fit flex flex-row md:justify-center">
          <span className="text-[#94A3B8] leading-8 max-w-[38rem] md:text-center text-left w-fit md:text-lg text-xl font-light">
            Discover the ultimate insights into cutting-edge advancements. Our
            next-level features guide reveals the essentials for staying ahead.
          </span>
        </div>

        <div className="w-full h-fit flex flex-row justify-center">
            <button className="px-8  rounded-lg py-[9px] bg-[#0F172A] dark:bg-white text-white dark:text-black text-xs">Get Started</button>
        </div>
       
      </div>
    );
  }
  