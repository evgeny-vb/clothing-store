import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cart/cart-slice";
import categoriesSlice from "./categories/categories-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    categories: categoriesSlice.reducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch