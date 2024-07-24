'use client';
import { IContent, IImage, ImageContentSection } from '@spwntch/shadcn-ui';
import React from 'react';

export interface IHeroProps {
  image: IImage;
  content: IContent;
}

const Hero = ({ image, content }: IHeroProps) => {
  return (
    <ImageContentSection
      image={image}
      innerContent={content}
      hero
      hAlign="left"
      vAlign="bottom"
      className="text-white"
    />
  );
};

export default Hero;
