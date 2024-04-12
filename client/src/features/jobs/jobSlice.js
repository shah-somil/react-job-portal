// src/features/users/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    loggedIn: false,
    userDetails: null,
  },
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.userDetails = action.payload;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.userDetails = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
