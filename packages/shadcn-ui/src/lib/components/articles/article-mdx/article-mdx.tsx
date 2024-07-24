import { cn } from '../../../utils';
import { IMdxDoc } from '../../../types';

interface IArticleProps extends IMdxDoc {
  backTo?: { label?: string; href: string };
  onBackTo?: (href: string) => void;
  onToc?: (href: string) => void;
}

export const ArticleMdx = ({
  backTo,
  // meta,
  toc,
  content,
  onBackTo,
}: // onToc,
IArticleProps) => {
  return (
    <div className={cn('w-full flex flex-col mx-auto')}>
      <article className={cn('py-1 md:py-4 px-2 flex mt-8')}>
        {backTo && onBackTo && (
          <button onClick={() => onBackTo(backTo.href)}>
            {backTo.label || 'Back'}
          </button>
        )}
        <div
          className={cn(
            'prose max-w-none text-foreground prose-headings:text-foreground prose-strong:text-foreground'
          )}
        >
          {content}
        </div>
        {toc?.length && (
          <div className={cn('flex-1 pl-8')}>{/* TOC content */}</div>
        )}
      </article>
    </div>
  );
};
