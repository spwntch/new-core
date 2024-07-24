import { usePathname } from 'next/navigation';
import { PropsWithChildren, createContext, useContext } from 'react';
import { INavItem, INavLink } from '../../types';

export const DEFAULT_NAV_CONTEXT: INavContext = {
  path: undefined,
  navItems: [],
};

export const NavContext = createContext<INavContext>(DEFAULT_NAV_CONTEXT);

export const useNav = () => useContext(NavContext);

export interface INavContext {
  path?: string;
  navItems: INavItem[];
}

interface INavProviderProps {
  navItems?: INavItem[];
}

export const NavProvider = ({
  navItems,
  children,
}: INavProviderProps & PropsWithChildren) => {
  const path = usePathname();

  const context: INavContext = {
    path,
    navItems:
      navItems?.map((item) => ({
        ...item,
        active:
          ((item as INavLink).href &&
            path &&
            path.startsWith((item as INavLink).href)) ||
          false,
      })) || [],
  };

  return <NavContext.Provider value={context}>{children}</NavContext.Provider>;
};
