import React from "react";
import {cartActions} from "../../store/cart/cart-slice";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {selectCartTotalQuantity} from "../../store/cart/cart-selectors";
import {ReactComponent as CartIcon} from "../../assets/cartIcon.svg";

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
      <div className={`text-lg pre-md:transition-all pre-md:ease-out pre-md:duration-300 ${quantityClasses}`}>
        {totalQuantity}
      </div>
      <div className="p-2">
        <CartIcon className="w-5 h-5 md:w-6 md:h-6"/>
      </div>
    </div>
  );
};

export default CartButton;