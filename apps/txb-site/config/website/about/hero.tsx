import { IContent, IImage } from '@spwntch/react-ui';

export const ABOUT_HERO_IMAGE: IImage = {
  src: '/images/about/about-hero-image.webp',
  darken: '50%',
};

export const ABOUT_HERO_CONTENT: IContent = {
  title: {
    content: "Welcome to The Experience Business",
    className: 'max-w-2xl',
  },
  subheading: {
    content: "Innovating Customer Experiences through AI and Technology",
    className: 'max-w-lg',

  },
  body: {
    content: [
      "At The Experience Business (TXB), we leverage cutting-edge technology and artificial intelligence to redefine customer and user experiences. From advanced UX design to lean product development and actionable insights management, we make enterprise-level solutions accessible to businesses of all sizes. Our mission is to transform how companies engage with their customers—driving innovation, elevating brand experiences, and delivering measurable results.",
      "Join us on a journey to elevate your business. With strategies powered by AI, we ensure that every customer interaction is intelligent, impactful, and a step towards lasting success."
    ],
    className:'max-w-4xl'
  },
  ctas: [
    {
      label: "REACH OUT"
    },
  ],
};
