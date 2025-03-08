import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    register: {
      isFetching: false,
      error: false,
      success: false,
    },
  },
  reducers: {
    //login
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    loginUpdateData: (state, action) => {
      state.login.currentUser = {
        ...state.login.currentUser,
        user: {
          ...state.login.currentUser?.user,
          ...action.payload,
        },
      };
    },
    //logout
    logOutSuccess: (state) => {
      state.login.isFetching = false;
      state.login.currentUser = null;
      state.login.error = false;
    },
    logOutFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    logOutStart: (state) => {
      state.login.isFetching = true;
    },
    //register
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerFailed: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
      state.register.success = false;
    },
    registerSuccess: (state) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = true;
    },
  },
});

export const {
  loginStart,
  loginFailed,
  loginSuccess,
  logOutStart,
  loginUpdateData,
  logOutSuccess,
  logOutFailed,
  registerStart,
  registerFailed,
  registerSuccess,
} = userSlice.actions;

export default userSlice.reducer;
