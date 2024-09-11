'use client';

import { FullImageHero, IContent, IImage } from '@spwntch/react-ui';
import { useRouter } from 'next/navigation';

export interface PricingPageProps {
  hero: {
    image: IImage;
    content: IContent;
    ribbon?: string;
  };
}

export const PricingPage = ({ hero }: PricingPageProps) => {
  const router = useRouter();
  const handleLinkTo = (url: string) => {
    router.push(url);
  };
  return (
    <div className="flex flex-col">
      <FullImageHero
        image={hero.image}
        innerContent={hero.content}
        ribbon={hero.ribbon}
        className="text-white"
        hAlign="left"
        onCtaClick={(ctaIndex: number) => {
          if (ctaIndex === 0) handleLinkTo('#cta-form');
        }}
      />
    </div>
  );
};
