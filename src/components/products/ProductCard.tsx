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

  const addToCartHandler = () => {
    dispatch(cartActions.addItem(product))
  }

  return (
    <div className="relative max-w-xl text-lg flex flex-col items-center group">
      <div className="relative flex flex-col justify-center items-center">
        <img className="group-hover:opacity-80" src={product.imageUrl} alt="Product image"/>
        <Button
          onClick={addToCartHandler}
          className="absolute bottom-2 opacity-80 hidden group-hover:flex hover:opacity-100"
        >
          Add to cart
        </Button>
      </div>
      <footer className="w-full flex justify-between px-1">
        <span className="max-w-[75%] text-left">{product.name}</span>
        <span>${product.price}</span>
      </footer>

    </div>
  );
};

export default ProductCard;