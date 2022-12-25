import React from "react";
import {cartActions} from "../../store/cart/cart-slice";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {selectCartTotalQuantity} from "../../store/cart/cart-selectors";

const CartButton = () => {
  const dispatch = useAppDispatch();
  const totalQuantity = useAppSelector(selectCartTotalQuantity);

  const openCartHandler = () => {
    dispatch(cartActions.open());
  };

  const quantityClasses = !totalQuantity ? "w-0 translate-x-full opacity-0" : "px-2"

  return (
    <div className="justify-self-end cursor-pointer border-2 border-slate-800 rounded p-1 flex items-center"
         onClick={openCartHandler}>
      <div className={`text-lg transition-all ease-out duration-300 ${quantityClasses}`}>
        {totalQuantity}
      </div>
      <div className="p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
        </svg>
      </div>
    </div>
  );
};

export default CartButton;