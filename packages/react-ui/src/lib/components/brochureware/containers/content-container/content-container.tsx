import { PropsWithChildren, ReactNode, forwardRef } from 'react';
import { IContent } from '../../../../types';
import {
  cn,
  getBodyContentAndClassName,
  getSubheadingContentAndClassName,
  getTagsContentAndClassName,
  getTitleContentAndClassName,
  getHeadingContentAndClassName,
  getBulletsContentAndClassName,
} from '../../../../utils';
import { Announcement } from '../../../components';
import { BasicSectionHeader } from '../../headers';
import ContentChildren from './content-children';
import { List, Paragraphs } from '../../text';

export interface ContentContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  innerContent: IContent;
  hero?: boolean;
  hAlign?: 'left' | 'center' | 'right';
  vAlign?: 'top' | 'middle' | 'bottom';
  className?: string;
}

export const ContentContainer = forwardRef<
  HTMLDivElement,
  ContentContainerProps
>(
  (
    {
      innerContent,
      hero = false,
      hAlign = 'center',
      vAlign = 'middle',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const alignmentClass = `${vAlign}-${hAlign}`;

    const { titleContent, titleClassName } = getTitleContentAndClassName(
      innerContent.title
    );
    const { headingContent, headingClassName } = getHeadingContentAndClassName(
      innerContent.heading
    );
    const { subheadingContent, subheadingClassName } =
      getSubheadingContentAndClassName(innerContent.subheading);
    const { bodyContent, bodyClassName } = getBodyContentAndClassName(
      innerContent.body
    );
    const { bulletsContent, bulletsClassName } = getBulletsContentAndClassName(
      innerContent.bullets
    );
    const { tagsContent, tagsClassName } = getTagsContentAndClassName(
      innerContent.tags
    );

    return (
      <div
        className={cn(
          'w-full h-full flex flex-col px-3 py-1 sm:px-1.5 md:px-6 lg:px-16 mx-auto ',
          {
            'justify-start items-start text-left':
              alignmentClass === 'top-left',
            'justify-start items-center text-center':
              alignmentClass === 'top-center',
            'justify-start items-end text-right':
              alignmentClass === 'top-right',
            'justify-center items-start text-left':
              alignmentClass === 'middle-left',
            'justify-center items-center text-center':
              alignmentClass === 'middle-center',
            'justify-center items-end text-right':
              alignmentClass === 'middle-right',
            'justify-end items-start text-left':
              alignmentClass === 'bottom-left',
            'justify-end items-center text-center':
              alignmentClass === 'bottom-center',
            'justify-end items-end text-right':
              alignmentClass === 'bottom-right',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {innerContent.announcement && (
          <Announcement
            message={innerContent.announcement.message}
            href={innerContent.announcement.href}
            className={innerContent.announcement.className}
          />
        )}
        <BasicSectionHeader
          hero={hero}
          titleContent={titleContent}
          titleClassName={titleClassName}
          headingContent={headingContent}
          headingClassName={headingClassName}
          subheadingContent={subheadingContent}
          subheadingClassName={subheadingClassName}
          tagsContent={tagsContent}
          tagsClassName={tagsClassName}
          alignment={hAlign}
        />
        {bodyContent && (
          <Paragraphs content={bodyContent} className={bodyClassName} />
        )}
        {innerContent.bullets && (
          <List content={bulletsContent} className={bulletsClassName} />
        )}
        {children && (
          <ContentChildren alignmentClass={alignmentClass}>
            {children}
          </ContentChildren>
        )}
      </div>
    );
  }
);

ContentContainer.displayName = 'ContentContainer';
