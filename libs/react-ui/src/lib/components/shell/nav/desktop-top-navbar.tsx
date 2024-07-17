import { cn } from '../../../utils';
// import { ButtonGroup } from '@spwntch/components';
import React, { forwardRef } from 'react';
// import { GithubButton } from '../../buttons';
import { Logo } from '../brand/logo';

interface IDesktopTopNavbarProps extends React.HTMLAttributes<HTMLElement> {
  classNames?: string;
  logoHeight?: number;
  navAlignment?: 'start' | 'center' | 'end';
  disableThemeToggle?: boolean;
  githubUrl?: string;
  onLinkTo: (href: string) => void;
}

export const DesktopTopNavbar = forwardRef<HTMLElement, IDesktopTopNavbarProps>(
  (
    {
      classNames,
      logoHeight,
      navAlignment,
      disableThemeToggle = false,
      githubUrl,
      onLinkTo,
      ...props
    },
    ref
  ) => {
    return (
      <header
        className={cn('sticky top-0 z-50', classNames)}
        ref={ref}
        {...props}
      >
        <div className="flex p-2 pb-4 items-center">
          <Logo
            height={logoHeight || 36}
            className="cursor-pointer"
            onClick={() => onLinkTo('/')}
          />
          <div className="flex-1">
            <nav
              className={cn(
                'hidden md:flex mx-10',
                navAlignment === 'start'
                  ? 'justify-start'
                  : navAlignment === 'end'
                  ? 'justify-end'
                  : 'justify-center'
              )}
            >
              {/* <NavToolbar onLinkTo={onLinkTo} /> */}
            </nav>
          </div>
          <div>
            {/* <ButtonGroup>
              {!disableThemeToggle && <ThemeToggleButton />}
            </ButtonGroup> */}
          </div>
          <div className="hidden md:block"></div>
          <div className="ml-2">
            {/* {githubUrl && <GithubButton url={githubUrl} />} */}
          </div>
          <div className="block md:hidden">
            {/* <ButtonGroup>
              <MobileNavDrawer onLinkTo={onLinkTo} />
            </ButtonGroup> */}
          </div>
        </div>
      </header>
    );
  }
);

DesktopTopNavbar.displayName = 'DesktopTopNavbar';
