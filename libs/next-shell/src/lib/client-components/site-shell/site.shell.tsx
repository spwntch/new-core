'use client';
import {
  IShellProviderProps,
  ShellProvider,
  SiteShellStarter,
} from '@spwntch/shadcn-ui';
import { PropsWithChildren } from 'react';

export interface SiteShellProps extends IShellProviderProps {
  navbar: {
    classNames?: string;
    logoHeight?: number;
    alignment?: 'start' | 'center' | 'end';
  };
  underContruction?: boolean;
  githubUrl?: string;
}

export const SiteShell = ({
  brand,
  navItems,
  underContruction,
  navbar,
  githubUrl,
  children,
}: SiteShellProps & PropsWithChildren) => {
  const handleLinkTo = (url: string) => {
    console.log({ url });
  };

  return (
    <ShellProvider brand={brand} navItems={navItems}>
      <SiteShellStarter
        navbar={navbar}
        underContruction={underContruction}
        githubUrl={githubUrl}
        onNavbarLinkTo={handleLinkTo}
      >
        {children}
      </SiteShellStarter>
    </ShellProvider>
  );
};

export default SiteShell;
