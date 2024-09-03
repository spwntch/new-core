import { IContent, TextWithClassName } from '../../../..//types';
import { Button } from '../../../shadcn-ui';
import { ContentContainer } from '../../containers';

export interface ISimpleJustifiedBannerProps {
  innerContent: IContent;
  onCtaClick: () => void;
}

export const SimpleJustifiedBanner = ({
  innerContent,
  onCtaClick,
}: ISimpleJustifiedBannerProps) => {
  const message: IContent = {
    heading: {
      content:
        (innerContent.heading as TextWithClassName).content ||
        (innerContent.heading as string),
      // className:
      //   'text-3xl font-bold tracking-tight text-foreground sm:text-4xl !text-left',
    },
    subheading: {
      content:
        (innerContent.subheading as TextWithClassName).content ||
        (innerContent.subheading as string),
      // className:
      //   'text-3xl font-bold tracking-tight text-foreground sm:text-4xl !text-left',
    },
  };
  return (
    <div className="mx-auto max-w-7xl px-6 sm:flex sm:items-center sm:justify-between sm:px-8">
      <ContentContainer innerContent={message} hAlign="left"/>
      <div className="mt-10 flex flex-row items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
        <Button size="xl" onClick={onCtaClick}>
          {innerContent.ctas?.[0]?.label || 'GET STARTED'}
        </Button>
      </div>
    </div>
  );
};
