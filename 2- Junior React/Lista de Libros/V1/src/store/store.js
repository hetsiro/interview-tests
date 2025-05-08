import { configureStore } from '@reduxjs/toolkit'
import librarySlice from './slice/librarySlice';

export const store = configureStore({
  reducer: {
    library: librarySlice
  },
})