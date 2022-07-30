import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import registerReducer from '../slice/registerReducer';

export const store = configureStore({
  reducer: {
    employees: registerReducer
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;