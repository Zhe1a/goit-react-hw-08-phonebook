import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  LoginApi,
  logOutApi,
  RegisterApi,
} from 'redux/UserSlice/operations';

const handlePending = state => {
  state.isLoggedIn = false;
};

const handleRejected = (state, action) => {
  state.isLoggedIn = false;
  state.error = action.payload;
};
const User = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    error:null,
    isRefreshing: false,
  },
  extraReducers: {
    [RegisterApi.pending]: handlePending,
    [RegisterApi.rejected]: handleRejected,
    [RegisterApi.fulfiled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [LoginApi.pending]: handlePending,
    [LoginApi.rejected]: handleRejected,
    [LoginApi.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [logOutApi.pending]: handlePending,
    [logOutApi.rejected]: handleRejected,
    [logOutApi.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
    [fetchCurrentUser.pending]: handlePending,
    [fetchCurrentUser.rejected]: handleRejected,
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    },
  },
});

export const UserLogin = User.reducer;
