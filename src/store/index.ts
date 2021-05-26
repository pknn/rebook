import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerReducer, routerMiddleware } from 'router/index';

import { reducer as metadataReducer } from './features/metadataSlice';

const store = configureStore({
  reducer: {
    router: routerReducer,
    metadata: metadataReducer
  },
  middleware: getDefaultMiddleware().prepend(routerMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;
