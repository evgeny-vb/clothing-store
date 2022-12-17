import React from "react";
import ProductCard from "../products/ProductCard";
import {Category} from "../../store/categories/categories-types";
import {Link} from "react-router-dom";

const CategoryPreview = ({title, items}: Category) => {
  return (
    <section className="mb-20 flex flex-col text-center lg:text-left text-3xl">
      <h2 className="pb-8">
        <Link to={`shop/${title.toLowerCase()}`}>
          {title}
        </Link>
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {items
          .filter((item, id) => id < 4)
          .map((item) => <ProductCard key={item.id} product={item}/>)}
      </div>
    </section>
  );
};

export default CategoryPreview;