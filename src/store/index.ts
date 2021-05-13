import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { routerReducer, routerMiddleware } from '../lib/router';
import { reducer as metadataReducer } from './features/metadataSlice';

const store = configureStore({
  reducer: {
    router: routerReducer,
    metadata: metadataReducer
  },
  middleware: getDefaultMiddleware().prepend(routerMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;

export default store;
