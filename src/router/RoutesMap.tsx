import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/Home';
import NotFoundPage from '../pages/NotFound';

const RoutesMap: React.FunctionComponent = () => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route path="*">
      <NotFoundPage />
    </Route>
  </Switch>
);

export default RoutesMap;
