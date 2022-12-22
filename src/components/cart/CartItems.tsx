import React from "react";
import CartItem from "./CartItem";
import {useAppSelector} from "../../hooks/reduxHooks";
import {selectCartIsEmpty, selectCartItems} from "../../store/cart/cart-selectors";

const CartItems = () => {
  const cartItems = useAppSelector(selectCartItems);
  const cartIsEmpty = useAppSelector(selectCartIsEmpty);

  if (cartIsEmpty)
    return <div className="text-2xl text-center">Cart is empty</div>

  return (
    <div className="overflow-y-auto mb-auto md:max-h-[50vh]">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem}/>
      ))}
    </div>
  );
};

export default CartItems;