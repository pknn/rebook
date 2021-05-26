import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'router/routesMap';

interface NavigationItemProps {
  route: Route;
  isCurrent: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  route,
  isCurrent
}) => (
  <li
    className={`mx-2 text-base ${
      isCurrent ? 'text-yellow-500' : 'text-gray-600 hover:text-yellow-500'
    }`}
  >
    <Link to={route.path}>{route.title}</Link>
  </li>
);

export default NavigationItem;
