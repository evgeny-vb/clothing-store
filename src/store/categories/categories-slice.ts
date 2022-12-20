import {CategoriesState} from "./categories-types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchCategories} from "./categories-thunk";

const initialState: CategoriesState = {
  isLoading: false,
  categories: [],
  error: undefined
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    })
  }
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice;