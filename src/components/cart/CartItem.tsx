import React from 'react';
import {CartItem as TCartItem} from "../../store/cart/cart-types";

type Props = {
  item: TCartItem
}

const CartItem = ({item: {imageUrl, name, price, quantity}}: Props) => {
  return (
    <div className="flex w-full h-44 mb-4">
      <img src={imageUrl} alt={name} className="w-2/5 h-auto"/>
      <div className="flex flex-col justify-center">
        <span className="text-3xl">{name}</span>
        <span className="text-xl">{quantity} x ${price}</span>
      </div>
    </div>
  );
};

export default CartItem;