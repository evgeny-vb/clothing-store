import React from "react";
import {useAppSelector} from "../../hooks/reduxHooks";
import {selectCartIsEmpty, selectCartTotalAmount} from "../../store/cart/cart-selectors";

const CartTotal = () => {
  const cartTotalAmount = useAppSelector(selectCartTotalAmount);
  const cartIsEmpty = useAppSelector(selectCartIsEmpty);

  if (cartIsEmpty) return <div/>

  return (
    <div className="flex justify-between my-4 font-bold text-2xl">
      <span>Total</span>
      <span>${cartTotalAmount}</span>
    </div>
  );
};

export default CartTotal;