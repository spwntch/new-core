import { IContent, IImage } from '@spwntch/react-ui';

export const HOME_HERO_IMAGE: IImage = {
  src: '/images/home/home-page-hero.webp',
  darken: '75%',
};

export const HOME_HERO_CONTENT: IContent = {
  title: {
    content: 'Lean Experience Innovation Tools',
    className: 'max-w-4xl',
  },
  subheading: 'Available now.',
  ctas: [
    {
      label: 'GET STARTED',
      variant: { size: '2xl' },
    },
  ],
};
