import { INavLink } from '../../../../../types';
import { cn } from '../../../../../utils';
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '../../../../shadcn-ui';

type INavToolbarLinkProps = INavLink;

export const NavMenuLink = ({
  label,
  href,
  onLinkTo,
}: INavToolbarLinkProps) => {
  return (
    <NavigationMenuItem className="w-full mt-2">
      <NavigationMenuLink
        className={cn(
          navigationMenuTriggerStyle(),
          'w-full justify-start ml-0'
        )}
        onSelect={() => onLinkTo(href)}
      >
        {label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};
