import classes from "./CartItem.module.css";
import { cartItemsActions } from "../../store/cartItems-slice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(cartItemsActions.addItem({ title, price }));
  };

  const removeHandler = () => {
    dispatch(cartItemsActions.removeItem({ title, price }));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
