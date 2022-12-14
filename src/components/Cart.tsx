import React, {useEffect} from 'react';
import {cartActions} from "../store/cart/cart-slice";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items)

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset'
    };
  }, []);

  const toggleCartHandler = () => {
    dispatch(cartActions.toggle())
  }

  return (
    <div className="fixed top-0 left-0
      backdrop-blur-md z-10 overflow-y-auto
      border-b-2 w-full bg-white/10 h-screen w-screen"
         onClick={toggleCartHandler}
    >
      <div className="absolute bg-white w-96 h-screen inset-y-0 right-0 flex flex-col">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem}/>
        ))}
      </div>


    </div>
  );
};

export default Cart;