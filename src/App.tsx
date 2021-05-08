import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './lib/components/Container';
import NotFoundPage from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Switch>
      <Container>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Container>
    </Switch>
  );
};

export default App;
