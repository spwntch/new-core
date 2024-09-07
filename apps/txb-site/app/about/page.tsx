import { DigitalProductLandingPage } from '@/next-marketing-pages';
import {
  ABOUT_HERO_CONTENT,
  ABOUT_HERO_IMAGE,
  PAIN_POINTS,
} from '../../config/about';
import React from 'react';

const About = () => {
  return (
    <DigitalProductLandingPage
      hero={{ image: ABOUT_HERO_IMAGE, content: ABOUT_HERO_CONTENT }}
      painPoints={PAIN_POINTS}
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
