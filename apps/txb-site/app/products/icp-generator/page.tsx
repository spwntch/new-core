import { DigitalProductLandingPage } from '@/next-marketing-pages';
import {
  BENEFITS,
  FAQ,
  FEATURES,
  HERO_CONTENT,
  HERO_IMAGE,
  PAIN_POINTS,
  POST_BENEFITS_CTA_BANNER,
} from '../../../config/products';

const title = 'AI Powered ICP Generator | Generate Ideal Customer Profiles with AI';
const description =
  'Instantly create accurate Ideal Customer Profiles and Buyer Personas with our AI Powered ICP Generator. Tailor your product and marketing strategies to your ideal customers with data-driven insights. Enhance targeting, reduce risk, and accelerate time-to-market. Start refining your customer strategy today!';
const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/products/icp-generatoricp-generator-hero-imapge.png`;
const keywords: string[] = [
  'AI Powered ICP Generator',
  'Ideal Customer Profile',
  'Buyer Persona',
  'customer targeting',
  'data-driven marketing',
  'product strategy',
  'market validation',
  'customer insights',
  'B2B marketing',
  'B2C marketing',
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
      siteName: 'AI Powered ICP Generator | The Experience Business',
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
    <DigitalProductLandingPage
      hero={{ image: HERO_IMAGE, content: HERO_CONTENT }}
      painPoints={PAIN_POINTS}
      benefits={BENEFITS}
      features={FEATURES}
      ctaBanner={POST_BENEFITS_CTA_BANNER}
      faqs={FAQ}
    />
  );
}
