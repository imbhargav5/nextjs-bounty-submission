import { cn } from '@/utils/cn';
import { ComponentPropsWithoutRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

export function P({
  className,
  asChild,
  ...rest
}: ComponentPropsWithoutRef<'p'> & {
  asChild?: boolean;
}) {
  const classNames = cn('leading-7', '&:not(:first-child):mt-6', className);
  const Component = asChild ? Slot : 'p';
  return <Component className={classNames} {...rest}></Component>;
}
