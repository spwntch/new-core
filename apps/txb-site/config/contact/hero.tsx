import { IContent, IImage } from '@spwntch/react-ui';

export const CONTACT_HERO_IMAGE: IImage = {
  src: '/images/contact/contact-hero.webp',
  darken: '50%',
};

export const CONTACT_HERO_CONTENT: IContent = {
  title: {
    content: 'Get in Touch with The Experience Business',
    className: 'max-w-3xl',
  },
  subheading: {
    content: 'We’re Here to Help You Innovate and Grow',
    className: '',
  },
  body: {
    content: [
      'Whether you have questions about our services, need support, or want to explore how we can collaborate, our team is ready to assist you. At The Experience Business, we value strong partnerships and are committed to helping you achieve your business goals.',
      'Reach out to us today and discover how we can work together to create exceptional customer experiences and drive lasting success.',
    ],
    className: 'max-w-3xl text-center mx-auto',
  },
};
