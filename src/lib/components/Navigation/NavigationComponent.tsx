import React from 'react';
import routesMap from 'router/routesMap';

const NavigationComponent: React.FC = () => {
  const linkComponents = routesMap.map((route) => <li>{route.title}</li>);
  return <div>{linkComponents}</div>;
};

export default NavigationComponent;
