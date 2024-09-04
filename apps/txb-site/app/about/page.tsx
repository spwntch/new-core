import { DigitalProductsHomePage } from '@/next-marketing-pages';
import { ABOUT_HERO_CONTENT, ABOUT_HERO_IMAGE } from '../../config';
import React from 'react';

const About = () => {
  return (
    <DigitalProductsHomePage
      hero={{ image: ABOUT_HERO_IMAGE, content: ABOUT_HERO_CONTENT }}
      // clientLogos={TECH_LOGOS}
      // products={{ content: PRODUCTS }}
      // blog={{
      //   content: FEATURED_POSTS,
      //   articles: BLOG_POSTS,
      // }}
    />
  );
};

export default About;
