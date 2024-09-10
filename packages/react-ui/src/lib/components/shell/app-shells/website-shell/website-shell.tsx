import { PropsWithChildren } from 'react';
import { cn } from '../../../../utils';
import { RegularFooter, UnderConstructionFooter } from '../../footer';
import { DesktopTopNavbar } from '../../nav';

export interface WebsiteShellProps {
  navbar: {
    floating?: boolean;
    logoHeight?: number;
    alignment?: 'start' | 'center' | 'end';
    disableThemeToggle?: boolean;
    className?: string;
  };
  githubUrl?: string;
  hideShell?: boolean;
  cta?: {
    label: string;
    href: string;
  };
  underContruction?: boolean;
  onLinkTo: (href: string) => void;
}

export const WebsiteShell = ({
  navbar,
  githubUrl,
  hideShell,
  underContruction,
  cta,
  onLinkTo,
  children,
}: WebsiteShellProps & PropsWithChildren) => {
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
        cta={cta}
        onLinkTo={onLinkTo}
      />

      <main className={cn(navbar.floating && 'relative -top-[100px]')}>
        {children}
      </main>
      {!hideShell &&
        (underContruction ? <UnderConstructionFooter /> : <RegularFooter />)}
    </>
  );
};

export default WebsiteShell;
