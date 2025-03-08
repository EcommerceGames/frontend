import {
  loginFailed,
  loginStart,
  loginSuccess,
  logOutFailed,
  logOutStart,
  logOutSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from "./userSlide";

import { userCall } from "../../api/user";
import toast from "react-hot-toast";

//register
export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await userCall.register(user);
    console.log("res", res?.data);
    localStorage.setItem("register", JSON.stringify(res));
    dispatch(registerSuccess());
    toast.success("Register successfully!");
    navigate("/signin");
  } catch (err) {
    dispatch(registerFailed());
    if (err.response) {
      const statusCode = err.response.status;
      const message = err.response.data.message;

      if (statusCode === 403) {
        toast.error("No access");
      } else if (statusCode === 404) {
        toast.error("Account does not exist!");
      } else if (statusCode === 401) {
        toast.error("Password is incorrect!");
      } else {
        toast.error("Register failed");
      }

      console.log({ message: message, status: statusCode });
    } else {
      toast.error("Register failed");
      console.log({ message: err.message });
    }
  }
};

//signin
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await userCall.signin(user);
    console.log("res", res?.data);
    localStorage.setItem("user", JSON.stringify(res));
    dispatch(loginSuccess(res?.data));
    navigate("/");
    toast.success("Log in successfully!");
  } catch (err) {
    dispatch(loginFailed());
    if (err.response) {
      const statusCode = err.response.status;
      const message = err.response.data.message;

      if (statusCode === 403) {
        toast.error("No access");
      } else if (statusCode === 404) {
        toast.error("Account does not exist!");
      } else if (statusCode === 401) {
        toast.error("Password is incorrect!");
      } else {
        toast.error("Login failed");
      }

      console.log({ message: message, status: statusCode });
    } else {
      toast.error("Login failed");
      console.log({ message: err.message });
    }
  }
};

//logout
export const logOut = async (dispatch, navigate) => {
  dispatch(logOutStart());
  try {
    const res = await userCall.logout();
    console.log("res", res?.data);
    dispatch(logOutSuccess());
    navigate("/login");
    toast.success("Logout successfully");
  } catch (err) {
    dispatch(logOutFailed());
  }
};
