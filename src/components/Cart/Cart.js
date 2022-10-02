import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const items = useSelector((state) => state.cartItems);
  const arr = Object.keys(items);
  const cartI = arr.map((i) =>
    items[i].quantity !== undefined ? (
      <CartItem
        item={{
          title: i,
          quantity: items[i].quantity,
          price: items[i].price,
          total: items[i].total,
        }}
        key={i}
      />
    ) : undefined
  );
  // console.log(cartI);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartI.map((item) => item && item)}</ul>
    </Card>
  );
};

export default Cart;
