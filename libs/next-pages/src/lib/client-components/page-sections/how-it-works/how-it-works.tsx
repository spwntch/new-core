'use client';
import { ContentContainer, IContent, CardGrid } from '@spwntch/react-ui';

type Props = { content: IContent };

const HowItWorks = ({ content }: Props) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div className="flex-col pt-12 pb-28">
      <div className="container w-full">
        <ContentContainer innerContent={header} />
        <CardGrid cards={content.bullets} />
      </div>
    </div>
  );
};

export default HowItWorks;
