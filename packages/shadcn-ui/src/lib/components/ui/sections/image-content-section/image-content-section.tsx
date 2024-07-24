import React from 'react';
import { IContent, IImage } from '../../../../types';
import { cn } from '../../../../utils';
import { ContentContainer, ImageContainer } from '../../containers';
import { ButtonGroup } from '../../groups';
import { Button } from '../../../shadcn-ui';

interface IImageContentBlockProps {
  image: IImage;
  innerContent?: IContent;
  className?: string;
  hAlign?: 'left' | 'center' | 'right';
  vAlign?: 'top' | 'middle' | 'bottom';
  height?: number;
  hero?: boolean;
}

export const ImageContentSection: React.FC<IImageContentBlockProps> = ({
  image,
  innerContent,
  hAlign,
  vAlign,
  className,
  height = 540,
  hero = false,
}) => {
  return (
    <div
      className={cn(
        'w-full isolate relative',
        hero && 'h-[calc(100vh-72px)]',
        className
      )}
      style={!hero ? { height: `${height}px` } : undefined}
    >
      <ImageContainer image={image}>
        {innerContent && (
          <ContentContainer
            innerContent={innerContent}
            hero={hero}
            hAlign={hAlign}
            vAlign={vAlign}
          >
            {innerContent.ctas?.length && (
              <ButtonGroup>
                {innerContent.ctas.map((cta) => (
                  <Button
                    size={cta.variant?.size || 'default'}
                    variant={cta.variant?.variant || 'default'}
                  >
                    {cta.label}
                  </Button>
                ))}
              </ButtonGroup>
            )}
          </ContentContainer>
        )}
      </ImageContainer>
    </div>
  );
};

export default ImageContentSection;
