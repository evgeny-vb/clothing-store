import React from 'react';
import {useAppDispatch} from "../../hooks/reduxHooks";
import {cartActions} from "../../store/cart/cart-slice";
import {Product} from "../../store/categories/categories-types";
import Button from "../UI/Button";

type Props = {
  product: Product
}

const ProductCard = ({product}: Props) => {
  const dispatch = useAppDispatch();

  const addToCardHandler = () => {
    dispatch(cartActions.addItem(product))
  }

  return (
    <div className="relative max-w-xl text-lg flex flex-col items-center group">
      <img className="group-hover:opacity-80" src={product.imageUrl} alt="Product image"/>
      <footer className="w-full flex justify-between px-1">
        <span className="max-w-[75%]">{product.name}</span>
        <span>${product.price}</span>
      </footer>
      <Button
        onClick={addToCardHandler}
        className="absolute top-[75%] opacity-75 hidden group-hover:flex hover:opacity-100"
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;