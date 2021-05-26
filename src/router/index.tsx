import React from 'react';
import { createBrowserHistory } from 'history';
import {
  connectRouter,
  routerMiddleware as getRouterMiddleware,
  ConnectedRouter as ConnectedRouterComponent
} from 'connected-react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

import routesMap from './routesMap';

export const browserHistory = createBrowserHistory();
export const routerReducer = connectRouter(browserHistory);
export const routerMiddleware = getRouterMiddleware(browserHistory);
export const ConnectedRouter: React.FC = ({ children }) => (
  <ConnectedRouterComponent history={browserHistory}>
    {children}
  </ConnectedRouterComponent>
);

export const Routes: React.FunctionComponent = () => (
  <Switch>
    {routesMap.map((route) => (
      <Route key={route.path} path={route.path} exact={route.exact}>
        <route.component />
      </Route>
    ))}
    <Route path="*">
      <Redirect to="/not-found" />
    </Route>
  </Switch>
);
