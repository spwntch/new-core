import { cn } from '../../../../utils';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../shadcn-ui';

export const ThemeToggleButton: React.FC<{ className?: string }> = ({
  className,
}) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={className}>
          <Sun
            className={cn(
              'h-[1.2rem] w-[1.2rem] transition-all',
              'dark:hidden'
            )}
          />
          <Moon
            className={cn(
              'h-[1.2rem] w-[1.2rem] transition-all',
              'hidden dark:block'
            )}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggleButton;
