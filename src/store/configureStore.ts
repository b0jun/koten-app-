import { configureStore } from '@reduxjs/toolkit';

import userSlice from '~/slices/userSlice';

const rootReducer = {
  user: userSlice,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    if (__DEV__) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const reduxFlipper = require('redux-flipper').default;
      return getDefaultMiddleware().concat(reduxFlipper());
    } else {
      return getDefaultMiddleware();
    }
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
