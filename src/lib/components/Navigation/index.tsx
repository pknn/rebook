import React from 'react';
import routesMap from 'router/routesMap';
import NavigationComponent from './NavigationComponent';

const Navigation: React.FC = () => {
  return <NavigationComponent routes={routesMap} />;
};

export default Navigation;
