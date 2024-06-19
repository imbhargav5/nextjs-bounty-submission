import { ExternalNavigation } from '@/components/NavigationMenu/ExternalNavbar/ExternalNavigation';
import './layout.css';
import { Footer } from '@/components/Footer/Footer';
import { AppProviders } from '../AppProviders';
export const dynamic = 'force-static';
export const revalidate = 60;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ExternalNavigation />
      <div className="min-h-[calc(100dvh-200px)]">{children}</div>
      <Footer />
    </div>
  );
}
