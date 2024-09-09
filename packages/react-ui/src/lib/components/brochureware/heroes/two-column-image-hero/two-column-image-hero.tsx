import { useMediaQuery } from '@react-hooks-library/core';
import { forwardRef, HTMLAttributes } from 'react';
import { IContent, IImage } from '../../../../types';
import { cn } from '../../../../utils';
import { ButtonGroup } from '../../../components';
import { Button } from '../../../shadcn-ui';
import { ContentContainer, ImageContainer } from '../../containers';

export interface ITwoColumnImageHeroProps
  extends HTMLAttributes<HTMLDivElement> {
  navbarHeight?: number;
  image: IImage;
  innerContent: IContent;
  ribbon?: string;
  height?: string;
  hAlign?: 'left' | 'center' | 'right';
  vAlign?: 'top' | 'middle' | 'bottom';
  className?: string;
  onCtaClick?: (ctaIndex: number) => void;
}

export const TwoColumnImageHero = forwardRef<
  HTMLDivElement,
  ITwoColumnImageHeroProps
>(
  (
    {
      navbarHeight,
      image,
      innerContent,
      ribbon,
      height,
      hAlign,
      vAlign,
      children,
      className,
      onCtaClick,
      ...props
    },
    ref
  ) => {
    const isMobile = useMediaQuery('(max-width: 640px)');
    return (
      <div
        className={cn(
          'w-full sm:h-fit isolate relative overflow-hidden',
          height
            ? `h-[${height}] md:h-[${height}]`
            : navbarHeight
            ? `h-[calc(100vh-${navbarHeight}px)] md:h-[calc(100vh-${navbarHeight}px)]`
            : 'h-screen md:h-screen',
          className
        )}
        ref={ref}
        {...props}
      >
        {ribbon && (
          <div className="absolute right-0 top-0 h-24 w-24">
            <div className="absolute transform rotate-45 bg-accent text-center text-white text-2xl font-semibold py-1 right-[-80px] top-[100px] w-[400px]">
              {ribbon}
            </div>
          </div>
        )}
        <ImageContainer image={image}>
          <div className="flex h-full">
            <div>
              <ContentContainer
                innerContent={innerContent}
                hero={true}
                hAlign={hAlign}
                vAlign={isMobile ? 'middle' : vAlign}
                className={cn(isMobile && 'items-center', className)}
              >
                {innerContent.ctas?.length && (
                  <ButtonGroup className="sm:pb-6">
                    {innerContent.ctas.map((cta, index) => (
                      <Button
                        key={index}
                        size={
                          isMobile ? 'default' : cta.variant?.size || 'default'
                        }
                        variant={cta.variant?.variant || 'default'}
                        onClick={() => onCtaClick && onCtaClick(index)}
                      >
                        {cta.label}
                      </Button>
                    ))}
                  </ButtonGroup>
                )}
              </ContentContainer>
            </div>
            <div className="pt-32 flex items-center justify-center w-full">
              {children}
            </div>
          </div>
        </ImageContainer>
      </div>
    );
  }
);

export default TwoColumnImageHero;
