import { IContent, IImage } from '@spwntch/react-ui';

export const ABOUT_HERO_IMAGE: IImage = {
  src: '/images/about/about-hero.webp',
  darken: '50%',
};

export const ABOUT_HERO_CONTENT: IContent = {
  title: {
    content: 'Welcome to The Experience Business',
    className: 'max-w-5xl'
  },
  subheading: {
    content: 'Innovating Customer Experiences through AI and Technology',
    className: 'max-w-lg mx-auto'
  },
  body: {
    content: [
      'At The Experience Business (TXB), we leverage cutting-edge technology and artificial intelligence to make advanced UX, lean product development, and insights management accessible to businesses of all sizes. Our mission is to transform how companies engage with their customers, driving innovation and delivering tangible results.',
      'Join us on a journey to elevate your business with strategies that are as intelligent as they are impactful, ensuring that every customer interaction is a step towards lasting success.',
    ],
    className: 'max-w-3xl text-center mx-auto',
  },
};
