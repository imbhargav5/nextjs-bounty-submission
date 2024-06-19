'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Laptop, Moon, MoonIcon, MoonStar, MoonStarIcon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="focus:ring-none hover:bg-transparent focus:ring-0"
      >
        <Button
          variant="ghost"
          size="sm"
          className="h-5 w-5 px-0 text-muted-foreground focus:ring-0"
        >
          <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 hover:text-black dark:scale-0" />
          <MoonStarIcon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:hover:text-white" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark:bg-black">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
