'use client';

import {
  IContent,
  IImage
} from '@spwntch/react-ui';

import {
  DiveIn,
  Faqs
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
  testimonials,
}: HomePageProps) => {
  return (
    <div className="flex flex-col">
      {/* <FullImageHero
        image={hero.image}
        innerContent={hero.content}
        className="text-white"
        vAlign="middle"
        hAlign="left"
      />
      <LogoCarousel logos={clientLogos} className="bg-white" /> */}
      <div id="product">
        {/* <ProductSummary content={productSummary} />
        <Benefits content={benefits} />
        <TellMeMore content={tellMeMore} /> */}
        {/* <HowItWorks content={howItWorks} /> */}
        <DiveIn content={diveIn} />
      </div>
      <div id="faq">
        <Faqs content={faqs} />
      </div>
      {/* <Testimonials content={testimonials} /> */}
      {/* <HowItWorks content={testimonials} /> */}
    </div>
  );
};

export default HomePage;
