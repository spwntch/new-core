import { PropsWithChildren, useEffect, useState } from 'react';
import { cn } from '../../../../utils';
import { RegularFooter, UnderConstructionFooter } from '../../footer';
import { DesktopTopNavbar } from '../../nav';

export interface SiteShellProps {
  navbar: {
    logoHeight?: number;
    alignment?: 'start' | 'center' | 'end';
    autoHide?: boolean;
    className?: string;
  };
  underContruction?: boolean;
  githubUrl?: string;
  onNavbarLinkTo: (href: string) => void;
}

export const SiteShellStarter = ({
  underContruction,
  navbar,
  githubUrl,
  onNavbarLinkTo,
  children,
}: SiteShellProps & PropsWithChildren) => {
  const [scrollData, setScrollData] = useState({ y: 0, lastY: 0 });
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((prev) => ({
        y: window.scrollY,
        lastY: prev.y,
      }));
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // console.log(scrollData);
    if (scrollData.y > 500 || scrollData.y > scrollData.lastY) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [scrollData]);

  return (
    <div className="h-screen ">
      <DesktopTopNavbar
        className={cn(
          'transition duration-500 ease-in-out',
          showNavbar && 'transform translate-y-[-100%]',
          navbar?.className
        )}
        navAlignment={navbar?.alignment}
        logoHeight={navbar?.logoHeight}
        githubUrl={githubUrl}
        onLinkTo={onNavbarLinkTo}
      />

      <main className="">{children}</main>
      {underContruction ? <UnderConstructionFooter /> : <RegularFooter />}
    </div>
  );
};

export default SiteShellStarter;
