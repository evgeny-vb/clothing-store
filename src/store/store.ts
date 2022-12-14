import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cart/cart-slice";
import categoriesSlice from "./categories/categories-slice";
import uiSlice from "./ui/ui-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    categories: categoriesSlice.reducer,
    ui: uiSlice.reducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch