import { IContent, IImage } from '@spwntch/react-ui';
import { Rocket, ShieldCheck, Target } from 'lucide-react';

export const HERO_IMAGE: IImage = {
  src: '/images/products/journey-generator/journey-generator-hero-image.webp',
  darken: '75%',
};

export const HERO_CONTENT: IContent = {
  title: {
    content:
      'Supercharge Your Customer Experience with AI-Powered Journey Maps',
    className: 'max-w-4xl',
  },
  subheading: {
    content:
      'Instantly map customer journeys for B2B and B2C audiences, backed by AI insights to optimize every touchpoint.',
    className: 'max-w-5xl',
  },
  body: {
    content: [
      'Our AI-Powered Journey Map Generator provides a complete view of how your customers interact with your product at every stage, helping you design superior experiences.',
      'Designed for digital product managers, marketing strategists, and UX experts in B2B and B2C companies.',
    ],
    className: 'max-w-3xl',
  },
  bullets: [
    {
      icon: <Rocket className="h-6 w-6" />,
      body: ['Generate customer journeys with AI-powered insights in minutes.'],
    },
    {
      icon: <Target className="h-6 w-6" />,
      body: [
        'Tailor your customer journeys for both B2B and B2C segments effortlessly.',
      ],
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      body: [
        'Make data-driven decisions to enhance customer experiences at every touchpoint.',
      ],
    },
  ],
  ctas: [
    {
      label: 'JOIN THE WAITLIST',
      variant: { size: 'xl' },
      //   url: '/join-waitlist',
      //   className: 'bg-blue-600 text-white py-3 px-6 rounded-lg',
    },
  ],
};
