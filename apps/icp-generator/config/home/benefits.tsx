import { IContent } from '@spwntch/react-ui';

export const BENEFITS: IContent = {
  heading: {
    content: `A Simple, Elegant Solution`,
  },
  subheading: {
    content: 'Why You Should Choose Our AI Powered ICP Generator',
  },
  bullets: [
    {
      image: {
        src: 'images/data-driven-accuracy.webp',
        alt: 'Data Driven Accuracy',
      },
      heading: 'Data-Driven Accuracy',
      body: [
        'Benefit from AI-generated customer profiles that are based on comprehensive, data-driven research, ensuring every decision is backed by reliable insights.',
      ],
    },
    {
      image: {
        src: 'images/faster-time-to-market.webp',
        alt: 'Faster Time to Market',
      },
      heading: 'Faster Time to Market',
      body: [
        'Speed up your product development and marketing processes with instant ICP generation, allowing you to stay ahead of the competition and quickly respond to market changes.',
      ],
    },
    {
      image: { src: 'images/reduced-risk.webp', alt: 'Reduce Risk' },
      heading: 'Reduced Risk',
      body: [
        'Mitigate the risks of targeting the wrong audience or misaligning your strategies by using accurate, AI-generated ICPs and Buyer Personas tailored to your specific market.',
      ],
    },
    {
      image: {
        src: 'images/experiment-with-confidence.webp',
        alt: 'Experiment with Confidence',
      },
      heading: 'The Freedom to Experiment',
      body: [
        'Empower your team to explore new markets and product ideas quickly and efficiently, enabling rapid market validation and innovation without wasting resources.',
      ],
    },
  ],
  body: {
    content: [
      'The AI Powered ICP Generator is more than just a tool—it’s a strategic advantage that helps you refine your approach, maximize efficiency, and achieve your business goals with confidence.',
    ],
    className: 'max-w-3xl',
  },
};
