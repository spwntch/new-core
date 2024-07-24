import React, { forwardRef } from 'react';
import { LinkedIn } from './brands/linkedin';
import { Facebook } from './brands/facebook';
import { YouTube } from './brands/youtube';
import { Instagram } from './brands/instagram';
import { Twitter } from './brands/twitter';

export type SocialPlatform =
  | 'linkedin'
  | 'facebook'
  | 'youtube'
  | 'instagram'
  | 'twitter';

interface ISocialIconProps {
  platform: SocialPlatform;
  url: string;
  className?: string;
}

const platformIcons = {
  linkedin: LinkedIn,
  facebook: Facebook,
  youtube: YouTube,
  instagram: Instagram,
  twitter: Twitter,
};

export const SocialIcon = forwardRef<HTMLAnchorElement, ISocialIconProps>(
  ({ platform, url, className, ...props }, ref) => {
    const IconComponent = platformIcons[platform];

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`underline hover:text-blue-300 ${className}`}
        ref={ref}
        {...props}
      >
        <IconComponent className="w-6 h-6" />
      </a>
    );
  }
);

SocialIcon.displayName = 'SocialIcon';

export default SocialIcon;
