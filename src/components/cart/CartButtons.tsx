import React, {useCallback} from "react";
import Button, {BUTTON_TYPES} from "../UI/Button";
import {cartActions} from "../../store/cart/cart-slice";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useNavigate} from "react-router-dom";
import {selectCartIsEmpty} from "../../store/cart/cart-selectors";

type Props = {
  onClose: () => void
}

const CartButtons = ({onClose}: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartIsEmpty = useAppSelector(selectCartIsEmpty);

  const checkoutHandler = useCallback(() => {
    navigate("/checkout");
    dispatch(cartActions.close());
  }, []);

  return (
    <div className="flex justify-between">
      {cartIsEmpty && <div/>}
      {!cartIsEmpty &&
        <Button onClick={checkoutHandler} type={BUTTON_TYPES.inverted}>Go To Checkout</Button>}
      <Button onClick={onClose}>Close</Button>
    </div>
  );
};

export default CartButtons;