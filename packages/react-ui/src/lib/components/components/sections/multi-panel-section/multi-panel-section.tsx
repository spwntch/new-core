import { forwardRef } from 'react';
import { cn } from '../../../../utils';
import { IMultiPanelLayoutProps, MultiPanelLayout } from '../../layouts';

export interface IMultiPanelSectionProps extends IMultiPanelLayoutProps {
  className?: string;
  height?: number; // New height prop
  hero?: boolean; // New hero prop
}

export const MultiPanelSection = forwardRef<
  HTMLDivElement,
  IMultiPanelSectionProps
>(
  (
    {
      className,
      containers,
      flip = false,
      mainPaneCoverage = 50,
      orientation = 'horizontal',
      height = 540, // Default height set to 540
      hero = false, // Default hero to false
      ...props
    },
    ref
  ) => {
    return (
      <MultiPanelLayout
      className={cn("w-full", hero && "h-screen", className)}
      style={!hero ? { height: `${height}px` } : undefined} // Apply height only if hero is false
      flip={flip}
      mainPaneCoverage={mainPaneCoverage}
      orientation={orientation}
      containers={containers}
      ref={ref}
      {...props}
    />
    );
  }
);

MultiPanelSection.displayName = 'MultiPanelSection';

export default MultiPanelSection;
