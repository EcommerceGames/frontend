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
  updateFailed,
  updateStart,
  updateSuccess,
} from "./userSlide";

import { userCall } from "../../api/user";
import toast from "react-hot-toast";
import {
  getDetailFailed,
  getDetailStart,
  getDetailSuccess,
  getFailed,
  getStart,
  getSuccess,
} from "./gameSlide";
import { gamesCall } from "../../api/games";
import {
  addFailed,
  addStart,
  addSuccess,
  deleteFailed,
  deleteStart,
  deleteSuccess,
  getWishListFailed,
  getWishListStart,
  getWishListSuccess,
} from "./wishlistSlide";
import { wishListCall } from "../../api/wishlist";

//register
export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await userCall.register(user);
    // console.log("res", res?.data);
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
    // console.log("res", res?.data);
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
    navigate("/signin");
    toast.success("Logout successfully");
  } catch (err) {
    dispatch(logOutFailed());
  }
};

//update
export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await userCall.update(user._id, user);
    // console.log("res", res?.data);
    dispatch(updateSuccess(res?.data));
    toast.success("UpdateUser successfully");
  } catch (err) {
    dispatch(updateFailed());
  }
};

//getGame
export const getGame = async (dispatch) => {
  dispatch(getStart());
  try {
    const res = await gamesCall.getAllGames();
    // console.log("res", res?.data);
    dispatch(getSuccess(res?.data));
  } catch (err) {
    dispatch(getFailed());
  }
};

//getDetailGame
export const getDetailGame = (id) => async (dispatch) => {
  dispatch(getDetailStart());
  try {
    const res = await gamesCall.getGames(id);
    dispatch(getDetailSuccess(res?.data));
  } catch (err) {
    dispatch(getDetailFailed());
  }
};

//addWishlist
export const addWishList = (data) => async (dispatch) => {
  dispatch(addStart());
  try {
    const res = await wishListCall.create(data);
    dispatch(addSuccess(res?.data));
    toast.success("Add to Wishlist successfully");
  } catch (err) {
    dispatch(addFailed());
    toast.error("Failed to add to Wishlist");
  }
};

//deleteWishlist
export const deleteWishList = (id) => async (dispatch) => {
  dispatch(deleteStart());
  try {
    const res = await wishListCall.delete(id);
    dispatch(deleteSuccess(res?.data));
    toast.success("DeleteWishList successfully");
  } catch (err) {
    dispatch(deleteFailed());
  }
};

//getWishList
export const getWishList = (id) => async (dispatch) => {
  dispatch(getWishListStart());
  try {
    const res = await wishListCall.getWishlist(id);
    dispatch(getWishListSuccess(res?.data));
  } catch (err) {
    dispatch(getWishListFailed());
  }
};
