import { forwardRef } from 'react';
import { useBrand } from '../../../../providers';
import { cn } from '../../../../utils';

export interface ILogoProps {
  className?: string;
  variant?: 'logo' | 'mark';
  width?: number;
  height?: number;
  onClick?: () => void;
}

export const Logo = forwardRef<HTMLImageElement, ILogoProps>(
  ({ className, variant = 'logo', width, height = 40, onClick }, ref) => {
    const brand = useBrand();
    const altText = variant === 'logo' ? 'Logo' : 'Mark';
    const logo = variant === 'logo' ? brand.logoUrl : brand.markUrl;
    width = variant === 'logo' ? width || height * 4 : height;

    return (
      <div className={cn(' w-fit h-fit', className)} onClick={onClick}>
        {logo?.light && (
          <img
            ref={ref}
            width={width}
            height={height}
            alt={altText}
            src={logo.light}
            className="dark:hidden"
          />
        )}
        {logo?.dark && (
          <img
            ref={ref}
            width={width}
            height={height}
            alt={altText}
            src={logo.dark}
            className="hidden dark:block"
          />
        )}
      </div>
    );
  }
);
