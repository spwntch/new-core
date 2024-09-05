import { ArticlesPage } from '@/next-marketing-pages';
import {
  BLOG_HERO,
  BLOG_HERO_IMAGE,
  BLOG_POSTS,
  FEATURED_POSTS,
} from '../../config';

const BlogPage = () => {
  return (
    <ArticlesPage
      hero={{ image: BLOG_HERO_IMAGE, content: BLOG_HERO }}
      blog={{
        articles: BLOG_POSTS,
      }}
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
