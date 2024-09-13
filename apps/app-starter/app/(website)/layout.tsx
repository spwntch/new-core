import { INavBar, SiteShell } from '@/next-marketing-pages';
import { BRAND } from '../../config/brand';
import { NAV } from '../../config/website/nav';
import '../global.css';

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbar: INavBar = {
    // floating: true,
    logoHeight: 52,
    disableThemeToggle: true,
  };

  const cta = {
    label: 'SIGN IN',
    href: '/dashboard',
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteShell brand={BRAND} navItems={NAV} navbar={navbar} cta={cta}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
