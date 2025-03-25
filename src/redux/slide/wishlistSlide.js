import { createSlice } from "@reduxjs/toolkit";

const wishlistSlide = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: {
      currentWhiList: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    //Add wishlistUser
    addStart: (state) => {
      state.wishlist.isFetching = true;
    },
    addSuccess: (state, action) => {
      state.wishlist.isFetching = false;
      state.wishlist.currentWhiList = action.payload;
      state.wishlist.error = false;
    },
    addFailed: (state) => {
      state.wishlist.error = true;
    },

    //Delete wishlistUser
    deleteStart: (state) => {
      state.wishlist.isFetching = true;
    },
    deleteSuccess: (state, action) => {
      state.wishlist.isFetching = false;
      state.wishlist.currentWhiList = action.payload;
      state.wishlist.error = false;
    },
    deleteFailed: (state) => {
      state.wishlist.error = true;
    },
    //Get wishlistUser
    getWishListStart: (state) => {
      state.currentWhiList.isFetching = true;
    },
    getWishListSuccess: (state, action) => {
      state.wishlist.isFetching = false;
      state.wishlist.currentWhiList = action.payload;
      state.wishlist.error = false;
    },
    getWishListFailed: (state) => {
      state.wishlist.isFetching = false;
      state.wishlist.error = true;
    },
  },
});

export const {
  addStart,
  addSuccess,
  addFailed,
  deleteStart,
  deleteSuccess,
  deleteFailed,
  getWishListStart,
  getWishListSuccess,
  getWishListFailed,
} = wishlistSlide.actions;

export default wishlistSlide.reducer;
