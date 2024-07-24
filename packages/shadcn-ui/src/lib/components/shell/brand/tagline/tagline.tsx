import React, { PropsWithChildren, forwardRef } from 'react';
import { useBrand } from '../../../../providers';
import { cn } from '../../../../utils';

export interface ITaglineProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
}

export const Tagline = forwardRef<HTMLDivElement, ITaglineProps>(
  ({ className, ...props }, ref) => {
    const { tagline } = useBrand();

    return (
      <p className={cn('text-sm', className)} ref={ref} {...props}>
        {tagline}
      </p>
    );
  }
);

Tagline.displayName = 'Tagline';

export default Tagline;
