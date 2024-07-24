import { INavLink } from '../../../../../types';
import { NavigationMenuItem, NavigationMenuLink } from '../../../../shadcn-ui';

type INavToolbarMenuLinkProps = INavLink;

export const NavSubMenuLink = ({
  label,
  description,
  href,
  onLinkTo,
}: INavToolbarMenuLinkProps) => {
  return (
    <li>
      <NavigationMenuItem asChild>
        <NavigationMenuLink onSelect={() => onLinkTo(href)}>
          <h4>{label}</h4>
          {/* <Muted>{description}</Muted> */}
        </NavigationMenuLink>
      </NavigationMenuItem>
    </li>
  );
};
