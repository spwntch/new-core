'use client';

import {
  FullImageHero,
  IContent,
  IImage,
  IPricing,
  LogoCarousel,
} from '@spwntch/react-ui';

import { useRouter } from 'next/navigation';
import {
  AboutUs,
  Benefits,
  DiveIn,
  Faqs,
  GetStarted,
  HowItWorks,
  LearnMore,
  Pricing,
  ProductSummary,
} from '../../client-components';

export interface HomePageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
  clientLogos: string[];
  productSummary: IContent;
  benefits: IContent;
  learnMore: IContent;
  howItWorks: IContent;
  diveIn: IContent;
  faqs: IContent;
  pricing: IContent;
  value: IContent[];
  cost: IPricing;
  about: {
    youtubeId: string;
    content: IContent;
    stats: { label: string; value: string }[];
  };
  getStarted: IContent;

  // testimonials: IContent;
}

const HomePage = ({
  hero,
  clientLogos,
  productSummary,
  benefits,
  learnMore,
  howItWorks,
  diveIn,
  faqs,
  pricing,
  value,
  cost,
  about,
  getStarted,
}: HomePageProps) => {
  const router = useRouter();
  const handleLinkTo = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex flex-col">
      <FullImageHero
        image={hero.image}
        innerContent={hero.content}
        className="text-white"
        vAlign="middle"
        hAlign="left"
        onCtaClick={(ctaIndex: number) => {
          if (ctaIndex === 0) handleLinkTo('#get-started');
        }}
      />
      <LogoCarousel logos={clientLogos} className="bg-white" />
      <ProductSummary id="product" content={productSummary} />
      <HowItWorks content={howItWorks} className="bg-muted" />
      <Benefits content={benefits} />
      <DiveIn
        content={diveIn}
        className="bg-muted"
        onCtaClick={() => handleLinkTo('#get-started')}
      />
      {/* <LearnMore content={learnMore} /> */}
      <Faqs id="faq" content={faqs} />
      <Pricing
        id="pricing"
        pricingContent={pricing}
        valueContent={value}
        costContent={cost}
        className="bg-muted"
        onCtaClick={() => handleLinkTo('#get-started')}
      />
      <AboutUs id="about" {...about} />
      {/* <Resources id="resources" /> */}
      <GetStarted id="get-started" content={getStarted} className="bg-muted" />
    </div>
  );
};

export default HomePage;
