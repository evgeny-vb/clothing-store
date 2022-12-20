import React from "react";
import CategoryPreview from "./CategoryPreview";
import {useAppSelector} from "../../hooks/reduxHooks";
import {selectCategoriesState} from "../../store/categories/categories-selectors";
import Spinner from "../spinner";

const CategoriesPreview = () => {
  const {isLoading, categories} = useAppSelector(selectCategoriesState)

  return (
    <div className="px-2 md:px-10 max-w-screen-2xl mx-auto">
      {isLoading && <Spinner/>}
      {categories.map((category) => (
        <CategoryPreview key={category.title} title={category.title} order={category.order} items={category.items}/>
      ))}
    </div>
  );
};

export default CategoriesPreview;