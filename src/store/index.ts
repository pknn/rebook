import { configureStore } from '@reduxjs/toolkit';

import { reducer as MetadataReducer } from './features/metadataSlice';

const store = configureStore({
  reducer: {
    metadata: MetadataReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;

export default store;
