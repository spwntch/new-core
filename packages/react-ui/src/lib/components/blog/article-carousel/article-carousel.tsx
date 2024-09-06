import React, { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../../shadcn-ui';
import { IMdxDoc } from '../../../types';
import Autoplay from 'embla-carousel-autoplay';
import { ArticleCard } from '../article-card/article-card';
import { cn } from '../../../utils';

interface Props {
  articles: IMdxDoc[];
  onClickArticle: (slug: string) => void;
  className?: string;
}

export const ArticleCarousel = ({
  articles,
  onClickArticle,
  className,
}: Props) => {
  const plugin = useRef(Autoplay({ delay: 0, stopOnMouseEnter:true }));
  if (!articles?.length) return null;
  const carouselOptions = { loop: true, duration: 10000 };
  return (
    <div className="container">
      <Carousel
        className={cn('w-full mx-auto', className)}
        opts={carouselOptions}
        plugins={[plugin.current]}
      >
        <CarouselContent className="py-3">
          {articles.map((article, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center basis-1/2   "
            >
              <div className="p-4 h-full w-full mx-2">
                <ArticleCard
                  key={index}
                  {...article.meta}
                  onClick={onClickArticle}
                  className="w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
