import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    value: localStorage.getItem('token') ?? '',
    islogin:localStorage.getItem("islogin")?? true,
  },
  reducers: {
    setToken: (state, action) => {
      localStorage.setItem('token', action.payload);
      state.value = action.payload;
    },
    removeToken: (state) => {
      localStorage.removeItem('token');
      state.value = '';
    },
  },
});

export const { setToken, removeToken } = authSlice.actions;
export default authSlice.reducer;
