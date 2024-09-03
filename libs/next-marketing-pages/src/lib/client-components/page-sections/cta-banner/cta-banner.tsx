'use client';
import { cn, IContent, SimpleJustifiedBanner } from '@spwntch/react-ui';

type CtaBannerProps = {
  content: IContent;
  className?: string;
  onCtaClick: () => void;
};

export const CtaBanner = ({
  content,
  className,
  onCtaClick,
}: CtaBannerProps) => {
  return (
    <div className={cn('flex-col pt-12 pb-12 ', className)}>
      <div className="md:container px-3">
        <SimpleJustifiedBanner innerContent={content} onCtaClick={onCtaClick} />
      </div>
    </div>
  );
};
