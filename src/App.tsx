import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Container from 'lib/components/Container';

import RoutesMap from './router/RoutesMap';
import ErrorPage from './pages/Error';

const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Container>
        <RoutesMap />
      </Container>
    </ErrorBoundary>
  );
};

export default App;
