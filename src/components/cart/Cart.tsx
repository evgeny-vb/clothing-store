import React, {useEffect} from 'react';
import {cartActions} from "../../store/cart/cart-slice";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import CartItem from "./CartItem";
import {selectCartItems} from "../../store/cart/cart-selectors";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems)

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset'
    };
  }, []);

  const closeCartHandler = () => {
    dispatch(cartActions.close())
  }

  return (
    <Modal onClose={closeCartHandler}>
      <div className="overflow-auto max-h-[40rem]">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem}/>
        ))}
      </div>
      <div className="flex justify-between my-4 font-bold text-2xl">
        <span>Total</span>
        <span>$999</span>
      </div>
      <div className="text-right">
        <Button onClick={closeCartHandler}>Close</Button>
      </div>
    </Modal>
  );
};

export default Cart;