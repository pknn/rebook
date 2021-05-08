import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';

import store from './store';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
