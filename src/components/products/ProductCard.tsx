import React from 'react';
import {useAppDispatch} from "../../hooks/reduxHooks";
import {cartActions} from "../../store/cart/cart-slice";
import {Product} from "../../store/categories/categories-types";

type Props = {
  product: Product
}

const ProductCard = ({product}: Props) => {
  const dispatch = useAppDispatch();

  const addToCardHandler = () => {
    dispatch(cartActions.addItem(product))
  }

  return (
    <div className="bg-gray-50 p-2 max-w-xl text-lg">
      <img src="../../../public/images/product.webp" alt="Product image"/>
      <div className="flex justify-between">
        <span>{product.name}</span>
        <button onClick={addToCardHandler}>Add to cart</button>
        <span>${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;