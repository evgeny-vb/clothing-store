import React from 'react';
import {CartItem as TCartItem} from "../store/cart/cart-types";

type Props = {
  item: TCartItem
}

const CartItem = ({item: {id, name, price, quantity}}: Props) => {
  return (
    <div className="h-20 bg-red-600 my-4">
      {name}
      {price}
      {quantity}
    </div>
  );
};

export default CartItem;