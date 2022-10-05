import React, { useEffect, Fragment } from "react";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Cart from "./components/Cart/Cart";

import { cartActions } from "./store/cart-slice";
import { useDispatch } from "react-redux";
import { sendCartData, fetchCartData } from "./store/cartItems-slice";

import Notification from "./components/UI/Notification";

import { useSelector } from "react-redux";

let isIntial = 0;

function App() {
  // console.log("out:-1");

  const isCartOpen = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cartItems);
  const notification = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification.status !== undefined && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
      <Layout>
        {isCartOpen && <Cart />}
        {!isCartOpen && <Products />}
      </Layout>
    </Fragment>
  );
}

export default App;
