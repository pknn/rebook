import React from 'react';
import { Route } from 'router/routesMap';
import { useLocation } from 'react-router-dom';

import Button from 'lib/components/Buttons';
import NavigationItem from './NavigationItem';

interface NavigationProps {
  routes: Route[];
}

const NavigationComponent: React.FC<NavigationProps> = ({ routes }) => {
  const location = useLocation();
  const routesLink = routes.map((route) => (
    <NavigationItem
      route={route}
      isCurrent={location.pathname === route.path}
    />
  ));
  return (
    <div className="bg-gray-50 px-4 py-6">
      <div className="container flex items-center">
        <span className="flex-1 font-black text-xl">Rebook</span>
        <nav>
          <ul className="flex">
            {routesLink}
            <Button>Hi</Button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavigationComponent;
