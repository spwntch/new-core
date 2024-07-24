import React, { forwardRef, ReactNode } from 'react';
import { cn } from '../../../../utils';

export interface IMultiPanelLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  containers?:
    | [ReactNode, ReactNode]
    | [ReactNode, ReactNode, ReactNode]
    | [ReactNode, ReactNode, ReactNode, ReactNode];
  flip?: boolean;
  mainPaneCoverage?: number; // Changed to mainPaneCoverage
  orientation?: 'horizontal' | 'vertical';
}

export const MultiPanelLayout = forwardRef<
  HTMLDivElement,
  IMultiPanelLayoutProps
>(
  (
    {
      className,
      containers,
      flip = false,
      mainPaneCoverage = 50,
      orientation = 'horizontal',
      ...props
    },
    ref
  ) => {
    const isHorizontal = orientation === 'horizontal';

    const mainBlockStyle: React.CSSProperties = isHorizontal
      ? { width: `${mainPaneCoverage}%`, order: flip ? 1 : 0 }
      : { height: `${mainPaneCoverage}%`, order: flip ? 1 : 0 };

    const subBlockContainerStyle: React.CSSProperties = isHorizontal
      ? {
          flex: `1 1 calc(100% - ${mainPaneCoverage}%)`,
          display: 'flex',
          flexDirection: 'column',
        }
      : {
          flex: `1 1 calc(100% - ${mainPaneCoverage}%)`,
          display: 'flex',
          flexDirection: 'row',
        };

    return (
      <div
        className={cn(
          'flex w-full h-full',
          isHorizontal ? 'flex-row' : 'flex-col',
          className
        )}
        ref={ref}
        {...props}
      >
        <div
          className="flex items-center justify-center h-full w-full"
          style={mainBlockStyle}
        >
          {containers ? containers[0] : 'Main Block'}
        </div>
        <div className="flex flex-col  h-full" style={subBlockContainerStyle}>
          {containers &&
            containers.slice(1).map((container, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-full w-full"
              >
                {container}
              </div>
            ))}
        </div>
      </div>
    );
  }
);

MultiPanelLayout.displayName = 'MultiPanelLayout';

export default MultiPanelLayout;
