import { ExternalNavigation } from '@/components/NavigationMenu/ExternalNavbar/ExternalNavigation';
import { MobileMenuProvider } from '@/components/NavigationMenu/ExternalNavbar/MobileMenuContext';
import './layout.css';
import { Footer } from '@/components/Footer/Footer';
export const dynamic = 'force-static';
export const revalidate = 60;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <MobileMenuProvider>
      <ExternalNavigation />
      <div className="min-h-[calc(100dvh-200px)]  py-8">{children}</div>
      <Footer />
      </MobileMenuProvider>
    </div>
  );
}
