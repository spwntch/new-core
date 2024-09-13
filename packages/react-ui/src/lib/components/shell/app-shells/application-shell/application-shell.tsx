import { PropsWithChildren } from 'react';
import { SearchBar } from '../../../forms';
import { DesktopSideNavbar } from '../../nav';
import { MobileAppNavDrawer } from '../../nav/mobile-app-nav-drawer/mobile-app-nav-drawer';
import { SessionMenu } from '../../session-menu/session-menu';

export const ApplicationShell = ({ children }: PropsWithChildren) => {
  const handleSignOut = () => {
    console.log('Sign out');
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <DesktopSideNavbar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b border-b-muted bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <MobileAppNavDrawer />
          <div className="w-full flex-1">
            <SearchBar />
          </div>
          <SessionMenu
            avatarSrc="/images/team/dave-benjamin.webp"
            onSignOut={handleSignOut}
          />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default ApplicationShell;
