import { INavBar, SiteShell } from '@/next-marketing-pages';
import { brand, NAV } from '../../config';



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
      brand={brand}
      navItems={NAV}
      navbar={navbar}
      cta={cta}
      hideShellPaths={['/try/icp-generator', '/buy/icp-generator']}
    >
      {children}
    </SiteShell>
  );
}
