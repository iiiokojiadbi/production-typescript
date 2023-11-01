import { AboutPage } from '@pages/AboutPage';
import { MainPage } from '@pages/MainPage';
import type { RouteProps } from 'react-router-dom';

enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
};

const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  }
};

export { AppRoutes, RoutePath, routeConfig };
