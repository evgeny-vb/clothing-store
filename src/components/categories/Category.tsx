import React, {useEffect, useState} from "react";
import {useAppSelector} from "../../hooks/reduxHooks";
import {selectCategoriesMap, selectCategoriesState} from "../../store/categories/categories-selectors";
import ProductCard from "../products/ProductCard";
import Spinner from "../spinner";

type Props = {
  category: string
}

const Category = ({category}: Props) => {
  const {isLoading} = useAppSelector(selectCategoriesState)
  const categoriesMap = useAppSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);


  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="mb-20">
      {isLoading && <Spinner/>}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {products && products.map((product) => <ProductCard key={product.id} product={product}/>
        )}
      </div>
    </div>
  );
};

export default Category;