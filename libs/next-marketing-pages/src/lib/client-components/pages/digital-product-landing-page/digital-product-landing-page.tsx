"use client";
import { FullImageHero, IContent, IImage } from '@spwntch/react-ui';
import { useRouter } from 'next/navigation';
import { Benefits, FeaturesGrid } from '../../page-sections';

export interface DigitalProductLandingPageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
  // clientLogos?: string[];
  painPoints?: IContent;
  benefits?: IContent;
  features?: IContent;
  // benefits?: IContent;
  // caseStudies?: {
  //   content: IContent;
  //   articles: IMdxDoc[];
  // };
  // ctaBanner?: IContent;
  // features?: IContent;
  // howItWorks?: IContent;
  // faqs?: IContent;
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
  features
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
       {features && <FeaturesGrid id="product" content={features} />}

    </div>
  );
};
