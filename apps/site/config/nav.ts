import { INavItem } from '@spwntch/shadcn-ui';

export const primaryNav: INavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'The Playbook', href: '/playbook' },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Resources',
    children: [
      {
        label: 'Blog',
        description: 'ipsum lorem and that sh*t',
        href: '/blog',
      },
      {
        label: 'Downloads',
        description: 'ipsum lorem and that sh*t',
        href: '/white-papers',
      },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
];
