import { Button } from '../ui/button';
import PriceCard from './PriceCard';

function Prices() {
  const basicPrice = [
    'Custom Domain Registration',
    'Basic Website Hosting',
    'Standard Security Features',
    'Mobile-Responsive Design',
    'Basic SEO Optimization',
    'Content Management System (CMS)',
    'Contact Form Integration',
    'Social Media Integration',
  ];
  const standartPrice = [
    'Everything in Basic Plan',
    'Advanced Security Features',
    'Enhanced SEO Optimization',
    'Blog Setup and Management',
    'E-commerce Integration',
    'Up to 10 Pages',
    'Custom Email Accounts',
    'Monthly Performance Reports',
    'Priority Email Support',
    'Bi-Weekly Backups',
    'Social Media Management Tools',
  ];
  const premiumPrice = [
    'Everything in Standard Plan',
    'Custom Web Application Development',
    'Advanced E-commerce Features',
    'Unlimited Pages',
    'Dedicated Account Manager',
    '24/7 Phone and Email Support',
    'Weekly Backups',
    'Advanced Analytics and Reporting',
    'End to End Integration test suite',
    'Custom API Integrations',
    'Personalized SEO Strategy',
    'Transcend Framer template ↗',
    'PowerSaas Framer template ↗',
    'Personalized SEO Strategy',
    'Premium CDN Services',
    'Ongoing Website Maintenance and Updates',
  ];
  return (
    <div className="flex flex-col items-center py-24">
      <div>
        <Button className="mx-auto max-w-md !bg-[#F1F5F9] h-auto space-x-1 rounded-full py-2 px-3 text-black border border-[#E2E8F0] dark:text-neutral-400/50">
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 1.3335V14.6668M7.83333 3.3335H2.83333C2.21449 3.3335 1.621 3.57933 1.18342 4.01691C0.745833 4.4545 0.5 5.04799 0.5 5.66683C0.5 6.28567 0.745833 6.87916 1.18342 7.31674C1.621 7.75433 2.21449 8.00016 2.83333 8.00016H6.16667C6.78551 8.00016 7.379 8.246 7.81658 8.68358C8.25417 9.12116 8.5 9.71466 8.5 10.3335C8.5 10.9523 8.25417 11.5458 7.81658 11.9834C7.379 12.421 6.78551 12.6668 6.16667 12.6668H0.5"
              stroke="#020817"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="text-sm">Pricing </span>
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
          Quality without any compromise
        </h1>
      </div>
      <div className="mb-8">
        <p className="text-xl text-center font-normal text-[#64748B] max-w-[728px]">
          CI/CD streamlines feature delivery, scalable infrastructure ensures
          global edge optimization and app monitoring capabilities for peak site
          performance.
        </p>
      </div>
      <div className="bg-[#F1F5F9] p-1 rounded-md mb-8 mt-4">
        <Button className="!bg-black rounded-sm w-40">Monthly</Button>
        <Button variant="ghost" className="text-[#64748B] rounded-sm w-40">
          Yearly
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-x-6 max-w-full">
        <PriceCard
          title="Basic"
          label="Best for Small projects"
          price="99"
          list={basicPrice}
        />
        <PriceCard
          title="Standard"
          popular
          label="Best for Large projects"
          price="299"
          list={standartPrice}
        />
        <PriceCard
          title="Premium"
          label="Best for organization"
          price="399"
          list={premiumPrice}
        />
      </div>
    </div>
  );
}
export default Prices;
