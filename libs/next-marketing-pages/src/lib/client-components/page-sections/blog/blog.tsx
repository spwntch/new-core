'use client';

import {
  ArticleGrid,
  ArticleCarousel,
  cn,
  ContentContainer,
  IContent,
  IMdxDoc,
} from '@spwntch/react-ui';
import { useRouter } from 'next/navigation';

export interface BlogProps {
  displayStyle?:'grid' | 'carousel';
  content?: IContent;
  articles: IMdxDoc[];
  path?: string;
  className?: string;
}

export const Blog = ({displayStyle = 'grid', content, articles, path, className }: BlogProps) => {
  const router = useRouter();
  const header: IContent = {
    heading: content?.heading,
    subheading: content?.subheading,
    body: content?.body,
  };
  return (
    <div className={cn('flex-col pt-12 pb-28', className)}>
      <div className="px-3">
        {content && <ContentContainer innerContent={header} />}
        {displayStyle=== 'carousel' && <ArticleCarousel
          articles={articles}
          onClickArticle={(slug) => router.push(`/${path || 'blog'}/${slug}`)}
        />}
        {displayStyle=== 'grid' && <ArticleGrid
          articles={articles}
          onClickArticle={(slug) => router.push(`/${path || 'blog'}/${slug}`)}
        />}
      </div>
    </div>
  );
};
