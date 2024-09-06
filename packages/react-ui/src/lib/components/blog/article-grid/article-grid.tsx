import { IMdxDoc } from '../../../types';
import { cn } from '../../../utils';
import { ArticleCard } from '../article-card/article-card';

interface Props {
  articles: IMdxDoc[];
  onClickArticle: (slug: string) => void;
}

export const ArticleGrid = ({
  articles,
  onClickArticle,
}: Props) => {
  if (!articles?.length) return <div>no articles</div>;
  return (
    <div className={cn("px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8")}>
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          {...article.meta}
          onClick={onClickArticle}
          className="w-full"
        />
      ))}
    </div>
  );
};