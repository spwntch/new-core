import './global.css';

export const metadata = {
  title: 'A SaaS Starter',
  description: 'Created by Spawntech',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
