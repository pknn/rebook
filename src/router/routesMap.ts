import HomePage from '../pages/Home';
import NotFoundPage from '../pages/NotFound';

export interface Route {
  path: string;
  title: string;
  exact?: boolean;
  component: React.FunctionComponent;
}

const routesMap: Route[] = [
  {
    path: '/',
    title: 'Home',
    exact: true,
    component: HomePage
  },
  {
    path: '/not-found',
    title: 'Not Found',
    component: NotFoundPage
  }
];

export default routesMap;
