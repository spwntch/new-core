import { IContent, IImage } from '@spwntch/react-ui';
import { Rocket, ShieldCheck, Target } from 'lucide-react';

export const HERO_IMAGE: IImage = {
  src: '/images/products/icp-generator/icp-generator-hero-image.webp',
  darken: '75%',
};

export const HERO_CONTENT: IContent = {
  title: {
    content: 'Accelerate Product Success with our AI Powered ICP Generator',
    className: 'max-w-4xl',
  },
  subheading: {
    content:
      'Instantly generate Ideal Customer Profiles and Buyer Personas to refine your strategy, target the right customers, and drive growth with precision.',
      className: 'max-w-5xl',
  },
  body: {
    content: [
      'Leverage AI technology to streamline your customer targeting and product development.',
      'Our AI Powered ICP Generator empowers your team to make data-driven decisions, ensuring that every strategy aligns with your ideal customers’ needs and behaviors.',
    ],
    className: 'max-w-3xl',
  },
  bullets: [
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      body: [
        'Instant access to accurate customer profiles for faster decision-making.',
      ],
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      body: [
        'Target your audience with data-driven insights tailored to their needs.',
      ],
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      body: [
        'Unify your team’s efforts around a single, well-defined target customer.',
      ],
    },
  ],
  ctas: [
    {
      label: 'INSTANT PURCHASE',
      variant: { size: 'xl' },
      //   url: '/start',
      //   className: 'bg-blue-600 text-white py-3 px-6 rounded-lg',
    },
    {
      label: 'TRY FOR FREE',
      variant: { size: 'xl', variant: 'link' },
      //   url: '/start',
      //   className: 'bg-blue-600 text-white py-3 px-6 rounded-lg',
    },
  ],
};
