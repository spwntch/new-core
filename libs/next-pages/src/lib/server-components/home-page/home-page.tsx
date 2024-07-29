'use client';

import {
  FullImageHero,
  IContent,
  IImage,
  LogoCarousel,
} from '@spwntch/react-ui';

import { useRouter } from 'next/navigation';
import {
  AboutUs,
  Benefits,
  DiveIn,
  Faqs,
  HowItWorks,
  Pricing,
  ProductSummary,
  TellMeMore,
} from '../../client-components';

export interface HomePageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
  clientLogos: string[];
  productSummary: IContent;
  benefits: IContent;
  tellMeMore: IContent;
  howItWorks: IContent;
  diveIn: IContent;
  faqs: IContent;
  pricing: IContent;
  about: {
    youtubeId: string;
    content: IContent;
    stats: { label: string; value: string }[];
  };

  testimonials: IContent;
}

const HomePage = ({
  hero,
  clientLogos,
  productSummary,
  benefits,
  tellMeMore,
  howItWorks,
  diveIn,
  faqs,
  pricing,
  about,
  testimonials,
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
          // if (ctaIndex === 1) handleLinkTo('#product');
        }}
      />
      <LogoCarousel logos={clientLogos} className="bg-white" />
      <div id="product">
        <ProductSummary content={productSummary} />
        <Benefits content={benefits} />
        <DiveIn
          content={diveIn}
          onCtaClick={() => handleLinkTo('#get-started')}
        />
        <HowItWorks content={howItWorks} />
      </div>
      <div id="learn-more">
        <TellMeMore content={tellMeMore} />
      </div>
      <div id="faq">
        <Faqs content={faqs} />
      </div>
      <div id="pricing">
        <Pricing
          content={pricing}
          onCtaClick={() => handleLinkTo('#get-started')}
        />
      </div>
      <div id="about">
        <AboutUs {...about} />
        {/* <Testimonials content={testimonials} /> */}
      </div>
      {/* <div id="resources">
        <Resources />
      </div> */}
      <div id="get-started"></div>
    </div>
  );
};

export default HomePage;
