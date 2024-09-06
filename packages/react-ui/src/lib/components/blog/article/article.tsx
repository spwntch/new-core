import { IMdxDoc } from '../../../types';
import { cn } from '../../../utils';
import HeaderSubheading from '../../brochureware/headers/basic-section-header/components/header-subheading';
import { ArticleHeader } from '../article-header/article-header';
import { ArticleMdx } from '../article-mdx/article-mdx';

interface IArticleProps extends IMdxDoc {
  backTo?: { label?: string; href: string };
  onBackTo?: (href: string) => void;
  onToc?: (href: string) => void;
  hAlign?: 'left' | 'center' | 'right';
  vAlign?: 'top' | 'middle' | 'bottom';
}

export const Article = ({
  backTo,
  meta,
  toc,
  content,
  onBackTo,
  onToc,
  hAlign = 'center',
  vAlign = 'middle',
}: IArticleProps) => {
  console.log(toc);
  return (
    <div>
      <ArticleHeader
        meta={meta}
        backTo={backTo}
        onBackTo={onBackTo}
        hAlign={hAlign}
        vAlign={vAlign}
      />
      <div className={cn('w-full', 'flex flex-col lg:flex-row gap-12')}>
        <div className="flex-1 w-full">
          <ArticleMdx
            meta={meta}
            toc={toc}
            content={content}
            onBackTo={onBackTo}
            onToc={onToc}
          />
        </div>
        <div className="max-w-md">
          {toc?.length && (
            <div className="hidden lg:block">
              <HeaderSubheading text="On This Page" className="mt-16 mb-12" />
              <div className="flex flex-col gap-4 ">
                {toc.map((item, idx) => (
                  <a
                    href={item.href}
                    key={idx}
                    className=" border-l-8 pl-4 hover:bg-muted py-2 font-semibold text-sm truncate max-w-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
          {meta.ads && (
            <>
              <HeaderSubheading text="Just For You" className="mt-16 mb-12" />
              <div className="flex flex-col gap-16">
                {meta.ads.map((ad, idx) => (
                  <a key={idx} href={ad.href || '/'} target="_blank" rel="noreferrer">
                    <img
                      className={cn('object-contain object-center rounded')}
                      alt={ad.alt || 'WebAdvert'}
                      src={ad.src}
                    />
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
