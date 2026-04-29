import { createBrowserRouter } from 'react-router';
import { RootLayout } from './components/RootLayout';
import { HomePage } from './pages/HomePage';
import { YourRightsPage } from './pages/YourRightsPage';
import { KnowYourCampusPage } from './pages/KnowYourCampusPage';
import { SocialMediaGuidePage } from './pages/SocialMediaGuidePage';
import { GoAnonymousPage } from './pages/GoAnonymousPage';
import { OptOutToolkitPage } from './pages/OptOutToolkitPage';
import { QuickExitPage } from './pages/QuickExitPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'your-rights', Component: YourRightsPage },
      { path: 'know-your-campus', Component: KnowYourCampusPage },
      { path: 'social-media', Component: SocialMediaGuidePage },
      { path: 'go-anonymous', Component: GoAnonymousPage },
      { path: 'opt-out', Component: OptOutToolkitPage },
      { path: 'quick-exit', Component: QuickExitPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);
