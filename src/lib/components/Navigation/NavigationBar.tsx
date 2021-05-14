import React from 'react';

import Container from '../Container';

const NavigationBarComponent: React.FunctionComponent = () => {
  return (
    <div className="bg-blue-400">
      <Container flex padding={{ all: 'm' }}>
        <div className="flex-1">
          <h1>Rebook</h1>
        </div>
        <nav>
          <ul className="flex">
            <li>Home</li>
            <li>Create Review</li>
            <li>Browse</li>
            <li>Member</li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default NavigationBarComponent;
