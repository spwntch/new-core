import { PricingPage } from '@/next-marketing-pages';
import { HERO_IMAGE, HERO_CONTENT } from '../../../config/website/pricing/hero';

const Pricing = () => {
  return <PricingPage hero={{ image: HERO_IMAGE, content: HERO_CONTENT }} />;
};

export default Pricing;
