import React, {useRef, useState} from "react";
import Input from "../UI/Input";
import Button, {BUTTON_TYPES} from "../UI/Button";

export type UserData = {name: string, email: string, address: string, postal: string}
type CreateOrder = (userData: UserData) => void

type Props = {
  createOrder: CreateOrder
}

const isEmpty = (value: string) => value.trim() === "";

const CheckoutForm = ({createOrder}: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const postalRef = useRef<HTMLInputElement>(null);

  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    email: true,
    address: true,
    postal: true
  });

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const enteredName = nameRef.current?.value || "";
    const enteredEmail = emailRef.current?.value || "";
    const enteredAddress = addressRef.current?.value || "";
    const enteredPostal = postalRef.current?.value || "";

    const isEnteredNameValid = !isEmpty(enteredName);
    const isEnteredEmailValid = !isEmpty(enteredEmail);
    const isEnteredAddressValid = !isEmpty(enteredAddress);
    const isEnteredPostalValid = !isEmpty(enteredPostal);

    setFormInputValidity({
      name: isEnteredNameValid,
      email: isEnteredEmailValid,
      address: isEnteredAddressValid,
      postal: isEnteredPostalValid
    });

    const isFormValid =
      isEnteredNameValid &&
      isEnteredEmailValid &&
      isEnteredAddressValid &&
      isEnteredPostalValid;

    if (!isFormValid) {
      return;
    }

    createOrder({
      name: enteredName,
      email: enteredEmail,
      address: enteredAddress,
      postal: enteredPostal
    })
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <Input id="name" type="text" label="Your Name" ref={nameRef} isValid={formInputValidity.name} classes="w-full md:w-1/2 px-3"/>
        <Input id="email" type="email" label="Email" ref={emailRef} isValid={formInputValidity.email} classes="w-full md:w-1/2 px-3"/>

      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <Input id="address" type="text" label="Address" ref={addressRef} isValid={formInputValidity.address} classes="w-full md:w-2/3 px-3"/>
        <Input id="postal" type="text" label="Postal Code" ref={postalRef} isValid={formInputValidity.postal} classes="w-full md:w-1/3 px-3"/>
      </div>
      <div className="flex justify-center mb-6">
        <Button type={BUTTON_TYPES.inverted} className="w-full md:w-1/2">
          Place Order
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;