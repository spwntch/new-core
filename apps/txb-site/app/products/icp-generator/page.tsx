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
