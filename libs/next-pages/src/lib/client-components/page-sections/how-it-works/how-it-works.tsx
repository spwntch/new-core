'use client';
import { ContentSection, IContent } from '@spwntch/shadcn-ui';

type Props = { content: IContent };

const HowItWorks = ({ content }: Props) => {
  return <ContentSection innerContent={content} />;
};

export default HowItWorks;
