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
      state.user.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.user.isFetching = false;
      state.user.currentUser = action.payload;
      state.user.error = false;
    },
    loginFailed: (state) => {
      state.user.isFetching = false;
      state.user.error = true;
    },
    loginUpdateData: (state, action) => {
      state.user.currentUser = {
        ...state.user.currentUser,
        user: {
          ...state.user.currentUser?.user,
          ...action.payload,
        },
      };
    },
    //logout
    logOutSuccess: (state) => {
      state.user.isFetching = false;
      state.user.currentUser = null;
      state.user.error = false;
    },
    logOutFailed: (state) => {
      state.user.isFetching = false;
      state.user.error = true;
    },
    logOutStart: (state) => {
      state.user.isFetching = true;
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
