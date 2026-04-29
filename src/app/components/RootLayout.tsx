import { Outlet, ScrollRestoration } from 'react-router';
import { Navigation } from './Navigation';
import { EmergencyExit } from './EmergencyExit';
import { Footer } from './Footer';
import { LanguageProvider } from '../context/LanguageContext';

export function RootLayout() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <EmergencyExit />
        <ScrollRestoration />
      </div>
    </LanguageProvider>
  );
}