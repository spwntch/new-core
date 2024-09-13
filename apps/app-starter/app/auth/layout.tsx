import { AuthShell } from '@/next-saas-pages';
import { BRAND } from '../../config/brand';
import '../global.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthShell brand={BRAND}>{children}</AuthShell>
      </body>
    </html>
  );
}
