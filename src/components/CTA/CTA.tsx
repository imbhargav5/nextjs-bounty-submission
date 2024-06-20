import { Button } from '../ui/button';

function CTA() {
  return (
    <div className="flex justify-center pt-12 ">
      <div className="max-w-[728px] text-center">
        <div>
          <Button className="mx-auto max-w-md !bg-[#F1F5F9] h-auto space-x-1 rounded-full py-2 px-3 text-black border border-[#E2E8F0] dark:text-neutral-400/50">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1354_1387)">
                <path
                  d="M6.66671 1.3335L14 9.3335H2.00004L6.66671 1.3335ZM6.66671 1.3335V12.0002M14.6667 12.0002H1.33337C1.33337 12.7074 1.61433 13.3857 2.11442 13.8858C2.61452 14.3859 3.2928 14.6668 4.00004 14.6668H12C12.7073 14.6668 13.3856 14.3859 13.8857 13.8858C14.3858 13.3857 14.6667 12.7074 14.6667 12.0002Z"
                  stroke="#020817"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1354_1387">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span className="text-sm">Start your journey</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_503_107)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.68951 3.35623C8.89779 3.14794 9.23548 3.14794 9.44375 3.35623L13.7105 7.6229C13.9187 7.83117 13.9187 8.16886 13.7105 8.37713L9.44375 12.6439C9.23548 12.8521 8.89779 12.8521 8.68951 12.6439C8.48123 12.4355 8.48123 12.0978 8.68951 11.8895L12.0457 8.53335H2.66663C2.37208 8.53335 2.1333 8.29456 2.1333 8.00001C2.1333 7.70547 2.37208 7.46668 2.66663 7.46668H12.0457L8.68951 4.11047C8.48123 3.90219 8.48123 3.56451 8.68951 3.35623Z"
                  fill="#0F172A"
                />
              </g>
              <defs>
                <clipPath id="clip0_503_107">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </div>
        <div className="my-4">
          <h1 className="text-4xl font-semibold">
            Ready to move with Ultimate?
          </h1>
        </div>
        <div>
          <p className="text-xl text-center font-normal text-[#64748B] max-w-[728px]">
            Automated CI/CD streamlines feature delivery, scalable
            infrastructure ensures global edge optimization and app monitoring
            capabilities for peak site performance.
          </p>
        </div>
        <div className="mt-6 mb-28">
          <Button className="!bg-black w-36">Get Started</Button>
        </div>
      </div>
    </div>
  );
}
export default CTA;
