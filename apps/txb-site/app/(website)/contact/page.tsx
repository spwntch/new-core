import { ContactPage } from '@/next-marketing-pages';
import {
  CONTACT_HERO_CONTENT,
  CONTACT_HERO_IMAGE,
} from '../../../config/website/contact';

const Contact = () => {
  return (
    <ContactPage
      hero={{ image: CONTACT_HERO_IMAGE, content: CONTACT_HERO_CONTENT }}
      calendarUrl="dave-benjamin/30min"
      calendarStyles={{}}
      // clientLogos={TECH_LOGOS}
      // products={{ content: PRODUCTS }}
      // blog={{
      //   content: FEATURED_POSTS,
      //   articles: BLOG_POSTS,
      // }}
    />
  );
};

export default Contact;
