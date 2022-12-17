import {createAsyncThunk} from "@reduxjs/toolkit";
import {getCategoriesAndDocuments} from "../../utils/firebase";

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async () => {
    return await getCategoriesAndDocuments();
  }
);