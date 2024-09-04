import { IContent, IImage } from '@spwntch/react-ui';

export const ABOUT_HERO_IMAGE: IImage = {
  src: '/images/about/about-hero.webp',
  darken: '50%',
};

export const ABOUT_HERO_CONTENT: IContent = {
  title: {
    content: 'Welcome to The Experience Business',
    className: 'text-5xl font-bold text-center',
  },
  subheading: {
    content: 'Innovating Customer Experiences through AI and Technology',
    className: 'text-2xl text-center mt-4',
  },
  body: {
    content: [
      'At The Experience Business (TXB), we leverage cutting-edge technology and artificial intelligence to make advanced UX, lean product development, and insights management accessible to businesses of all sizes. Our mission is to transform how companies engage with their customers, driving innovation and delivering tangible results.',
      'Join us on a journey to elevate your business with strategies that are as intelligent as they are impactful, ensuring that every customer interaction is a step towards lasting success.',
    ],
    className: 'max-w-4xl mx-auto text-center mt-6',
  },
};
