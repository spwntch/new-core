import { INavItem } from '@spwntch/react-ui';
import { Barcode, CircleDollarSign, CircleGauge, Drum, HandCoins, Map } from 'lucide-react';

export const NAV: INavItem[] = [
  {
    icon: <CircleGauge className="h-6 w-6" />,
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    icon: <Barcode className="h-6 w-6" />,
    label: 'My Products',
    href: '/my-products',
  },
  {
    icon: <CircleDollarSign className="h-6 w-6" />,
    label: 'My Customers',
    href: '/my-customers',
  },
  {
    icon: <Map className="h-6 w-6" />,
    label: 'My Journeys',
    href: '/my-journeys',
  },
  {
    icon: <Drum className="h-6 w-6" />,
    label: 'My Campaigns',
    href: '/my-campaigns',
  },
];
