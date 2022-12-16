import React, {Fragment} from "react";
import CategoryPreview from "./CategoryPreview";
import {useAppSelector} from "../../hooks/reduxHooks";
import {selectCategoriesState} from "../../store/categories/categories-selectors";

const CategoriesPreview = () => {
  const {isLoading, categories} = useAppSelector(selectCategoriesState)

  return (
    <Fragment>
      {isLoading && "LOADING"}
      {categories.map((category) => (
        <CategoryPreview key={category.title} title={category.title} items={category.items}/>
      ))}
    </Fragment>
  );
};

export default CategoriesPreview;