import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../hooks/reduxHooks";
import {selectCategoriesMap} from "../store/categories/categories-selectors";

type ShopRouteParams = {
  category: string
}

const Shop = () => {
  const {category} = useParams<ShopRouteParams>() as ShopRouteParams
  const categoriesMap = useAppSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category]);


  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <div>
      {products && products.map((product) => <div key={product.id} className="bg-red-600">
          {product.name}
      </div>
      )}
      <div className="h-screen"></div>
    </div>
  );
};

export default Shop;