// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || null,
  userId: localStorage.getItem('userId') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload); // Save the token to local storage
    },
    setUserid: (state, action) => {
      state.userId = action.payload;
      localStorage.setItem('userId', action.payload); // Save the token to local storage
    },
  },
});

export const { setToken,setUserid } = authSlice.actions;
export default authSlice.reducer;
