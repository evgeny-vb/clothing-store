import React from 'react';
import ProductCard from "./ProductCard";

type Props = {
  title: string
}

const CategoryPreview = ({title}: Props) => {
  return (
    <section className="py-10 flex flex-col items-center xl:items-start text-3xl">
      <h2>
        {title}
      </h2>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
        <ProductCard title="Product 1" price={50}/>
        <ProductCard title="Product 2" price={30}/>
        <ProductCard title="Product 3" price={120}/>
        <ProductCard title="Product 3" price={320}/>
      </div>
    </section>
  );
};

export default CategoryPreview;