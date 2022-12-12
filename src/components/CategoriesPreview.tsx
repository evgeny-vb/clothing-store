import React from 'react';
import CategoryPreview from "./CategoryPreview";
import {useAppSelector} from "../hooks/reduxHooks";

const CategoriesPreview = () => {
  const {isLoading, categories} = useAppSelector(state => state.categories)

  return (
    <main className="pt-8 px-10 max-w-screen-2xl mx-auto">
      {isLoading && "LOADING"}
      {categories.map((category) => (
        <CategoryPreview key={category.title} title={category.title} items={category.items}/>
      ))}
      {/*<CategoryPreview title="Hats"/>*/}
      {/*<CategoryPreview title="Top"/>*/}
      {/*<CategoryPreview title="Bottom"/>*/}
      {/*<CategoryPreview title="Shoes"/>*/}
    </main>
  );
};

export default CategoriesPreview;