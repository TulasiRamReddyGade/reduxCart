import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.showCart);
  const length = useSelector((state) => state.cartItems.size);

  const ButtonHandler = () => {
    if (isCartOpen) dispatch(cartActions.closeCart());
    else dispatch(cartActions.openCart());
  };

  return (
    <button className={classes.button} onClick={ButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{length}</span>
    </button>
  );
};

export default CartButton;
