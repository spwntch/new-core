import { INavLink, INavMenu } from '../../../../../types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../../shadcn-ui';
import { NavSubMenuLink } from './nav-sub-menu-link';

interface INavSubMenuProps extends INavMenu {
  onLinkTo: (href: string) => void;
}

export const NavSubMenu = ({ label, children, onLinkTo }: INavSubMenuProps) => {
  const pickMenuItem = (item: INavMenu) => {
    // ONLY IF WE HAVE SUBMENU...
    // FOR NOW, WE DON'T...
    // if ((item as INavMenu).children) {
    //  ...
    // }

    return (
      <NavSubMenuLink
        key={(item as INavLink).href}
        {...(item as INavLink)}
        onLinkTo={onLinkTo}
      />
    );
  };

  return (
    <Accordion type="single" collapsible className="mt-2 w-full">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="text-sm px-4 py-3 rounded-md hover:no-underline hover:bg-accent hover:text-accent-foreground focus:bg-none">
          {label}
        </AccordionTrigger>
        <AccordionContent>
          <ul className="mt-3">
            {children?.map((item) => pickMenuItem(item))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
