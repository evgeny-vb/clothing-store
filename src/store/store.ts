import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cart/cart-slice";
import categoriesSlice from "./categories/categories-slice";
import uiSlice from "./ui/ui-slice";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

const reducers = combineReducers({
  cart: cartSlice.reducer,
  categories: categoriesSlice.reducer,
  ui: uiSlice.reducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production"
});

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch