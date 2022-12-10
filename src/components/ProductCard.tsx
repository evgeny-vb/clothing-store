import React from 'react';

type Props = {
  title: string,
  price: number
}

const ProductCard = ({title, price}: Props) => {
  return (
    <div className="bg-slate-100 p-2 max-w-xl text-lg">
      <img src="../../public/images/product.webp" alt="Product image"/>
      <div className="flex justify-between">
        <span>{title}</span>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;