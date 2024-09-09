'use client';
import { CalDotCom } from '@/crm';
// import { Calendly } from '@/crm';
import { IContent, IImage, TwoColumnImageHero } from '@spwntch/react-ui';
import { Map } from '../../page-sections';

export interface ContactPageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
  calendarUrl: string;
  calendarStyles?: { [key: string]: string };
}

export const ContactPage = ({
  hero,
  calendarUrl,
  calendarStyles,
}: ContactPageProps) => {
  return (
    <div className="flex flex-col">
      {/* <TwoColumnImageHero
        image={hero.image}
        innerContent={hero.content}
        hAlign="left"
        className="text-white"
      >
        <div className="w-full text-center">
          <h2 className="text-3xl mb-3 font-semibold">Meet with Us</h2>
          <CalDotCom calendarUrl={calendarUrl} />
        </div>
      </TwoColumnImageHero> */}
      <Map
        position={{
          lat: -26.102878317158115,
          lng: 28.050516039241906,
        }}
      />
    </div>
  );
};
