import { IContent, IImage } from '@spwntch/react-ui';
import { Rocket, ShieldCheck, Target } from 'lucide-react';

export const HERO_IMAGE: IImage = {
  src: '/images/icp-generator-hero-image.webp',
  darken: '75%',
};

export const HERO_CONTENT: IContent = {
  title: {
    content: 'Accelerate Your Product Success with AI Driven ICPs',
    className: 'max-w-3xl text-4xl font-bold tracking-tight mb-4',
  },
  subheading: {
    content:
      'Instantly generate Ideal Customer Profiles and Buyer Personas to refine your strategy, target the right customers, and drive growth with precision.',
    className: 'max-w-2xl text-lg mb-6',
  },
  body: {
    content: [
      'Leverage AI technology to streamline your customer targeting and product development.',
      'Our ICP Generator empowers your team to make data-driven decisions, ensuring that every strategy aligns with your ideal customers’ needs and behaviors.',
    ],
    className: 'max-w-3xl mb-8',
  },
  bullets: [
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      body: [
        'Instant access to accurate customer profiles for faster decision-making.',
      ],
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      body: [
        'Target your audience with data-driven insights tailored to their needs.',
      ],
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
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
