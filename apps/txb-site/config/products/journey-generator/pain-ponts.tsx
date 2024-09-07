import { IContent } from '@spwntch/react-ui';
import { Clock, Target, Layers } from 'lucide-react';

export const PAIN_POINTS: IContent = {
  heading: {
    content: 'Eliminate Customer Journey Mapping Complexities',
  },
  subheading: {
    content: 'We solve your biggest journey mapping problems',
  },
  bullets: [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      heading: 'Mapping Complexity',
      body: [
        'Manually mapping customer journeys can be time-consuming, often leading to incomplete or inaccurate maps.',
        'Our AI-driven tool automates the process, reducing complexity and improving accuracy.',
      ],
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      heading: 'Lack of Data-Driven Accuracy',
      body: [
        'Traditional methods miss critical insights required for success, leading to misinformed decisions.',
        'The AI-powered solution provides precise, data-driven journey maps to guide decision-making.',
      ],
    },
    {
      icon: <Layers className="h-6 w-6 text-primary" />,
      heading: 'Siloed Departments',
      body: [
        'Cross-functional teams often have fragmented views of customer interactions, causing misalignment.',
        'Our tool aligns teams with a single, unified view of the customer journey across all touchpoints.',
      ],
    },
    // {
    //   icon: <Target className="h-6 w-6 text-primary" />,
    //   heading: 'Difficulty Balancing B2B & B2C',
    //   body: [
    //     'Managing journey mapping for both B2B and B2C markets is a challenge, leading to inconsistent experiences.',
    //     'The AI Journey Map Generator is designed to seamlessly map journeys for both B2B and B2C segments, ensuring consistent and optimized experiences.',
    //   ],
    // },
  ],
  body: {
    content: [
      'These challenges often stand in the way of creating efficient, customer-focused journeys. With our AI-powered tool, you can overcome these hurdles and create journey maps that help you elevate your customer experience strategy.'
    ],
    className: 'max-w-3xl',
  },
};