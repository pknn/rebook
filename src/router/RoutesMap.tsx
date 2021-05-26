import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from '../pages/Home';
import NotFoundPage from '../pages/NotFound';

const RoutesMap: React.FunctionComponent = () => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route path="/not-found">
      <NotFoundPage />
    </Route>
    <Route path="*">
      <Redirect to="/not-found" />
    </Route>
  </Switch>
);

export default RoutesMap;
