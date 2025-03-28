import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "cart",
  initialState: {
    shopCart: {
      items: [],
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    // Get CartUser
    getCartStart: (state) => {
      state.shopCart.isFetching = true;
    },
    getCartSuccess: (state, action) => {
      state.shopCart.isFetching = false;
      state.shopCart.items = action.payload;
      state.shopCart.error = false;
    },
    getCartFailed: (state) => {
      state.shopCart.isFetching = false;
      state.shopCart.error = true;
    },
    //Add Cart
    addCartStart: (state) => {
      state.shopCart.isFetching = true;
    },
    addCartSuccess: (state, action) => {
      state.shopCart.isFetching = false;
      const existingItem = state.shopCart.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.shopCart.items.push({ ...action.payload, quantity: 1 });
      }
      state.shopCart.error = false;
    },
    addCartFailed: (state) => {
      state.shopCart.isFetching = false;
      state.shopCart.error = true;
    },
    //Delete Cart
    removeCartStart: (state) => {
      state.shopCart.isFetching = true;
    },
    removeCartSuccess: (state, action) => {
      state.shopCart.isFetching = false;
      state.shopCart.items = state.shopCart.items.filter(
        (item) => item.id !== action.payload
      );
      state.shopCart.error = false;
    },
    removeCartFailed: (state) => {
      state.shopCart.isFetching = false;
      state.shopCart.error = true;
    },
    //Update Quantity
    updateQuantityStart: (state) => {
      state.shopCart.isFetching = true;
    },
    updateQuantitySuccess: (state, action) => {
      state.shopCart.isFetching = false;
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem && quantity > 0) {
        existingItem.quantity = quantity;
      }
      state.shopCart.error = false;
    },
    updateQuantityFailed: (state) => {
      state.shopCart.isFetching = false;
      state.shopCart.error = true;
    },
  },
});

export const {
  getCartStart,
  getCartSuccess,
  getCartFailed,
  addCartStart,
  addCartSuccess,
  addCartFailed,
  removeCartStart,
  removeCartSuccess,
  removeCartFailed,
  updateQuantityStart,
  updateQuantitySuccess,
  updateQuantityFailed,
} = gamesSlice.actions;

export default gamesSlice.reducer;
