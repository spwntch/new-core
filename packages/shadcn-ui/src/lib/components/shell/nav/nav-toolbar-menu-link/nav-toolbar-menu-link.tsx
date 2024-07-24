import { INavLink } from '../../../../types';
import { NavigationMenuItem, NavigationMenuLink } from '../../../shadcn-ui';

interface INavToolbarMenuLinkProps extends INavLink {
  className?: string;
}

export const NavToolbarMenuLink = ({
  label,
  description,
  href,
  onLinkTo,
  className,
}: INavToolbarMenuLinkProps) => {
  return (
    <li className={className}>
      <NavigationMenuItem asChild>
        <NavigationMenuLink
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foregrouns"
          onSelect={() => onLinkTo(href)}
        >
          <h4 className="text-sm font-medium leading-none">{label}</h4>
          <p className="line-clamp-2 text-xs leading-snug">{description}</p>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </li>
  );
};
