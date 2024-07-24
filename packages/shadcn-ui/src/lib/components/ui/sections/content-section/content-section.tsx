import React from 'react';
import { IContent } from '../../../../types';
import { cn } from '../../../../utils';
import { ContentContainer } from '../../containers';

interface IContentSectionProps {
  innerContent: IContent;
  className?: string;
  hAlign?: 'left' | 'center' | 'right';
  vAlign?: 'top' | 'middle' | 'bottom';
  height?: number;
  hero?: boolean;
}

export const ContentSection: React.FC<IContentSectionProps> = ({
  innerContent,
  hAlign,
  vAlign,
  className,
  height = 540,
  hero = false,
}) => {
  return (
    <div
      className={cn('w-full', { 'h-screen': hero }, className)}
      style={!hero ? { height: `${height}px` } : undefined}
    >
      <ContentContainer
        innerContent={innerContent}
        hAlign={hAlign}
        vAlign={vAlign}
      />
    </div>
  );
};

export default ContentSection;
