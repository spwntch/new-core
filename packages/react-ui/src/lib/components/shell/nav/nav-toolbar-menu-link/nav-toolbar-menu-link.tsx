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
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-muted-foreground focus:bg-muted focus:text-muted-foregrouns"
          onSelect={() => onLinkTo(href)}
        >
          <h4 className="text-lg font-bold ">{label}</h4>
          <p className="mt-2 line-clamp-2 text-sm ">
            {description}
          </p>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </li>
  );
};
