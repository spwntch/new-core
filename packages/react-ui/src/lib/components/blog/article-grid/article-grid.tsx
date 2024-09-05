import { IMdxDoc } from '../../../types';
import { cn } from '../../../utils';
import { ArticleCard } from '../article-card/article-card';

interface Props {
  articles: IMdxDoc[];
  onClickArticle: (slug: string) => void;
}

export const ArticleGrid = ({
  articles: posts,
  onClickArticle,
}: Props) => {
  if (!posts?.length) return <div>no posts</div>;
  return (
    <div className={cn("px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8")}>
      {posts.map((post, index) => (
        <ArticleCard
          key={index}
          {...post.meta}
          onClick={onClickArticle}
          className="w-full"
        />
      ))}
    </div>
  );
};