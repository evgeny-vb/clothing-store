import React, {useEffect} from 'react';
import {cartActions} from "../store/cart-slice";
import {useAppDispatch} from "../hooks/reduxHooks";

const Cart = () => {
  const dispatch = useAppDispatch();

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
      backdrop-blur-md z-10
      border-b-2 w-full bg-white/10 h-screen w-screen"
         onClick={toggleCartHandler}
    >
      <div className="absolute bg-white w-96 h-screen inset-y-0 right-0 flex flex-col">
        <div className="h-20 bg-red-600 my-4">Item 1</div>
        <div className="h-20 bg-red-600 my-4">Item 2</div>
        <div className="h-20 bg-red-600 my-4">Item 3</div>
      </div>
    </div>
  );
};

export default Cart;