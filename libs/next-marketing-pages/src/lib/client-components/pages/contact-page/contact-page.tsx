'use client';
import { Calendly } from '@/crm';
import { IContent, IImage, TwoColumnImageHero } from '@spwntch/react-ui';

export interface ContactPageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
  calendlyUrl: string;
  calendlyStyles?: { [key: string]: string };
}

export const ContactPage = ({ hero, calendlyUrl, calendlyStyles }: ContactPageProps) => {
  return (
    <div className="flex flex-col">
      <TwoColumnImageHero
        image={hero.image}
        innerContent={hero.content}
        hAlign='left'
        className="text-white"
    >
      <Calendly calendlyUrl={calendlyUrl} styles={calendlyStyles}/>
    </TwoColumnImageHero>
    </div>
  );
};
