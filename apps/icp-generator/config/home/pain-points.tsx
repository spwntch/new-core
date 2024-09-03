import { IContent } from '@spwntch/react-ui';
import { Clock, Target, Layers } from 'lucide-react';

export const PAIN_POINTS: IContent = {
  heading: {
    content: 'Addressing Your Biggest Challenges',
    className: 'text-3xl font-bold mb-4',
  },
  subheading: {
    content: 'How the AI Driven ICP Generator Solves Your Biggest Problems',
    className: 'text-xl mb-6',
  },
  bullets: [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      heading: 'Speed in Decision-Making',
      body: [
        'Traditional methods of developing ICPs are too slow, delaying crucial decisions in product development, marketing, and growth strategies.',
        'Our AI Driven ICP Generator provides instant access to accurate customer profiles, enabling faster, more informed decision-making.',
      ],
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      heading: 'Precision in Targeting',
      body: [
        'Without precise, data-driven insights, marketing campaigns and product features can become misaligned, leading to wasted resources.',
        'The ICP Generator delivers highly targeted profiles, ensuring your strategies hit the mark every time.',
      ],
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      heading: 'Alignment Across Teams',
      body: [
        'Different departments often have varying interpretations of the ideal customer, leading to misalignment and inefficiencies.',
        'Our tool unifies your organization around a single, well-defined customer profile, ensuring cohesive strategies across all teams.',
      ],
    },
  ],
  body: {
    content: [
      'These pain points are common hurdles in product and marketing strategies, but with the AI Driven ICP Generator, you can overcome them and drive your business forward with confidence.',
    ],
    className: 'max-w-3xl mt-8',
  },
};
