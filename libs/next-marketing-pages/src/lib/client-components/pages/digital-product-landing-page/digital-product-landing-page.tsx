'use client';
import { FullImageHero, IContent, IImage } from '@spwntch/react-ui';
import { useRouter } from 'next/navigation';
import { Benefits, CtaBanner, Faqs, FeaturesGrid } from '../../page-sections';

export interface DigitalProductLandingPageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
  // clientLogos?: string[];
  painPoints?: IContent;
  benefits?: IContent;
  ctaBanner?: IContent;
  features?: IContent;
  faqs?: IContent;
  // caseStudies?: {
  //   content: IContent;
  //   articles: IMdxDoc[];
  // };
  // howItWorks?: IContent;
  // pricing?: IContent;
  // value?: IContent[];
  // cost?: IPricing;
  // about?: {
  //   youtubeId: string;
  //   content: IContent;
  //   stats: { label: string; value: string }[];
  // };
  // blog?: {
  //   content: IContent;
  //   articles: IMdxDoc[];
  // };
  // finalCta?: IContent;
}

export const DigitalProductLandingPage = ({
  hero,
  painPoints,
  benefits,
  ctaBanner,
  features,
  faqs
}: DigitalProductLandingPageProps) => {
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
        hAlign="left"
        onCtaClick={(ctaIndex: number) => {
          if (ctaIndex === 0) handleLinkTo('#cta-form');
        }}
      />
      {painPoints && (
        <FeaturesGrid id="product" content={painPoints} gridStyle="two" />
      )}
      {benefits && <Benefits content={benefits} className="bg-muted" />}
      {ctaBanner && (
        <CtaBanner
          content={ctaBanner}
          onCtaClick={() => handleLinkTo('#cta-form')}
          
        />
      )}
      {features && <FeaturesGrid id="product" content={features} 
      className="bg-muted"
      />}
       {faqs && <Faqs id="faq" content={faqs}  />}
    </div>
  );
};
