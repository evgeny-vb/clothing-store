import React, {useEffect} from "react";
import {cartActions} from "../../store/cart/cart-slice";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import CartItem from "./CartItem";
import {selectCartState} from "../../store/cart/cart-selectors";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCartState);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const closeCartHandler = () => {
    dispatch(cartActions.close());
  };

  return (
    <Modal onClose={closeCartHandler}>
      <div className="h-full flex flex-col justify-between">
        {!cart.items.length && <div className="text-2xl text-center">Cart is empty</div>}
        {!!cart.items.length &&
          <div className="overflow-y-auto md:max-h-[50vh]">
            {cart.items.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem}/>
            ))}
          </div>
        }
        <div className="flex justify-between my-4 font-bold text-2xl">
          <span>Total</span>
          <span>${cart.totalAmount}</span>
        </div>
        <div className="flex justify-between">
          <Button onClick={closeCartHandler}>Go To Checkout</Button>
          <Button onClick={closeCartHandler}>Close</Button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;