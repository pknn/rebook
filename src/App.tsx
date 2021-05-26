import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Container from 'lib/components/Container';
import { Routes } from 'router/index';

import ErrorPage from './pages/Error';

const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Container>
        <Routes />
      </Container>
    </ErrorBoundary>
  );
};

export default App;
