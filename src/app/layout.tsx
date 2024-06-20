import '@/styles/globals.css';
import '@/styles/prosemirror.css';
import { GeistSans } from 'geist/font/sans';
import 'server-only';
import { AppProviders } from './AppProviders';

export const metadata = {
  title: 'Nextbase Bounty',
  description: 'Nextbase Bounty',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <head></head>
      <body className="dark:bg-[#020817] light:bg-white">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
