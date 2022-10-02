import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "Test Item": { quantity: 3, total: 18, price: 6 },
  size: 1,
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem(state, action) {
      if (state[action.payload.title] === undefined) {
        state[action.payload.title] = {
          quantity: 1,
          price: action.payload.price,
          total: action.payload.price,
        };
        state.size = state.size + 1;
      } else {
        state[action.payload.title] = {
          quantity: state[action.payload.title].quantity + 1,
          price: action.payload.price,
          total: state[action.payload.title].total + action.payload.price,
        };
      }
    },
    removeItem(state, action) {
      state[action.payload.title] = {
        quantity: state[action.payload.title].quantity - 1,
        price: action.payload.price,
        total: state[action.payload.title].total - action.payload.price,
      };
      if (state[action.payload.title].quantity === 0) {
        state[action.payload.title].quantity = undefined;
        state.size = state.size - 1;
      }
    },
  },
});

export const cartItemsActions = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
