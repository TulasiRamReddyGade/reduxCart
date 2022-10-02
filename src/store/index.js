import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import cartItemsSlice from "./cartItems-slice";

const store = configureStore({
  reducer: { cart: cartSlice, cartItems: cartItemsSlice },
});

export default store;
