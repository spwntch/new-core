import { Home, Menu } from 'lucide-react';
import Link from 'next/link';
import { useNav } from '../../../../providers';
import { INavLink } from '../../../../types';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Sheet,
  SheetContent,
  SheetTrigger,
} from '../../../shadcn-ui';
import { UpgradeOfferCard } from '../desktop-side-navbar/upgrade-offer-card';

export const MobileAppNavDrawer = () => {
  const { navItems } = useNav();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold pb-6"
          >
            <div className="text-2xl">FREE PLAN</div>
          </Link>
          {navItems.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              {(item as INavLink).icon || <Home className="h-4 w-4" />}
              {item.label}
            </Link>
          ))}
        </nav>
        <UpgradeOfferCard />
      </SheetContent>
    </Sheet>
  );
};
