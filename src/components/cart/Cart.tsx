import React, {useCallback} from "react";
import {cartActions} from "../../store/cart/cart-slice";
import {useAppDispatch} from "../../hooks/reduxHooks";
import Modal from "../UI/Modal";
import CartTotal from "./CartTotal";
import CartButtons from "./CartButtons";
import CartItems from "./CartItems";
import {useHideBodyScroll} from "../../hooks/useHideBodyScroll";

const Cart = () => {
  useHideBodyScroll();
  const dispatch = useAppDispatch();

  const closeCartHandler = useCallback(() => {
    dispatch(cartActions.close());
  }, []);

  return (
    <Modal onClose={closeCartHandler}>
      <div className="h-full flex flex-col justify-between">
        <CartItems/>
        <CartTotal/>
        <CartButtons onClose={closeCartHandler}/>
      </div>
    </Modal>
  );
};

export default Cart;