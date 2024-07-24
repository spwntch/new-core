import { ArrowBigLeft } from 'lucide-react';
import { ImageContentSection } from '../../ui';
import { Button } from '../../shadcn-ui';
import { IMdxDocMeta } from '../../../types';
import { cn } from '../../../utils';

interface IArticleHeaderProps extends IMdxDocMeta {
  backTo?: { label?: string; href: string };
  onBackTo?: (href: string) => void;
  hAlign?: 'left' | 'center' | 'right';
  vAlign?: 'top' | 'middle' | 'bottom';
}

export const ArticleHeader = ({
  backTo,
  title,
  subtitle,
  tags,
  coverImage,
  onBackTo,
  hAlign = 'center',
  vAlign = 'middle',
}: IArticleHeaderProps) => {
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
        <ImageContentSection
          image={{ src: coverImage, darken: true }}
          innerContent={{
            title: { content: title },
            subTitle: subtitle && { content: subtitle },
            tags: tags,
          }}
          className="text-white"
          hAlign={hAlign}
          vAlign={vAlign}
          height={300}
        />
      )}
    </div>
  );
};
