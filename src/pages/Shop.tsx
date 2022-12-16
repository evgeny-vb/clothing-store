import React from 'react';
import {useParams} from "react-router-dom";
import Category from "../components/categories/Category";

type ShopRouteParams = {
  category: string
}

const Shop = () => {
  const {category} = useParams<ShopRouteParams>() as ShopRouteParams


  return (
    <div className="pt-8 px-10 max-w-screen-2xl mx-auto">
      <Category category={category}/>
    </div>
  );
};

export default Shop;