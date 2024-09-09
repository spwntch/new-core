import { ContactPage } from "@/next-marketing-pages";
import { CONTACT_HERO_CONTENT, CONTACT_HERO_IMAGE } from "../../config";

const Contact = () => {
  return (
    <ContactPage
    hero={{ image: CONTACT_HERO_IMAGE, content: CONTACT_HERO_CONTENT }}
    calendlyUrl="https://calendly.com/d/cmd4-4jg-zft/the-experience-business"
    calendlyStyles={{
      
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

export default Contact;
