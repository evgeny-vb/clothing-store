import React from "react";
import {CartItem as TCartItem} from "../../store/cart/cart-types";

type Props = {
  item: TCartItem
}

const CartItem = ({item: {imageUrl, name, price, quantity}}: Props) => {
  return (
    <div className="flex w-full h-44 mb-4">
      <img src={imageUrl} alt={name} className="w-[20%] object-contain"/>
      <div className="w-[80%] flex flex-col justify-around py-8 px-4">
        <span className="text-3xl">{name}</span>
        <span className="text-2xl">${price}</span>
        <div className="flex text-2xl">
          <span className="cursor-pointer">&#10094;</span>
          <span className="text-xl">{quantity} </span>
          <span className="cursor-pointer">&#10095;</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;