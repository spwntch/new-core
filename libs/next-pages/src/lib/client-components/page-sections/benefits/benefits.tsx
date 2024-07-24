'use client';

import { IContent, IImage, SplitImageContentSection } from '@spwntch/shadcn-ui';

export interface BenefitsProps {
  benefits: { image: IImage; content: IContent }[];
}

const Benefits = ({ benefits }: BenefitsProps) => {
  return (
    <>
      {benefits.map((benefit, index) => (
        <div className="mb-8">
          <SplitImageContentSection
            image={benefit.image}
            innerContent={benefit.content}
            flip={index % 2 === 0}
            height={360}
            hAlign="left"
            vAlign="top"
          />
        </div>
      ))}
    </>
  );
};

export default Benefits;
