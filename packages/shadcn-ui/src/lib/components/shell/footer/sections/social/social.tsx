import React, { forwardRef, PropsWithChildren } from 'react';
import { useBrand } from '../../../../../providers';
import { SocialIcon, SocialPlatform } from '../../../social';

export interface ISocialProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
}

export const Social = forwardRef<HTMLDivElement, ISocialProps>(
  ({ className, ...props }, ref) => {
    const { social } = useBrand();

    return (
      <div className={`p-4 ${className}`} ref={ref} {...props}>
        <h3 className="mb-4 font-bold">Follow Us</h3>
        <ul className="flex space-x-4 text-sm leading-relaxed">
          {social &&
            Object.keys(social).map((platform) => (
              <li key={platform}>
                <SocialIcon
                  platform={platform as SocialPlatform}
                  url={social[platform]}
                />
              </li>
            ))}
        </ul>
      </div>
    );
  }
);

Social.displayName = 'Social';

export default Social;
