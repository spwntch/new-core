import { INavItem } from '@spwntch/react-ui';

export const NAV: INavItem[] = [
  // { label: 'Home', href: '/' },
  {
    label: 'Meet TXB',
    href: '/about',
  },
  {
    label: 'Products',
    children: [
      {
        label: 'AI Powered ICP Generator',
        description:
          'Create precise customer profiles instantly with our custom AI models.',
        href: '/products/icp-generator',
      },
      {
        label: 'AI Powered Journey Map Generator',
        description:
        'Create rich customer journey maps instantly with our custom AI models.',
        href: '/products/journey-generator',
      },
      {
        label: 'AI Powered Brand Strat Generator',
        description:
          'Create a detailed brand strategy instantly with our custom AI models.',
        href: '/products/bx-generator',
      },
    ],
  },
  // { label: 'Customer Success HQ', href: '/success' },
  { label: 'Blog', href: '/blog' },
  { label: 'Reach Out', href: '/contact' },
  // {
  //   label: 'Free Resources',
  //   href: '#resources',
  // },
  // { label: 'Get Started', href: '#get-started' },
];
