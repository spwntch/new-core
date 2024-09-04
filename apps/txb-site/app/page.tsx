import { DigitalProductsHomePage } from '@/next-marketing-pages';
import {
  BLOG_POSTS,
  TECH_LOGOS,
  FEATURED_POSTS,
  HOME_HERO_CONTENT,
  HOME_HERO_IMAGE,
} from '../config';
import { PRODUCTS } from '../config/home/products';

const title = 'The Experience Business | Innovating Customer Experiences with AI and Technology';
const description =
  'The Experience Business (TXB) leverages advanced technology and artificial intelligence to make leading intellectual property in UX, lean product development, and insights management accessible to a broader audience of business users. Discover how our solutions can transform your customer and user experiences.';
const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/home/txb-home-cover.webp`;
const keywords: string[] = [
  'The Experience Business',
  'TXB',
  'customer experience',
  'user experience',
  'UX',
  'lean product development',
  'insights management',
  'AI technology',
  'business strategy',
  'digital transformation',
  'customer satisfaction',
  'innovation',
];

export const metadata = {
  title,
  description,
  keywords,
  openGraph:
    (process.env.NEXT_PUBLIC_SITE_URL && {
      title,
      description,
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: 'The Experience Business | TXB',
      images: [{ url: image, width: 1200, height: 630 }],
      locale: 'en_US',
      type: 'website',
    }) ||
    null,
  twitter:
    (process.env.NEXT_PUBLIC_SITE_URL && {
      card: 'summary_large_image',
      title,
      description,
      creator: '@TheExperienceBusiness',
      images: [image],
    }) ||
    null,
};

export default function Index() {
  return (
    <DigitalProductsHomePage
      hero={{ image: HOME_HERO_IMAGE, content: HOME_HERO_CONTENT }}
      clientLogos={TECH_LOGOS}
      products={{ content: PRODUCTS }}
      blog={{
        content: FEATURED_POSTS,
        articles: BLOG_POSTS,
      }}
    />
  );
}
