import {CategoriesState} from "./categories-types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchCategories} from "./categories-thunk";

const initialState: CategoriesState = {
  isLoading: false,
  categories: [],
  error: null
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  }
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice;