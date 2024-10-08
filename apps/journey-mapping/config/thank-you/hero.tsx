import { IContent, IImage } from '@spwntch/react-ui';

export const THANK_YOU_HERO_IMAGE: IImage = {
  src: '/images/thank-you/pexels-dreamsky-258557-790916.webp',
  darken: '50%',
};

export const THANK_YOU_HERO_CONTENT: IContent = {
  title: {
    content: 'We’re Excited to Elevate Your Customer Experience',
    className: 'max-w-3xl',
  },
  subheading: {
    content:
      'Get ready to transform your customer journeys and drive impactful results.',
    className: 'max-w-3xl',
  },
  body: {
    content: [
      `Thank you for your interest in our Journey Mapping service with Interact.`,
      `We’re eager to help you visualize and optimize your customer journeys, ensuring every interaction is seamless and satisfying.`,
      'Our team will be in touch shortly to discuss your specific needs and next steps.',
    ],
    className: 'max-w-3xl',
  },
  ctas: [
    { label: 'EXPLORE MORE', variant: { size: 'xl' } },
    { label: 'GO HOME', variant: { variant: 'link', size: 'xl' } },
  ],
};
