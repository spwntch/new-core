'use client';
import {
  IShellProviderProps,
  ShellProvider,
  SiteShellStarter,
} from '@spwntch/react-ui';
import { usePathname, useRouter } from 'next/navigation';
import { PropsWithChildren } from 'react';

export interface INavBar {
  floating?: boolean;
  classNames?: string;
  logoHeight?: number;
  alignment?: 'start' | 'center' | 'end';
  disableThemeToggle?: boolean;
}

export interface SiteShellProps extends IShellProviderProps {
  navbar: INavBar;
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
  const router = useRouter();
  // const pathname = usePathname();
  const handleLinkTo = (url: string) => {
    router.push(url);
  };

  return (
    <ShellProvider
      brand={brand}
      navItems={navItems}
      // navItems={pathname === '/' ? navItems : undefined}
      defaultTheme="dark"
    >
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

