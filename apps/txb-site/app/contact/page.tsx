import { DigitalProductsHomePage } from "@/next-marketing-pages";
import { CONTACT_HERO_CONTENT, CONTACT_HERO_IMAGE } from "../../config";

const Contact = () => {
  return (
    <DigitalProductsHomePage
    hero={{ image: CONTACT_HERO_IMAGE, content: CONTACT_HERO_CONTENT }}
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
