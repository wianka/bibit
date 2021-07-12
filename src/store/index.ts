import { configureStore } from '@reduxjs/toolkit'
import FilterSlice from '../reducers/Filter';

export const store = configureStore({
  reducer: {
    filter: FilterSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
