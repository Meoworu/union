import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { homeReducer } from './home';
export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
  middleware: new MiddlewareArray().concat(logger),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
