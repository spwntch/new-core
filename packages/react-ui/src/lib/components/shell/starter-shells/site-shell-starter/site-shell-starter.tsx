import { PropsWithChildren } from 'react';
import { cn } from '../../../../utils';
import { RegularFooter, UnderConstructionFooter } from '../../footer';
import { DesktopTopNavbar } from '../../nav';

export interface SiteShellProps {
  navbar: {
    floating?: boolean;
    logoHeight?: number;
    alignment?: 'start' | 'center' | 'end';
    disableThemeToggle?: boolean;
    className?: string;
  };
  githubUrl?: string;
  hideShell?: boolean;
  underContruction?: boolean;
  onNavbarLinkTo: (href: string) => void;
}

export const SiteShellStarter = ({
  navbar,
  githubUrl,
  hideShell,
  underContruction,
  onNavbarLinkTo,
  children,
}: SiteShellProps & PropsWithChildren) => {
  return (
    <>
      <DesktopTopNavbar
        hideToolbar={hideShell}
        floating={navbar.floating}
        className={cn(
          navbar.floating ? 'bg-transparent w-full' : 'bg-background',
          navbar?.className
        )}
        navAlignment={navbar?.alignment}
        logoHeight={navbar?.logoHeight}
        disableThemeToggle={navbar?.disableThemeToggle}
        githubUrl={githubUrl}
        onLinkTo={onNavbarLinkTo}
      />

      <main className={cn(navbar.floating && 'relative -top-[100px]')}>
        {children}
      </main>
      {!hideShell &&
        (underContruction ? <UnderConstructionFooter /> : <RegularFooter />)}
    </>
  );
};

export default SiteShellStarter;
