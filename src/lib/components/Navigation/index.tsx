import React from 'react';
import { Link } from 'lib/types/navigation';
import NavigationComponent from './NavigationComponent';

interface NavigationProps {
  links: Link[];
}

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  return <NavigationComponent links={links} />;
};

export default Navigation;
