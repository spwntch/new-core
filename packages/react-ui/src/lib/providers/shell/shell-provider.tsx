import { PropsWithChildren } from 'react';
import { IBrand, INavItem } from '../../types';
import { AuthProvider, IAuthContext } from './auth-provider';
import { BrandProvider } from './brand-provider';
import { NavProvider } from './nav-provider';
import { ThemeProvider } from './theme-provider';
// import { AuthBackends } from './auth-backend-provider';

export interface IShellProviderProps {
  // authBackendProvider?: AuthBackends;
  defaultTheme?: 'light' | 'dark' | 'system';
  brand?: IBrand;
  navItems?: INavItem[];
  auth?: IAuthContext;
}

export const ShellProvider = ({
  // authBackendProvider,
  defaultTheme = 'system',
  brand,
  navItems,
  children,
}: IShellProviderProps & PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={defaultTheme}
      enableSystem
      disableTransitionOnChange
    >
      <BrandProvider brand={brand}>
        <NavProvider navItems={navItems}>
          <AuthProvider>{children}</AuthProvider>
        </NavProvider>
      </BrandProvider>
    </ThemeProvider>
  );
};
