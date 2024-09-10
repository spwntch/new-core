import { DigitalProductLandingPage } from '@/next-marketing-pages';
import {
  BENEFITS,
  FAQ,
  // BENEFITS,
  // FAQ,
  HERO_CONTENT,
  HERO_IMAGE,
} from '../../../../config/website/products/bx-generator';

const title =
  'AI Powered Journey Map Generator | Automate Customer Journey Mapping with AI';
const description =
  'Automatically generate comprehensive customer journey maps for B2B and B2C markets with the AI Powered Journey Map Generator. Leverage AI-driven insights to optimize every touchpoint and enhance your customer experience strategy. Achieve faster time-to-market, increased flexibility, and data-driven optimization for superior results.';
const image = `${process.env.NEXT_PUBLIC_SITE_URL}/images/products/journey-generator/journey-hero-image.png`;
const keywords: string[] = [
  'AI Powered Journey Map Generator',
  'Customer Journey Mapping',
  'B2B Journey Maps',
  'B2C Journey Maps',
  'customer experience',
  'AI customer insights',
  'data-driven journey optimization',
  'customer touchpoints',
  'product strategy',
  'B2B marketing',
  'B2C marketing',
  'AI journey mapping',
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
      hero={{
        image: HERO_IMAGE,
        content: HERO_CONTENT,
        ribbon: 'Launching Q4, 2024',
      }}
      // painPoints={PAIN_POINTS}
      benefits={BENEFITS}
      // features={FEATURES}
      // ctaBanner={POST_BENEFITS_CTA_BANNER}
      faqs={FAQ}
    />
  );
}
