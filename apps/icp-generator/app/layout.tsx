import { SiteShell } from '@/next-marketing-pages';
import { GoogleAnalytics } from '@/react-tracking';
import { brand } from '../config';
import './global.css';

export const metadata = {
  metadataBase:
    (process.env.NEXT_PUBLIC_SITE_URL &&
      new URL(process.env.NEXT_PUBLIC_SITE_URL)) ||
    '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbar = {
    floating: true,
    logoHeight: 52,
  };

  return (
    <html lang="en">
      <body>
        <SiteShell brand={brand} navbar={navbar}>
          {children}
          <GoogleAnalytics />
        </SiteShell>
      </body>
    </html>
  );
}
