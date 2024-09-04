'use client';
import { Card, cn, ContentContainer, IContent, MultiPanelLayout } from '@spwntch/react-ui';

type ProductsProps = { content: IContent; className?: string };

export const Products = ({ content, className }: ProductsProps) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div className={cn('flex-col pt-12 pb-28 h-full', className)}>
      <div className="md:container px-3 h-full">
        <ContentContainer innerContent={header} className="mb-12" />
        <MultiPanelLayout
        mainPaneCoverage={65}
          containers={[
            <div className="bg-blue-200 h-full w-full flex items-center justify-center">
              <Card className="p-4">Main Block Content</Card>
            </div>,
            <div className="bg-green-200 h-full w-full flex items-center justify-center">
              <Card className="p-4">Sub Block 1 Content</Card>
            </div>,
            <div className="bg-yellow-200 h-full w-full flex items-center justify-center">
              <Card className="p-4">Sub Block 2 Content</Card>
            </div>,
            <div className="bg-red-200 h-full w-full flex items-center justify-center">
              <Card className="p-4">Sub Block 3 Content</Card>
            </div>,
          ]}
        />
        {/* <CardGrid cards={content.bullets} /> */}
      </div>
    </div>
  );
};
