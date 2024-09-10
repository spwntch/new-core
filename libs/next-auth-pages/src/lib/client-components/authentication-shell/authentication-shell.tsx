'use client';
import {
  ApplicationShell,
  IShellProviderProps,
  ShellProvider,
} from '@spwntch/react-ui';
import { PropsWithChildren } from 'react';

export interface AppShellProps extends IShellProviderProps {
  ping?: string;
}

export const AuthShell = ({
  brand,
  navItems,
  children,
}: AppShellProps & PropsWithChildren) => {

  return (
    <ShellProvider
      brand={brand}
      navItems={navItems}
      // navItems={pathname === '/' ? navItems : undefined}
      defaultTheme="dark"
    >
      <div>{children}</div>
    </ShellProvider>
  );
};
