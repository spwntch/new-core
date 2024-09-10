import { IContent, IImage } from '@spwntch/react-ui';

export const BLOG_HERO_IMAGE: IImage = {
  src: '/images/blog/blog-hero.webp',
  darken: '50%',
};


export const BLOG_HERO: IContent = {
  title: {
    content: 'Insights and Innovations from The Experience Business',
    className: 'max-w-3xl mx-auto',
  },
  subheading: {
    content: 'Stay Ahead with Our Latest Articles on Customer Experience, AI, and Business Strategy',
    className: 'max-w-2xl mx-auto',
  },
  body: {
    content: [
      'Welcome to the blog of The Experience Business, where we share expert insights, industry trends, and practical advice to help you navigate the complexities of today’s market. Our articles are designed to empower you with knowledge on topics like customer experience, AI-driven strategies, lean product development, and more.',
      'Explore our latest posts and discover how our thought leadership can inspire and guide your business to new heights.',
    ],
    className: 'max-w-3xl text-center mx-auto',
  },
};