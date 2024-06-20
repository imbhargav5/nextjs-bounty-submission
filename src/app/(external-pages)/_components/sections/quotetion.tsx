import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icons from '../icons';

export default function Quotetion() {
  return (
    <section className="p-16 lg:p-24 bg-secondary flex flex-col justify-center items-center  space-y-2">
      <div>
        <Icons.quote />
      </div>
      <h2 className="font-medium text-2xl lg:text-4xl max-w-4xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero.
      </h2>
      <div className="flex gap-3 pt-3 items-center">
        <Avatar className="size-7">
          <AvatarImage src="/images/quote.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-2">
          <p className="text-slate-500 font-medium text-sm">Mark Zuckerburg</p>
          <div className="h-4 w-[2px] bg-slate-400"></div>
          <p className="text-slate-500 font-light text-sm">CEO, Facebook</p>
        </div>
      </div>
    </section>
  );
}
