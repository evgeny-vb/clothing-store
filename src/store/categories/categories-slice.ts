import {CategoriesState} from "./categories-types";
import {createSlice} from "@reduxjs/toolkit";
import {DUMB_DATA_CAT} from "../DUMB_DATA";

const initialState: CategoriesState = {
  isLoading: false,
  categories: []
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    fetchCategories(state) {
      state.isLoading = true;

      state.categories = DUMB_DATA_CAT;

      state.isLoading = false;
    }
  }
})

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice;