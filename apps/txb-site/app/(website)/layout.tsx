import { INavBar, SiteShell } from '@/next-marketing-pages';
import { BRAND } from '../../config/brand';
import { NAV } from '../../config/website/nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbar: INavBar = {
    floating: true,
    logoHeight: 52,
    disableThemeToggle: true,
  };

  const cta = {
    label: 'SIGN IN',
    href: '/dashboard',
  };

  return (
    <SiteShell
      brand={BRAND}
      navItems={NAV}
      navbar={navbar}
      cta={cta}
      hideShellPaths={['/try/icp-generator', '/buy/icp-generator']}
    >
      {children}
    </SiteShell>
  );
}
