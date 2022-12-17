import { apiSlice } from './api/api';
import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { userSlice } from './slices/user';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = () => useSelector((state: RootState) => state);
