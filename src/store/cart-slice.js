import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  status: undefined,
  title: undefined,
  message: undefined,
};

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
    updateNavigation(state, action) {
      state.status = action.payload.status;
      state.message = action.payload.message;
      state.title = action.payload.title;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
