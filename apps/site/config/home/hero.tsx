import { IContent, IImage } from '@spwntch/shadcn-ui';
import { Crosshair, Users, TrendingUp } from 'lucide-react';

export const HOME_HERO_IMAGE: IImage = {
  src: '/images/coworkers-in-casual-workshop.webp',
  darken: true,
};

export const HOME_HERO_CONTENT: IContent = {
  // announcement: {
  //   message: "Limited Time Offer: Get 10% Off the ICP Playbook!",
  //   className: "mx-auto text-xl",
  //   href: "#"
  // },
  title: {
    content: 'Unlock Your Ideal Customers with the ICP Playbook',
  },
  subTitle: {
    content:
      'Transform your marketing and product strategies with our comprehensive playbook.',
  },
  body: {
    content: [
      // 'Are you struggling to identify and target the right customers, wasting valuable marketing resources on low-potential leads?',
      // 'Do you face challenges in aligning your marketing and sales teams, causing friction and inefficiencies?',
      // 'Are you struggling to convert your website visitors into customers?',
      // "Perhaps you're overwhelmed by the vast amounts of data available but unsure how to leverage it effectively?",
      'With the ICP Playbook, you can achieve higher conversion rates, improve team alignment, and see faster, data-driven results. Our comprehensive playbook provides the tools and strategies you need to transform your marketing efforts and reach your ideal customers efficiently.',
    ],
  },
  bullets: [
    {
      icon: <Crosshair />,
      body: 'Achieve higher conversion rates',
      className: 'text-xl',
    },
    {
      icon: <Users />,
      body: 'Improved team alignment',
      className: 'text-xl',
    },
    {
      icon: <TrendingUp />,
      body: 'Faster, data-driven results',
      className: 'text-xl',
    },
  ],
  ctas: [
    { label: 'UNLOCK PLAYBOOK RESULTS', variant: { size: '2xl' } },
    { label: 'CONTACT US', variant: { size: '2xl', variant: 'ghost' } },
  ],
};
