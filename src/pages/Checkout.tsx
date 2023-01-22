import React, {Fragment, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {selectCartState} from "../store/cart/cart-selectors";
import CartItem from "../components/cart/CartItem";
import CheckoutForm, {UserData} from "../components/checkout/CheckoutForm";
import Modal from "../components/UI/Modal";
import Button from "../components/UI/Button";
import {cartActions} from "../store/cart/cart-slice";
import {useNavigate} from "react-router-dom";

const Checkout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cart = useAppSelector(selectCartState);
  const [oderModalOpened, setOderModalOpened] = useState(false);
  const [userData, setUserData] = useState<UserData>();

  const cartIsEmpty = cart.items.length === 0;

  const createOrder = (formData: UserData) => {
    setUserData(formData);
    setOderModalOpened(true);
  };

  const closeModalHandler = () => {
    dispatch(cartActions.emptyCart());
    setOderModalOpened(false);
    navigate("/");
  };

  return (
    <div className="mx-auto pre-md:px-3 md:max-w-2xl">
      <h2 className="text-center text-3xl md:text-5xl mt-4 mb-6 md:mb-12">Checkout</h2>
      {cartIsEmpty
        ?
        <div className="text-center text-2xl">
          Your cart is empty
        </div>
        : <Fragment>
          <div className="mb-10">
            {cart.items.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem}/>
            ))}
          </div>
          <div className="text-right text-3xl px-4 mb-16">
            Total: ${cart.totalAmount}
          </div>
          <CheckoutForm createOrder={createOrder}/>
        </Fragment>
      }
      {!cartIsEmpty && oderModalOpened && <Modal onClose={closeModalHandler}>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-2xl text-center py-4 mb-6">
            Order for {userData?.name} was successfully created!
          </div>
          <Button onClick={closeModalHandler}>Great!</Button>
        </div>
      </Modal>}
    </div>
  );
};

export default Checkout;