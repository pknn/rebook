import React from 'react';

import RoutesMap from './router/RoutesMap';
import Container from './lib/components/Container';
import Navigation from './lib/components/Navigation';

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Container>
        <RoutesMap />
      </Container>
    </>
  );
};

export default App;
