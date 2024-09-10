import { AboutPage } from '@/next-marketing-pages';
import {
  ABOUT_HERO_CONTENT,
  ABOUT_HERO_IMAGE,
  PAIN_POINTS,
  TEAM,
} from '../../../config/website/about';

const About = () => {
  return (
    <AboutPage
      hero={{ image: ABOUT_HERO_IMAGE, content: ABOUT_HERO_CONTENT }}
      painPoints={PAIN_POINTS}
      team={TEAM}
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
