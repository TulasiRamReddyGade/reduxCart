import { createSlice } from "@reduxjs/toolkit";
import { cartActions } from "./cart-slice";

const initialState = {
  size: 0,
  changed: false,
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
      state.changed = true;
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
      state.changed = true;
    },
    setState(state, action) {
      for (const key in Object.keys(action.payload)) {
        state[key] = action.payload[key];
      }
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const storeData = async () => {
      try {
        const response = await fetch(
          "https://react-http-5c191-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
          { method: "PUT", body: JSON.stringify(cart) }
        );
        if (!response.ok) {
          throw new Error("Sending cart data failled");
        }
        dispatch(
          cartActions.updateNavigation({
            status: "success",
            title: "success",
            message: "successfully updated",
          })
        );
      } catch (e) {
        dispatch(
          cartActions.updateNavigation({
            status: "error",
            title: "Error!",
            message: e.message,
          })
        );
      }
    };
    await storeData();
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://react-http-5c191-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
        );
        if (!response.ok) {
          throw new Error("error in loading the data");
        }
        const data = await response.json();
        return data;
        // for(const key:Object.keys(data)){
        //   print()
        // }
      } catch (e) {
        dispatch(
          cartActions.updateNavigation({
            status: "error",
            title: "Error!",
            message: e.message,
          })
        );
      }
    };

    const cartData = await fetchData();
    dispatch(cartItemsActions.setState(cartData));
  };
};

export const cartItemsActions = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
