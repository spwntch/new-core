import { INavBar, SiteShell } from '@/next-marketing-pages';
import { brand, NAV } from '../config';
import './global.css';
import { useRouter } from 'next/navigation';

export const metadata = {
  metadataBase:
    (process.env.NEXT_PUBLIC_SITE_URL &&
      new URL(process.env.NEXT_PUBLIC_SITE_URL)) ||
    'http://localhost:3000',
};

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
    href: '/sign-in',
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteShell
          brand={brand}
          navItems={NAV}
          navbar={navbar}
          cta={cta}
          hideShellPaths={['/try/icp-generator', '/buy/icp-generator']}

        >
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
