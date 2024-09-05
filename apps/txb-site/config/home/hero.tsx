import { IContent, IImage } from '@spwntch/react-ui';

export const HOME_HERO_IMAGE: IImage = {
  src: '/images/home/home-page-hero.webp',
  darken: '50%',
};

export const HOME_HERO_CONTENT: IContent = {
  title: {
    content: 'Lean Experience Innovation',
    className: 'max-w-2xl',
  },
  subheading: 'Available now.',
  ctas: [
    {
      label: 'LEARN MORE',
      variant: { size: '2xl' },
    },
  ],
};
