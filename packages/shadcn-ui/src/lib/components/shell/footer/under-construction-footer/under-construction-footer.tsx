import React, { forwardRef } from 'react';
import { SocialIcon } from '../../social/social-icon/social-icon';
import { About } from '../sections/about/about';
import { Contact } from '../sections/contact/contact';
import { Legal } from '../sections/legal/legal';
import { useBrand } from '../../../../providers';

export interface IUnderConstructionFooterProps
  extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export const UnderConstructionFooter = forwardRef<
  HTMLElement,
  IUnderConstructionFooterProps
>(({ className, ...props }, ref) => {
  const { underConstructionUrl, social } = useBrand();

  return (
    <footer
      className={`relative isolate bg-background text-foreground pt-12 pb-3 ${className}`}
      ref={ref}
      {...props}
    >
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <About />
          <Contact />
          <div>
            <h3>Under Construction</h3>
            <div className="flex gap-16">
              <img
                width={100}
                height={25}
                alt="powered by spawntech"
                src={underConstructionUrl?.light}
                className="dark:hidden"
              />
              <img
                width={100}
                height={25}
                alt="powered by spawntech"
                src={underConstructionUrl?.dark}
                className="hidden dark:block"
              />
              {social?.linkedin && (
                <SocialIcon
                  platform="linkedin"
                  url={social.linkedin}
                  className="w-6 h-6"
                />
              )}
            </div>
          </div>
        </div>
        <hr />
        <Legal override={{ companyName: 'Spawntech', copyrightYear: '2024' }} />
      </div>
    </footer>
  );
});

UnderConstructionFooter.displayName = 'UnderConstructionFooter';
