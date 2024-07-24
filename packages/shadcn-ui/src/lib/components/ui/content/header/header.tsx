import React from 'react';
import { cn } from '../../../../utils';
import { Tags } from '../tags/tags';
import HeaderTitle from './components/header-title';
import HeaderSubtitle from './components/header-subtitle';
// import { Tags } from '../../content/tags/tags';

interface IHeaderProps {
  hero?: boolean;
  titleContent?: string;
  titleClassName?: string;
  subTitleContent?: string;
  subTitleClassName?: string;
  tagsContent?: string[];
  tagsClassName?: string;
  alignment?: 'left' | 'center' | 'right';
}

export const Header: React.FC<IHeaderProps> = ({
  hero = false,
  titleContent,
  titleClassName,
  subTitleContent,
  subTitleClassName,
  tagsContent,
  tagsClassName,
  alignment = 'center',
}) => {
  const textAlignment =
    alignment === 'left'
      ? '!text-left'
      : alignment === 'right'
      ? '!text-right'
      : '!text-center';
  return (
    <div className={cn('mt-2 mb-4 max-w-2xl')}>
      <HeaderTitle
        hero={hero}
        text={titleContent}
        className={cn(textAlignment, titleClassName)}
      />
      <HeaderSubtitle
        hero={hero}
        text={subTitleContent}
        className={cn(textAlignment, subTitleClassName)}
      />

      {tagsContent && (
        <Tags
          tags={tagsContent}
          className={cn(
            'mt-4',
            {
              'justify-start': alignment === 'left',
              'justify-center': alignment === 'center',
              'justify-end': alignment === 'right',
            },
            tagsClassName
          )}
        />
      )}
    </div>
  );
};

export default Header;
