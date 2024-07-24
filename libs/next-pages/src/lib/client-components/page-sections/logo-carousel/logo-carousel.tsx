'use client';
import { LogoCarousel as SpwnLogoCarousel } from '@spwntch/shadcn-ui';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ILogoCarouselProps {
  title?: string;
  logos: string[];
  className?: string;
}

const LogoCarousel = ({ title, logos, className }: ILogoCarouselProps) => {
  return <SpwnLogoCarousel title={title} logos={logos} className={className} />;
};

export default LogoCarousel;
