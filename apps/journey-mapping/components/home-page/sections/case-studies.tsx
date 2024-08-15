'use client';

import {
  ArticleGrid,
  cn,
  ContentContainer,
  IContent,
  IMdxDoc,
} from '@spwntch/react-ui';
import { useRouter } from 'next/navigation';

export interface CaseStudiesProps {
  content: IContent;
  articles: IMdxDoc[];
  className?: string;
}

const CaseStudies = ({ content, articles, className }: CaseStudiesProps) => {
  const router = useRouter();
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div className={cn('flex-col pt-12 pb-28', className)}>
      <div className="md:container px-3">
        <ContentContainer innerContent={header} />
        <ArticleGrid
          articles={articles}
          onClickArticle={(slug) => router.push(`/case-studies/${slug}`)}
        />
      </div>
    </div>
  );
};

export default CaseStudies;
