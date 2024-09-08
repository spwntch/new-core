import { cn } from '../../../../utils';
import { INavLink, INavMenu } from '../../../../types';
import {
  DropdownMenuSeparator,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../../../shadcn-ui';
import { NavToolbarMenuLink } from '../nav-toolbar-menu-link/nav-toolbar-menu-link';

interface ITopNavMenuProps extends INavMenu {
  floating?: boolean;
  onLinkTo: (href: string) => void;
}

export const NavToolbarMenu = ({
  floating,
  label,
  onLinkTo,
  children,
}: ITopNavMenuProps) => {
  const pickMenuItem = (item: INavMenu, index: number) => {
    // ONLY IF WE HAVE SUBMENU...
    // FOR NOW, WE DON'T...
    // if ((item as INavMenu).children) {
    //  ...
    // }

    return (
      <>
        {index !== 0 && <DropdownMenuSeparator />}
        <NavToolbarMenuLink
          key={(item as INavLink).href}
          {...(item as INavLink)}
          onLinkTo={onLinkTo}
        />
      </>
    );
  };

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          navigationMenuTriggerStyle(),
          'text-lg font-semibold',
          floating && 'bg-transparent text-white'
        )}
      >
        {label}{' '}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="flex flex-col w-[320px] gap-3 p-4">
          {children?.map((item, index) => pickMenuItem(item, index))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
