'use client';
import { PropsWithChildren, forwardRef } from 'react';

export const UnderConstruction = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children, ...props }, ref) => {
    return (
      <div
        className="m-4 p-4 h-full flex flex-col items-center justify-center border-4 border-dashed border-muted text-muted-foreground"
        ref={ref}
        {...props}
      >
        <h2 className="border-b pb-2 text-3xl font-semibold ">
          Under Construction
        </h2>
        <div className="w-full pt-8 px-4">{children}</div>
      </div>
    );
  }
);

UnderConstruction.displayName = 'UnderConstruction';
