import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from './lib/components/Container';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
