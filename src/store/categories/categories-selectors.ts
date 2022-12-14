import {createSelector} from "@reduxjs/toolkit";
import {CategoriesMap} from "./categories-types";
import {RootState} from "../store";

export const categoriesMap = createSelector(
  (state: RootState) => state.categories.categories,
  (categories): CategoriesMap => categories.reduce((acc, category) => {
    const {title, items} = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CategoriesMap)
)