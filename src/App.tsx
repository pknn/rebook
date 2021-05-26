import React from 'react';
import { Routes } from 'router/index';
import ErrorBoundary from 'lib/errorBoundary';
import Container from 'lib/components/Container';
import Navigation from 'lib/components/Navigation';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Navigation />
      <Container>
        <Routes />
      </Container>
    </ErrorBoundary>
  );
};

export default App;
