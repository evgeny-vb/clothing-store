import React, {useEffect, useState} from "react";
import {useAppSelector} from "../../hooks/reduxHooks";
import {selectCategoriesMap} from "../../store/categories/categories-selectors";
import ProductCard from "../products/ProductCard";

type Props = {
  category: string
}

const Category = ({category}: Props) => {
  const categoriesMap = useAppSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);


  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="">
      {/*<h2 className="py-10 flex flex-col text-center xl:items-start text-3xl uppercase">*/}
      {/*  {category}*/}
      {/*</h2>*/}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {products && products.map((product) => <ProductCard key={product.id} product={product}/>
        )}
        <div className="h-screen"></div>
      </div>
    </div>
  );
};

export default Category;