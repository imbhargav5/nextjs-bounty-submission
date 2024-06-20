import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';

function PriceCard({
  title,
  popular = false,
  label,
  price,
  list,
}: {
  title: string;
  popular?: boolean;
  label: string;
  price: string;
  list: string[];
}) {
  return (
    <Card className={`w-[352px] h-fit ${popular && 'bg-[#E2E8F0]'}`}>
      <CardHeader className="pb-4">
        <CardTitle className="flex justify-between items-center">
          <p className="text-xl font-semibold">{title}</p>
          {popular && (
            <Badge className="!bg-black rounded-full text-xs h-5">
              Most popular
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="text-base/7 font-normal !m-0">
          {label}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h1 className="text-4xl font-extrabold mb-4">${price}</h1>
        <Button className="w-full !bg-black">Buy now</Button>
        <Separator className="mt-8 mb-5" />
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-4">
        {list.map((item) => (
          <div className="flex text-sm gap-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-circle-check"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p className="text-sm/4 font-medium">{item}</p>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
}
export default PriceCard;
