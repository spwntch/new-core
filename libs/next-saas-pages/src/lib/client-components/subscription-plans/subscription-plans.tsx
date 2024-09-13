'use client';
import { cn, ContentContainer, IContent } from '@spwntch/react-ui';
import { PropsWithChildren } from 'react';

interface SubscriptionPlansProps {
  id: string;
  header: IContent;
  className?: string;
}

export const SubscriptionPlans = ({
  id,
  header,
  className,
  children,
}: SubscriptionPlansProps & PropsWithChildren) => {
  return (
    <div id={id} className={cn('flex-col pt-12 pb-28', className)}>
      <div className="md:container px-3">
        <ContentContainer innerContent={header} />
        <div>{children}</div>
      </div>
    </div>
  );
};
