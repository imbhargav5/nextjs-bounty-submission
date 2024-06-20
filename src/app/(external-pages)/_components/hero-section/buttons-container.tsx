import { Button } from '@/components/ui/button';
import { ArrowRightIcon, ChevronRightIcon } from '@radix-ui/react-icons';

export function ButtonsContainer() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 sm:flex-row pt-3">
      <Button
        className="w-full sm:w-[200px] h-[40px] py-2 px-4 hover:bg-tremor-primary hover:opacity-95 bg-tremor-primary text-primary-foreground dark:hover:opacity-95
       dark:bg-tremor-background-muted dark:text-tremor-primary gap-2"
      >
        Log in
        <ArrowRightIcon />
      </Button>
      <Button
        variant={'secondary'}
        className="w-full sm:w-[200px] h-[40px] py-2 px-4 bg-secondary text-secondary-foreground dark:bg-secondary dark:hover:opacity-95 gap-2"
      >
        Learn more
        <ChevronRightIcon />
      </Button>
    </div>
  );
}
