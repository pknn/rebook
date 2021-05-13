import React from 'react';
import { createBrowserHistory } from 'history';
import {
  connectRouter,
  routerMiddleware as getRouterMiddleware,
  ConnectedRouter as ConnectedRouterComponent
} from 'connected-react-router';

export const browserHistory = createBrowserHistory();
export const routerReducer = connectRouter(browserHistory);
export const routerMiddleware = getRouterMiddleware(browserHistory);
export const ConnectedRouter: React.FC = ({ children }) => (
  <ConnectedRouterComponent history={browserHistory}>
    {children}
  </ConnectedRouterComponent>
);
