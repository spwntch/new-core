import { IContent, IImage } from '@spwntch/react-ui';
import { DollarSign, CreditCard, CheckCircle } from 'lucide-react';

export const HERO_IMAGE: IImage = {
  src: '/images/pricing/pricing-hero-image.webp',
  darken: '50%',
};

export const HERO_CONTENT: IContent = {
  title: {
    content: 'Flexible Pricing Plans to Access Advanced AI Capabilities',
    className: 'max-w-4xl',
  },
  subheading: {
    content:
      'Choose a plan that works for your business. Access all of our cutting-edge tools and scale your usage as needed with our flexible subscription options.',
    className: 'max-w-5xl',
  },
  body: {
    content: [
      'Whether you’re just getting started or looking to take your business to the next level, The Experience Business offers plans that fit your needs.',
      'Unlock the power of AI with our Free Plan for pay-as-you-go access, or upgrade to the Pro Plan for $99/month and enjoy significant discounts and free monthly deliverables.',
    ],
    className: 'max-w-3xl',
  },
  bullets: [
    {
      icon: <DollarSign className="h-6 w-6" />,
      body: [
        'Affordable pricing with flexible pay-as-you-go options for all users.',
      ],
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      body: [
        'Upgrade to the Pro Plan for free monthly deliverables and discounted rates.',
      ],
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      body: [
        'Access all our AI-powered products, including the ICP Generator, Brand Strategy Generator, and Journey Map Generator.',
      ],
    },
  ],
  ctas: [
    { label: 'SIGN UP FOR FREE', variant: { size: 'xl' }, href: '/sign-up' },
    {
      label: 'UPGRADE TO PRO',
      variant: { size: 'xl', variant: 'secondary' },
      href: '/pricing/pro',
    },
  ],
};
