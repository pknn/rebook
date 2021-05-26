import React from 'react';
import { Link } from 'lib/types/navigation';

interface NavigationProps {
  links: Link[];
}

const NavigationComponent: React.FC<NavigationProps> = ({ links }) => {
  const linkComponents = links.map((link) => <li>{link.title}</li>);
  return <div>{linkComponents}</div>;
};

export default NavigationComponent;
