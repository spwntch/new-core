'use client';
import {
  IShellProviderProps,
  ShellProvider,
  WebsiteShell,
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
  hideShellPaths?: string[];
  underContruction?: boolean;
  githubUrl?: string;
  cta?: {
    label: string;
    href: string;
  };
}

export const SiteShell = ({
  brand,
  navItems,
  underContruction,
  navbar,
  hideShellPaths,
  githubUrl,
  cta,
  children,
}: SiteShellProps & PropsWithChildren) => {
  const router = useRouter();
  const pathname = usePathname();
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
      <WebsiteShell
        navbar={navbar}
        underContruction={underContruction}
        githubUrl={githubUrl}
        onLinkTo={handleLinkTo}
        hideShell={hideShellPaths?.includes(pathname)}
        cta={cta}
      >
        {children}
      </WebsiteShell>
    </ShellProvider>
  );
};
