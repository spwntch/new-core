import { useBrand } from '../../../../../providers';
import React, { forwardRef, PropsWithChildren } from 'react';

export interface IAboutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
}

export const About = forwardRef<HTMLDivElement, IAboutProps>(
  ({ className, ...props }, ref) => {
    const { about } = useBrand();

    return (
      <div className={`p-4 ${className}`} ref={ref} {...props}>
        <h3 className="mb-4 font-bold">{about?.title || 'About Us'}</h3>
        <div>
          {about?.body?.map((paragraph, index) => (
            <p key={index} className="mb-2 text-xs">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    );
  }
);

About.displayName = 'About';

export default About;
