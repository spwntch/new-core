import { Decorator } from '@storybook/react';
import {
  BrandProvider,
  NavProvider,
  ShellProvider,
  ThemeProvider,
} from '../providers';
import { brand, primaryNav } from './config';

export const withFullWidth: Decorator = (Story) => (
  <div className="w-screen container">
    <Story />
  </div>
);

export const withFullPage: Decorator = (Story) => (
  <div className="w-full h-screen">
    <Story />
  </div>
);

export const withThemeProvider: Decorator = (Story) => (
  <ThemeProvider
    attribute="class"
    defaultTheme={'system'}
    enableSystem
    disableTransitionOnChange
  >
    <Story />
  </ThemeProvider>
);

export const withBrandProvider: Decorator = (Story) => (
  <div className="w-full ">
    <BrandProvider brand={brand}>
      <Story />
    </BrandProvider>
  </div>
);
export const withNavProvider: Decorator = (Story) => (
  <div className="w-full ">
    <NavProvider navItems={primaryNav}>
      <Story />
    </NavProvider>
  </div>
);

export const withShellProvider: Decorator = (Story) => (
  <div className="w-full ">
    <ShellProvider brand={brand} navItems={primaryNav}>
      <Story />
    </ShellProvider>
  </div>
);
