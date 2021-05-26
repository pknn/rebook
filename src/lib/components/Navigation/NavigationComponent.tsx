import React from 'react';
import { Route } from 'router/routesMap';

interface NavigationProps {
  routes: Route[];
}

const NavigationComponent: React.FC<NavigationProps> = ({ routes }) => {
  const routesLink = routes.map((route) => <li>{route.title}</li>);
  return <div>{routesLink}</div>;
};

export default NavigationComponent;
