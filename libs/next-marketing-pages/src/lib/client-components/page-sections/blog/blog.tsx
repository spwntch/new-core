'use client';

import {
  ArticleGrid,
  cn,
  ContentContainer,
  IContent,
  IMdxDoc,
} from '@spwntch/react-ui';
import { useRouter } from 'next/navigation';

export interface BlogProps {
  content?: IContent;
  articles: IMdxDoc[];
  path?: string;
  className?: string;
}

export const Blog = ({ content, articles, path, className }: BlogProps) => {
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
        <ArticleGrid
          articles={articles}
          onClickArticle={(slug) => router.push(`/${path || 'blog'}/${slug}`)}
        />
      </div>
    </div>
  );
};
