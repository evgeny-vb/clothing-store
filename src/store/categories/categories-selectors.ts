import {createSelector} from "@reduxjs/toolkit";
import {CategoriesMap} from "./categories-types";
import {RootState} from "../store";

export const selectCategoriesState = (state: RootState) => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesState],
  (categoriesState) => categoriesState.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoriesMap => categories.reduce((acc, category) => {
    const {title, items} = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CategoriesMap)
);