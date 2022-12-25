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

  const clearItemHandler = () => {
    dispatch(cartActions.clearItem(item));
  };

  return (
    <div className="flex w-full h-28 md:h-40 mb-1 md:mb-4">
      <img src={imageUrl} alt={name} className="w-[20%] object-contain"/>
      <div className="w-[80%] flex flex-col justify-around py-6 md:py-8 px-2 md:px-4">
        <span className="text-xl md:text-2xl">{name}</span>
        <div className="flex justify-between text-xl md:text-2xl">
          <span className="">${price}</span>
          <div className="flex">
            <span onClick={removeFromCartHandler} className="cursor-pointer">&#10094;</span>
            <span className="px-2">{quantity} </span>
            <span onClick={addToCartHandler} className="cursor-pointer">&#10095;</span>
          </div>
          <span onClick={clearItemHandler} className="cursor-pointer">&#10005;</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;