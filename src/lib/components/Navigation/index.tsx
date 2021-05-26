import React from 'react';
import routesMap from 'router/routesMap';
import NavigationComponent from './NavigationComponent';

const Navigation: React.FC = () => {
  const filteredRoutesMap = routesMap.filter(
    (route) => route.title !== 'Not Found'
  );
  return <NavigationComponent routes={filteredRoutesMap} />;
};

export default Navigation;
