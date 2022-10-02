import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false };

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    openCart(state) {
      state.showCart = true;
    },
    closeCart(state) {
      state.showCart = false;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
