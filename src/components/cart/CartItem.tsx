import React from "react";
import {CartItem as TCartItem} from "../../store/cart/cart-types";
import {cartActions} from "../../store/cart/cart-slice";
import {useAppDispatch} from "../../hooks/reduxHooks";

type Props = {
  item: TCartItem
}

const CartItem = ({item}: Props) => {
  const {imageUrl, name, price, quantity} = item;

  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItem(item));
  };

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeItem(item));
  };


  return (
    <div className="flex w-full h-44 mb-4">
      <img src={imageUrl} alt={name} className="w-[20%] object-contain"/>
      <div className="w-[80%] flex flex-col justify-around py-8 px-4">
        <span className="text-2xl">{name}</span>
        <div className="flex text-2xl justify-between">
          <div className="flex">
            <span className="cursor-pointer" onClick={removeFromCartHandler}>&#10094;</span>
            <span className="px-2">{quantity} </span>
            <span className="cursor-pointer" onClick={addToCartHandler}>&#10095;</span>
          </div>
          <span className="">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;