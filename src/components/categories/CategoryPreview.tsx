import React from 'react';
import ProductCard from "../ProductCard";
import {Category} from "../../store/categories/categories-types";

const CategoryPreview = ({title, items}: Category) => {
  return (
    <section className="py-10 flex flex-col items-center xl:items-start text-3xl">
      <h2>
        {title}
      </h2>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
        {items
          .filter((item, id) => id< 4)
          .map((item) => <ProductCard key={item.id} product={item}/>)}
      </div>
    </section>
  );
};

export default CategoryPreview;