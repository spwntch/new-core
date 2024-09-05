'use client';

import { FullImageHero, IContent, IImage, IMdxDoc } from '@spwntch/react-ui';
import { Blog } from '../../page-sections';

export interface ArticlesPageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
  blog: {
    content?: IContent;
    articles: IMdxDoc[];
  };
}

export const ArticlesPage = ({ hero, blog }: ArticlesPageProps) => {
  return (
    <div className="flex flex-col">
      <FullImageHero
        image={hero.image}
        innerContent={hero.content}
        className="text-white"
      />
      <Blog
        content={blog.content}
        articles={blog.articles}
        className="bg-muted"
      />
    </div>
  );
};
