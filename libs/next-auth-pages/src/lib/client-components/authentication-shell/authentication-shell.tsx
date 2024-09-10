'use client';
import { IShellProviderProps, ShellProvider } from '@spwntch/react-ui';
import { PropsWithChildren } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AuthShellProps extends IShellProviderProps {}

export const AuthShell = ({
  brand,
  navItems,
  children,
}: AuthShellProps & PropsWithChildren) => {
  return (
    <ShellProvider brand={brand} defaultTheme="dark">
      <div className="h-screen">{children}</div>
    </ShellProvider>
  );
};
