import { Home } from 'lucide-react';
import Link from 'next/link';
import { useNav } from '../../../../providers';
import { INavLink } from '../../../../types';
import AccountPicker from './account-picker';
import { UpgradeOfferCard } from './upgrade-offer-card';

export const DesktopSideNavbar = () => {
  const { navItems } = useNav();

  return (
    <div className="hidden border-r border-r-muted bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <AccountPicker />
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                {(item as INavLink).icon || <Home className="h-4 w-4" />}
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-4">
          <UpgradeOfferCard />
        </div>
      </div>
    </div>
  );
};
