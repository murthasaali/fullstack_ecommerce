// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'

const store = configureStore({
  reducer: {
    counter: authReducer,
  },
});

export default store;
