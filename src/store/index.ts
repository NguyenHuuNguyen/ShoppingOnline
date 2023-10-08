import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productSlice from './productSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;