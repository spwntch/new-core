import { IContent, IImage } from '@spwntch/react-ui';
import { Map, Rocket } from 'lucide-react';

export const HERO_IMAGE: IImage = {
  src: '/images/products/bx-generator/bx-generator-hero-image-new.webp',
  darken: '75%',
};

export const HERO_CONTENT: IContent = {
  title: {
    content: 'Elevate your brand with AI-driven strategy',
    className: 'max-w-4xl',
  },
  subheading: {
    content:
      'AI-powered brand strategy in minutes to resonate with your audience and grow loyalty.',
    className: 'max-w-5xl',
  },
  body: {
    content: [
      'Leverage the power of AI to instantly generate comprehensive, data-driven brand strategies tailored to your product and target audience.',
      'The AI Powered Brand Strategy Generator gives you the competitive edge to create meaningful customer connections and drive brand loyalty.',
    ],
    className: 'max-w-3xl',
  },
  bullets: [
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      body: [
        'AI-powered insights to help build customer-centric brand strategies.',
      ],
    },
    {
      icon: <Map className="h-6 w-6 text-primary" />,
      body: [
        'Instantly visualize brand experience maps with detailed customer touchpoints.',
      ],
    },
  ],
  ctas: [
    {
      label: 'JOIN WAITING LIST',
      variant: { size: 'xl' },
    },
    // {
    //   label: 'Learn More',
    //   variant: { size: 'xl', variant: 'link' },
    // },
  ],
};
