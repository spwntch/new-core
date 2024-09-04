import { DigitalProductsHomePage } from '@/next-marketing-pages';
import { BLOG_HERO, BLOG_HERO_IMAGE } from '../../config';
import React from 'react';

const BlogPage = () => {
  return (
    <DigitalProductsHomePage
      hero={{ image: BLOG_HERO_IMAGE, content: BLOG_HERO }}
      // clientLogos={TECH_LOGOS}
      // products={{ content: PRODUCTS }}
      // blog={{
      //   content: FEATURED_POSTS,
      //   articles: BLOG_POSTS,
      // }}
    />
  );
};

export default BlogPage;
