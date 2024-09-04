import { cn } from '../../../../utils';
import { INavLink } from '../../../../types';
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '../../../shadcn-ui';

type INavToolbarLinkProps = INavLink & { floating?: boolean };

export const NavToolbarLink = ({
  floating,
  label,
  href,
  onLinkTo,
}: INavToolbarLinkProps) => {
  return (
    <NavigationMenuItem className="cursor-pointer">
      <NavigationMenuLink
        className={cn(
          navigationMenuTriggerStyle(),
          'text-xl font-semibold bg-transparent text-foreground',
          floating && ' text-white'
        )}
        onSelect={() => onLinkTo(href)}
      >
        {label}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};
