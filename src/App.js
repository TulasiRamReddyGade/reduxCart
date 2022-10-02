import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Cart from "./components/Cart/Cart";

import { useSelector } from "react-redux";

function App() {
  const isCartOpen = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cartItems);

  useEffect(() => {
    fetch(
      "https://react-http-5c191-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      { method: "PUT", body: JSON.stringify(cart) }
    );
  }, [cart]);

  return (
    <Layout>
      {isCartOpen && <Cart />}
      {!isCartOpen && <Products />}
    </Layout>
  );
}

export default App;
