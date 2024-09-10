import { IContent, IImage } from '@spwntch/react-ui';

export const HOME_HERO_IMAGE: IImage = {
  src: '/images/home/home-page-hero.webp',
  darken: '50%',
};

export const HOME_HERO_CONTENT: IContent = {
  title: {
    content: 'Lean Experience AI',
    className: 'max-w-2xl',
  },
  subheading: 'Available now.',
  ctas: [
    {
      label: 'EXPLORE THE FUTURE',
      variant: { size: '2xl' },
    },
  ],
};
