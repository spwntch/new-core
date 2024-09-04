import { DigitalProductsHomePage } from '@/next-marketing-pages';
import {
  BLOG_POSTS,
  TECH_LOGOS,
  FEATURED_POSTS,
  HOME_HERO_CONTENT,
  HOME_HERO_IMAGE,
} from '../config';

export default function Index() {
  return (
    <DigitalProductsHomePage
      hero={{ image: HOME_HERO_IMAGE, content: HOME_HERO_CONTENT }}
      clientLogos={TECH_LOGOS}
      blog={{
        content: FEATURED_POSTS,
        articles: BLOG_POSTS,
      }}
    />
  );
}
