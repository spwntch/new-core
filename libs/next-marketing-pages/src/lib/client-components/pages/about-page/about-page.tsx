'use client';
import { FullImageHero, IContent, IImage } from '@spwntch/react-ui';
import { useRouter } from 'next/navigation';
import { FeaturesGrid } from '../../page-sections';

export interface AboutPageProps {
  hero: {
    image: IImage;
    content: IContent;
    ribbon?: string;
  };
  painPoints?: IContent;
  team?: IContent;
  faqs?: IContent;
}

export const AboutPage = ({ hero, painPoints, team }: AboutPageProps) => {
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
      {painPoints && (
        <FeaturesGrid id="product" content={painPoints} gridStyle="two" />
      )}
      {/* {team && <Team content={team} className="bg-muted" />} */}
    </div>
  );
};
