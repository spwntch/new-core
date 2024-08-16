import { ArrowBigLeft } from 'lucide-react';
// import { ImageContentSection } from '../../components';
import { Button } from '../../shadcn-ui';
import { IMdxDocMeta } from '../../../types';
import { cn } from '../../../utils';
import { FullImageHero } from '../../brochureware';

interface IArticleHeaderProps {
  meta: IMdxDocMeta;
  backTo?: { label?: string; href: string };
  onBackTo?: (href: string) => void;
  hAlign?: 'left' | 'center' | 'right';
  vAlign?: 'top' | 'middle' | 'bottom';
}

export const ArticleHeader = ({
  meta,
  backTo,
  onBackTo,
  hAlign = 'center',
  vAlign = 'middle',
}: IArticleHeaderProps) => {
  const { title, subtitle, coverImage, tags } = meta;
  return (
    <div className={cn('pb-4')}>
      {backTo && onBackTo && (
        <Button
          variant="ghost"
          className={cn('flex gap-2 pb-4')}
          onClick={() => onBackTo(backTo.href)}
        >
          <ArrowBigLeft className={cn('h-5 w-5')} aria-hidden="true" />
          <span>{backTo.label || 'Back'}</span>
        </Button>
      )}
      {coverImage && (
        <FullImageHero
          image={{ src: coverImage, darken: '25%' }}
          innerContent={{
            title: { content: title },
            subheading: subtitle && { content: subtitle },
            tags: tags,
          }}
          className="text-white h-[320px]"
          hAlign={hAlign}
          vAlign={vAlign}
          height="640px"
        />
      )}
    </div>
  );
};
