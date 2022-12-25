import React from 'react';
import {useParams} from "react-router-dom";
import Category from "../components/categories/Category";

type ShopRouteParams = {
  category: string
}

const Shop = () => {
  const {category} = useParams<ShopRouteParams>() as ShopRouteParams


  return (
    <Category category={category}/>
  );
};

export default Shop;