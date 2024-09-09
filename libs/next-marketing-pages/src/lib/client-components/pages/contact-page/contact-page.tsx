import { FullImageHero, IContent, IImage } from '@spwntch/react-ui';

export interface ContactPageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
}

export const ContactPage = ({ hero }: ContactPageProps) => {
  return (
    <div className="flex flex-col">
      <FullImageHero
        image={hero.image}
        innerContent={hero.content}
        className="text-white"
      />
    </div>
  );
};
